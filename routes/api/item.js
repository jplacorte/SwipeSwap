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
        const item = await Item.find({ user: req.user.id })
        
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
        status
    } = req.body

    //Build Item Objects
    const itemFields = {}
    itemFields.user = req.user.id
    if(itemname) itemFields.itemname = itemname
    if(description) itemFields.description = description
    if(status) itemFields.status = status

    try {

        item = new Item(itemFields)
        await item.save()
        res.json(item)

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
        status
    } = req.body

    //Build Item Objects
    const itemFields = {}
    itemFields.user = req.user.id
    if(itemname) itemFields.itemname = itemname
    if(description) itemFields.description = description
    if(status) itemFields.status = status

    let item = await Item.findOne({ _id: req.params.item_id })
    //Update Item
    item = await Item.findByIdAndUpdate(
        { _id: req.params.item_id },
        { $set: itemFields },
        { new: true }
    )

    return res.json(item)
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

        res.json(photo)

    } catch (err) {

        console.error(err.message)
        res.status(500).send('Server Error')

    }

})

// @route   PUT api/item/category
// @des     Add category
// @access  Private
router.put('/category/:id', auth, async (req, res) => {
    const {
        name
    } = req.body

    const newCategory = {
        name
    }
    try {

        const item = await Item.findById(req.params.id)

        item.category.unshift(newCategory)
        
        await item.save()

        res.json(item)

    } catch (err) {

        console.error(err.message)
        res.status(500).send('Server Error')

    }

})

// @route   PUT api/item/:cat_id
// @des     Update category
// @access  Private
router.put('/category/:item_id/:cat_id', auth, async (req, res) => {
    const {
        name
    } = req.body

    try {

        let item = await Item.findById(req.params.item_id)

        item.category.findByIdAndUpdate({
            _id: req.params.cat_id,
            name: name
        })
        
        res.json(item)

    } catch (err) {

        console.error(err.message)
        res.status(500).send('Server Error')

    }

})

// @route   POST api/item/review
// @des     Review an item
// @access  Private
router.post('/review', [ auth, [  
    check('reviewdetails').not().isEmpty()
  ] ], async (req, res) => {
      const errors = validationResult(req)
      if(!errors.isEmpty()){
          return res.status(400).json({ errors: errors.array() })
      }
      try {
          const user = await User.findById(req.user.id).select('-password')
          const item = await Item.findById(req.params.id)

          const newReview = {
              reviewdetails: req.body.reviewdetails,
              name: user.name
          }

          item.review.unshift(newReview)

          await item.save()

          res.json(item.review)

      } catch (err) {
          console.error(err.message)
          res.status(500).send('Server Error') 
      }
  })

module.exports = router