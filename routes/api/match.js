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

// @route   GET api/match/trans/item
// @des     Get items from other user
// @access  Private
router.get('/trans/item', auth, async (req, res) => {
    try {
        const item = await Match.find({ user: { $nin: [req.user.id] }})

        if(!item){
            return res.status(400).json({ msg: 'There is no item' })
        }

        res.json(item)

    } catch (err) {
        console.error(err.message)
        res.status(500).send("Server Error")
    }
})

// @route   POST api/match/superwant/:owner_id/:item_id
// @des     Superwant an item
// @access  Private
router.post('/superwant/:owner_id/:item_id', auth, async (req, res) => {

    const item = await Item.findById(req.params.item_id)
    const user = await User.findById(req.user.id)
    const ownername = await User.findById(req.params.owner_id)

    try {
        match = new Match({
            users: [
                {
                    user: req.user.id,
                    owner: req.params.owner_id,
                    ownername: ownername.name,
                    name: user.name,
                    item: req.params.item_id,
                    itemname: item.itemname
                }
            ],
            status: "Pending",
            supwerwant: true
        })
        await match.save(async(err, docs) => {
            trans = new Transaction({
                match: docs._id,
                users:{
                    user: req.user.id,
                    name: user.name,
                    item: req.params.item_id,
                    itemname: item.itemname
                }
            })
            await trans.save()
        })
        return res.json(match)
        
    } catch (err) {
        console.error(err.message)
        res.status(500).send("Server Error")
    }
})

module.exports = router