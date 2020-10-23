const express = require('express')
const router = express.Router()
const auth = require('../../middleware/auth')
const { check, validationResult } = require('express-validator')

const Item = require('../../models/Item')
const User = require('../../models/User')
const Match = require('../../models/Match')

// @route   GET api/item/
// @des     Get all items from user
// @access  Private
router.get('/', auth, async (req, res) => {
    try {
        const match = await Match.find({users:{$elemMatch:{ user: req.user.id }}})
        
        if(!match){
            return res.status(400).json({ msg: 'There is no match' })
        }

        res.json(match)
    } catch (err) {
        console.error(err.message)
        res.status(500).send("Server Error")
    }
})

module.exports = router