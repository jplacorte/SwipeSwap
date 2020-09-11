const express = require('express')
const request = require('request')
const config = require('config')
const router = express.Router()
const auth = require('../../middleware/auth')
const { check, validationResult } = require('express-validator')

const Transaction = require('../../models/Transaction')
const Match = require('../../models/Match')
const User = require('../../models/User')

// @route   POST api/transaction/:item_id
// @des     Create a transaction
// @access  Private
router.post('/:item_id', auth, async (req, res) => {
    
    const userName = await User.findById(req.user.id)
    const matchField = {}
    matchField.isMatch = true

    matchField.match = {}
    matchField.match.user = req.user.id
    matchField.match.name = userName.name
    matchField.match.item = req.params.item_id

    try {
        match = new Match(matchField)
        await match.save( async (err, docs) => {
            const transactionField = {}
            transactionField.match = docs._id

            transaction = new Transaction(transactionField)
            await transaction.save()
        })
    res.json(match)

    } catch (err) {
        console.error(err.message)
        res.status(500).send('Server Error')
    }
})

// @route   PUT api/transaction/:item_id/:match_id
// @des     Update a transaction
// @access  Private
router.put('/:item_id/:match_id', auth, async (req, res) => {
    
    const userName = await User.findById(req.user.id)

    const newUser = {
        user:req.user.id,
        name:userName.name,
        item:req.params.item_id
    }

    try {
        const matches = await Match.findOne({ _id: req.params.match_id })

        matches.match.unshift(newUser)

        await matches.save()
        res.json(matches)

    } catch (err) {
        console.error(err.message)
        res.status(500).send('Server Error')
    }
})

// @route   PUT api/transaction/user/chat/:id
// @des     Users chat
// @access  Private
router.put('/user/chat/:id', auth, async (req, res) => {

    const userName = await User.findById(req.user.id)

    const {
        text
    } = req.body

    const newChat = {
        text,
        name:userName.name,
        user:req.user.id
    }

    try {

        const userChat = await Transaction.findOne({ _id: req.params.id })

        userChat.chat.unshift(newChat)

        await userChat.save()

        res.json(userChat)
        
    } catch (err) {
        console.error(err.message)
        res.status(500).send("dsfsfd")
    }
})

module.exports = router