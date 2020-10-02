const express = require('express')
const request = require('request')
const config = require('config')
const router = express.Router()
const auth = require('../../middleware/auth')
const { check, validationResult } = require('express-validator')

const Transaction = require('../../models/Transaction')
const UserTransaction = require('../../models/UserTransaction')
const Notif = require('../../models/Notification')
const User = require('../../models/User')

// @route   GET api/transaction/
// @des     Get all transaction of user
// @access  Private
router.get('/', auth, async (req, res) => {
    try {
        const user = await UserTransaction.find({user: req.user.id})

        return res.json(user)
    } catch (err) {
        console.error(err.message)
        res.status(500).send('Server Error')
    }
})

// @route   GET api/transaction/:id
// @des     Get all chat by transaction
// @access  Private
router.get('/:id', auth, async (req, res) => {
    try {

        const chat = await Transaction.find({_id: req.params._id})

        return res.json(chat)

    } catch (err) {
        
        console.error(err.message)
        res.status(500).send('Server Error')
    }
})

// @route   POST api/transaction/:item_id
// @des     Create a transaction
// @access  Private
router.post('/:item_id', auth, async (req, res) => {
    
    const userName = await User.findById(req.user.id)
    const matchField = {}

    matchField.users = {}
    matchField.users.user = req.user.id
    matchField.users.name = userName.name
    matchField.users.item = req.params.item_id

    try {
        match = new Notif(matchField)
        await match.save( async (err, docs) => {
            const transactionField = {}
            transactionField.match = docs._id

            transaction = new Transaction(transactionField)
            await transaction.save( async (error, result) => {

                const userTransactionField = {}
                userTransactionField.user = req.user.id
                userTransactionField.transaction = result._id
                userTransactionField.name = userName.name

                userTransactions = new UserTransaction(userTransactionField)
                await userTransactions.save()
            })
        })

        return res.json(match)

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
        const matches = await Notif.findOne({ _id: req.params.match_id })

        matches.users.unshift(newUser)

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
        res.status(500).send("Server Error")
    }
})

module.exports = router