const express = require('express')
const request = require('request')
const config = require('config')
const router = express.Router()
const auth = require('../../middleware/auth')
const { check, validationResult } = require('express-validator')

const Item = require('../../models/Item')
const User = require('../../models/User')
const Match = require('../../models/Match')
const Transaction = require('../../models/Transaction')
const Profile = require('../../models/Profile')
const UserTransaction = require('../../models/UserTransaction')

// @route  GET api/want/
// @desc   Get all transaction of user
// @access Private
router.get('/', auth, async (req, res) => {
    try {
        const user = await Transaction.find({userwant: req.user.id})

        return res.json(user)
    } catch (err) {
        console.error(err.message)
        res.status(500).send('Server Error')
    }
})

router.get('/user/1', auth, async (req, res) => {
    try {
        const user = await Transaction.find({user1: req.user.id})

        return res.json(user)
    } catch (err) {
        console.error(err.message)
        res.status(500).send('Server Error')
    }
})

router.get('/want/user/2', auth, async (req, res) => {
    try {
        const user = await Transaction.find({user2: req.user.id})

        return res.json(user)
    } catch (err) {
        console.error(err.message)
        res.status(500).send('Server Error')
    }
})
// @route  GET api/want/
// @desc   Get match id
// @access Private
router.get('/:item_id', auth, async (req, res) => {
    const item = await Match.find({users:{$elemMatch:{item: req.params.item_id, owner:req.user.id}}})
    try {
        res.json(item)
    } catch (err) {
        console.error(err.message)
        res.status(500).send('Server Error')
    }
})

// @route   POST api/want/:item_id/:owner_id
// @des     Want an item
// @access  Private
router.post('/:item_id/:owner_id', auth, async (req, res) => {
    const item = await Item.findById(req.params.item_id)
    const user = await Profile.findOne({ user: req.user.id }).populate('user', ['name'])
    const user2 = await Profile.findOne({ user:req.params.owner_id }).populate('user', ['name'])
    const checkUser1 = await Match.findOne({ user1: req.user.id }).select('user1')
    const checkUser2 = await Match.findOne({ user2: req.user.id }).select('user2')
    // const checkItem1 = await Match.findOne({ item1: req.params.item_id }).select('item1')
    // const checkItem2 = await Match.findOne({ item2: req.params.item_id }).select('item2')

    if(checkUser1 || checkUser2){
        // console.log("UPDAAAATTTTTTTTEEEEE", checkItem2, checkUser1, checkUser2)
        match = await Match.findOneAndUpdate(
            { user1: req.params.owner_id, user2: req.user.id},
            { $set: {item1: req.params.item_id, itemname1: item.itemname } },
            { new: true }
        )
        transaction = await Transaction.findOneAndUpdate(
            { user1: req.params.owner_id, user2: req.user.id},
            { $set: {item1: req.params.item_id, itemname1: item.itemname }},
            { new: true }
        )
    }else{
        // console.log("INSEEEEEERRRRRRTTTTTT", checkUser1, checkUser2)
        match = new Match({
            user1: req.user.id,
            user2: req.params.owner_id,
            username1: user.user.name,
            username2: user2.user.name,
            item2: req.params.item_id,
            itemname2: item.itemname,
        })
        await match.save(async(err, docs) => {
            trans = new Transaction({
                match: docs._id,
                user1: req.user.id,
                user2: req.params.owner_id,
                username1: user.user.name,
                username2: user2.user.name,
                item2: req.params.item_id,
                itemname2: item.itemname,
                itemphoto2: item.photo[0].url
            })
            await trans.save(async(data, result) => {
                userTrans = new UserTransaction({
                    user: req.user.id,
                    transaction: result._id,
                    name: user.user.name,
                    avatar: user.avatar,
                    owner: req.params.owner_id,
                    ownername: user2.user.name,
                    owneravatar: user2.avatar
                })
            await userTrans.save()
            })   
        })
        return res.json(match)
    }
    return res.json(match)
})

// @route   POST api/want/superwant/:item_id/:owner_id
// @des     Super want an item
// @access  Private
router.post('/superwant/:item_id/:owner_id', auth, async (req, res) => {

    const item = await Item.findById(req.params.item_id)
    const user = await Profile.findOne({user:req.user.id}).populate('user', ['name'])
    const owner = await Profile.findOne({user:req.params.owner_id}).populate('user', ['name'])

    
    try {
        match = new Match({
            user: req.user.id,
            owner: req.params.owner_id,
            ownername: owner.user.name,
            name: user.user.name,
            item: req.params.item_id,
            itemname: item.itemname,
            superwant: true
        })
        await match.save(async(err, docs) => {
            trans = new Transaction({
                match: docs._id,
                owner: req.params.owner_id,
                ownername: owner.user.name,
                item: req.params.item_id,
                itemname: item.itemname,
                itemphoto: item.photo[1].url,
                owneravatar: owner.avatar,
                userwant: req.user.id,
                userwantavatar: user.avatar,
                userwantname: user.user.name,
                superwant:true
            })
            await trans.save(async(data, result) => {
                userTrans = new UserTransaction({
                    user: req.user.id,
                    transaction: result._id,
                    name: user.user.name,
                    avatar: user.avatar,
                    owner: req.params.owner_id,
                    ownername: owner.user.name,
                    owneravatar: owner.avatar
                })
            await userTrans.save()
            })   
        })
        return res.json(match)
        
    } catch (err) {
        console.error(err.message)
        res.status(500).send('Server Error')
    }
})

// @route   PUT api/want/:trans_id
// @des     Udate transaction
// @access  Private
router.put('/:trans_id', auth, async (req, res) => {
    try {
        transaction = await Transaction.findOneAndUpdate(
            { _id: req.params.trans_id },
            { $set: {accepted: true} },
            { new: true }
        )
        return res.json(transaction)
    } catch (err) {
        console.error(err.message)
        res.status(500).send('Server Error')
    }
})

// @route   PUT api/want/change/owner/:trans_id
// @des     Change item by owner
// @access  Private
router.put('/change/owner/:trans_id', auth, async (req, res) => {
    const {
        item
    } = req.body
    const itemparams = await Item.findById(item)
    try {
        transaction = await Transaction.findOneAndUpdate(
            { _id: req.params.trans_id },
            { $set: {users:{ item:item, itemname:itemparams.itemname, itemphoto:itemparams.photo[0].url }} },
            { new: true }
        )
        return res.json(transaction)
    } catch (err){
        console.error(err.message)
        res.status(500).send('Server Error')
    }
})
module.exports = router