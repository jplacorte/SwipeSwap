const express = require('express')
const request = require('request')
const config = require('config')
const router = express.Router()
const auth = require('../../middleware/auth')
const { check, validationResult } = require('express-validator')

const Item = require('../../models/Item')
const User = require('../../models/User')

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
router.post('/', auth, async (req, res) => {
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
        itemFields.categories = categories.split(',').map(category => category.trim())
    }

    try {

        item = new Item(itemFields)
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
        category
    } = req.body

    //Build Item Objects
    const itemFields = {}
    itemFields.user = req.user.id
    if(itemname) itemFields.itemname = itemname
    if(description) itemFields.description = description
    if(status) itemFields.status = status
    if(category){
        itemFields.category = category.split(', ').map(cat => cat.trim())
    }

    let item = await Item.findOne({ _id: req.params.item_id })
    //Update Item
    item = await Item.findByIdAndUpdate(
        { _id: req.params.item_id },
        { $set: itemFields },
        { new: true }
    )

    return res.json(item)
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

// @route   PUT item/photo
// @des     Add photo
// @access  Private
router.put('/photo', auth, async (req, res) => {
    const {
        url
    } = req.body

    const newPhoto = {
        url
    }
    try {

        const photo = await Item.findOne({ user: req.user.id })

        photo.category.unshift(newPhoto)
        
        await photo.save()

        return res.json(photo)

    } catch (err) {

        console.error(err.message)
        res.status(500).send('Server Error')

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

module.exports = router