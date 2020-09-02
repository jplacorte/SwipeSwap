const express = require('express')
const request = require('request')
const config = require('config')
const router = express.Router()
const auth = require('../../middleware/auth')
const { check, validationResult } = require('express-validator')

const Item = require('../../models/Item')
const User = require('../../models/User')

// @route   GET api/item
// @des     Get current users profile
// @access  Private
router.get('/', auth, async (req, res) => {
    try {
        const item = await Item.findOne({ user: req.user.id }).populate('user', ['name'])
        
        if(!item){
            return res.status(400).json({ msg: 'There is no item' })
        }

        res.json(item)
    } catch (err) {
        console.error(err.message)
        res.status(500).send("Server Error")
    }
})

// @route   POST api/item
// @des     Create/Update Item
// @access  Private
router.post('/', auth, async (req, res) => {
    const {
        itemname,
        description,
        status,
        photo
    } = req.body

    //Build Item Objects
    const itemFields = {}
    itemFields.user = req.user.id
    if(itemname) itemFields.itemname = itemname
    if(description) itemFields.description = description
    if(status) itemFields.status = status
    if(photo) itemFields.photo = photo

    try {
        let item = await Item.findOne({ user: req.user.id })

        if(item){
            //Update Item
            item = await Item.findByIdAndUpdate(
                { user: req.user.id },
                { $set: itemFields },
                { new: true }
            )

            return res.json(item)
        }
        
        //Create
        item = new Item(itemFields)
        await item.save()
        res.json(item)

    } catch (err) {
        console.error(err.message)
        res.status(500).send('Server Error')
    }
})

// @route   POST api/item/category
// @des     Add category
// @access  Private
router.put('/category', auth, async (req, res) => {
    const {
        name
    } = req.body

    const newCategory = {
        name
    }
    try {

        const item = await Item.findOne({ user: req.user.id })

        item.category.unshift(newCategory)
        
        await item.save()

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