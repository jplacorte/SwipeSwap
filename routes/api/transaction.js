const express = require('express')
const request = require('request')
const config = require('config')
const router = express.Router()
const auth = require('../../middleware/auth')
const { check, validationResult } = require('express-validator')

const Transaction = require('../../models/Transaction')
const User = require('../../models/User')

// @route   POST api/transaction
// @des     Create/Update a transaction
// @access  Private
router.post('/', auth, async (req, res) => {

    const {
        schedule,
        location,
        dateoftransaction,
        confirmation,
        reason
    } = req.body

    const transactionField = {}
    transactionField.match = req.match.id
    if(schedule) transactionField.schedule = schedule
    if(location) transactionField.location = location
    if(dateoftransaction) transactionField.dateoftransaction = dateoftransaction
    if(confirmation) transactionField.confirmation = confirmation
    if(reason) transactionField.reason = reason

    try {
        
        let profile = await Profile.findOne({ match: req.match.id })

        if(profile){
            //Update
            profile = await Profile.findOneAndUpdate(
                { match: req.match.id },
                { $set: profileFields },
                { new: true }
            )

            return res.json(profile)
        }
        
    } catch (err) {
        console.error(err.message)
        res.status(500).send('Server Error')
    }
})

// @route   PUT api/transaction
// @des     Users chat
// @access  Private
router.put('/chat', async (req, res) => {
    const {
        user,
        text
    } = req.body

    const newChat = {
        user,
        text
    }

    try {

        const userChat = await Transaction.findOne({ user: req.user.id })

        userChat.chat.unshift(newChat)

        await userChat.save()
        
    } catch (err) {
        console.error(err.message)
        res.status(500).send("Server Error")
    }
})

module.exports = router