const express = require('express')
const request = require('request')
const config = require('config')
const router = express.Router()
const auth = require('../../middleware/auth')
const { check, validationResult } = require('express-validator')
const multer = require('multer')
const cloudinary = require('cloudinary').v2
const { CloudinaryStorage } = require('multer-storage-cloudinary')

const Item = require('../../models/Item')
const User = require('../../models/User')
const Match = require('../../models/Match')


cloudinary.config({
    cloud_name: 'dibx7ua1g',
    api_key: '622971834249575',
    api_secret: '1UI_jshZXsKRmgGZ9pG62Wwn-1Q'
})

const storage = new CloudinaryStorage({
    cloudinary : cloudinary,
    params:{
        folder: "swipeSwap",
        allowed_formats: ["jpg", "png", "jpeg", "webp"],
        transformation: [{quality: 'auto' }]  
    }
})

const parser = multer({ storage: storage })

// @route   GET api/item/
// @des     Get all items from user
// @access  Private
router.get('/', auth, async (req, res) => {
    try {
        const item = await Item.find({ user: req.user.id, swapped: false })
        
        if(!item){
            return res.status(400).json({ msg: 'There is no item' })
        }

        res.json(item)
    } catch (err) {
        console.error(err.message)
        res.status(500).send("Server Error")
    }
})

// @route   GET api/item/
// @des     Get all items except from logged in user
// @access  Private
router.get('/swipe/items/all', auth, async (req, res) => {
    try {
        const item = await Item.find({ user: { $nin: [req.user.id] }, swapped: false }).populate('user', ['name'])

        if(!item){
            return res.status(400).json({ msg: 'There is no item' })
        }

        res.json(item)

    } catch (err) {
        console.error(err.message)
        res.status(500).send("Server Error")
    }
})

// @route   GET api/item/:id
// @des     Get item by id
// @access  Private
router.get('/:id', auth, async (req, res) => {
    try {
        const item = await Item.findById(req.params.id)
        
        if(!item){
            return res.status(400).json({ msg: 'There is no item' })
        }

        res.json(item)
    } catch (err) {
        console.error(err.message)
        res.status(500).send("Server Error")
    }
})

// @route   POST item
// @des     Add Item
// @access  Private
router.post('/', parser.single('file'), auth, async (req, res) => {
    const {
        itemname,
        description,
        status,
        categories
    } = req.body

    //Build Item Objects
    const itemFields = {}
    itemFields.user = req.user.id
    itemFields.rating = "0"
    itemFields.swapped = false
    if(itemname) itemFields.itemname = itemname
    if(description) itemFields.description = description
    if(status) itemFields.status = status
    if(categories){
        itemFields.categories = categories.split(',').map(cat => cat.trim())
    }

    try {

        item = new Item(itemFields)
        await item.save(async (err, docs) => {
            const insertedID = await Item.findById(docs._id)
        
            insertedID.photo.push({ url: req.file.path })
            await insertedID.save()
        })
        await item.save()
        return res.json(item)

    } catch (err) {
        console.error(err.message)
        res.status(500).send('Server Error')
    }
})

// @route   PUT item/item_id
// @desc    Update Item
// @access  Private
router.put('/:item_id', auth, async (req, res) => {
    const {
        itemname,
        description,
        status,
        catvalue
    } = req.body

    //Build Item Objects
    const itemFields = {
        user: req.user.id,
        itemname,
        description,
        status,
        categories: Array.isArray(catvalue)
        ? catvalue
        : catvalue.split(',').map((cat) => cat.trim())
    }

    try {
        //Update Item
        let item = await Item.findByIdAndUpdate(
            { _id: req.params.item_id },
            { $set: itemFields },
            { new: true, upsert: true, setDefaultsOnInsert: true }
        )
        return res.json(item)  
        
    } catch (err) {
        console.error(err.message)
        res.status(500).send('Server Error')
    }
})

// @route   PUT item/swapped/id
// @desc    Set swapped to true
// @access  Private
router.put('/swapped/:id', auth, async (req, res) => {

    const itemFields = {}
    itemFields.swapped = true

    let item = await Item.findOne({ _id: req.params.id })

    item = await Item.findByIdAndUpdate(
        { _id: req.params.id },
        { $set: itemFields },
        { new: true }
    )

    return res.json(item)
})

// @route   GET item/swapped
// @desc    Get swapped items
// @access  Private
router.get('/swapped/items', async (req, res) => {
    try {
        let swappedItem = await Item.find({ swapped: true })
        
        if(!swappedItem){
            return res.status(400).json({ msg: 'There is no item' })
        }

        res.json(swappedItem)
        
    } catch (err) {
        console.error(err.message)
        res.status(500).send("Server Error")
    }
})

// @route   PUT item/upload/photo/:id
// @des     Add photo
// @access  Private
router.put('/upload/photo/:id', auth, parser.single('file'), async (req, res) => {

    try {
        const item = await Item.findById(req.params.id)
        
        item.photo.push({ url: req.file.path })
        await item.save()
        return res.json(item.photo)
        
    } catch (err) {
        console.error(err.message)
        res.status(500).send("Server Error")
    }

})


// @route   PUT api/item/review/:item_id
// @des     Review an item
// @access  Private
router.put('/review/:id', auth, async (req, res) => {
    const {
        rating,
        reviewdetails
    } = req.body

    let userName =  await User.findById(req.user.id)

    const itemFields = {}
    if(rating) itemFields.rating = rating
    itemFields.review = {}
    itemFields.review.user = req.user.id
    itemFields.review.name = userName.name
    if(reviewdetails) itemFields.review.reviewdetails = reviewdetails

    try {
        let item = await Item.findOne({ _id: req.params.id })

        item = await Item.findByIdAndUpdate(
            { _id: req.params.id },
            { $set: itemFields },
            { new: true }
        )
        return res.json(item)
    } catch (err) {

        console.error(err.message)
        res.status(500).send('Server Error')

    }
})

// @route   PUT api/item/review/:item_id
// @des     Review an item
// @access  Private
router.post('/want/:item_id', auth, async (req, res) => {

    const item = Item.findById(req.params.item_id)
    const user = User.findById(req.user.id)

    try {

        match = new Match({
            user: req.user.id,
            name: user.name,
            item: req.params.item_id,
            itemname: item.itemname
        })
        
        await match.save()
        return res.json(match)

    } catch (err) {

        console.error(err.message)
        res.status(500).send('Server Error')
    }
})

module.exports = router