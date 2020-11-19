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
    const user = await User.findById(req.user.id)
    const ownername = await User.findById(req.params.owner_id)
    const owner = await Match.find({users:{$elemMatch:{owner:req.user.id}}})
    const matchItem = await Match.find({users:{$elemMatch:{ item: req.params.item_id }}})

    const {
        match_id
    } = req.body

    console.log(owner)
    console.log(match_id)
    
    if(matchItem.length > 0){
        console.log("Ara ang item")
        if(owner.length > 0 ){
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
                    ]
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
                res.status(500).send('Server Error')
            }
        }else{
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
                    ]
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
                res.status(500).send('Server Error')
            }
        }
    }else{
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
                ]
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
            res.status(500).send('Server Error')
        }
    }
    res.json(matchItem)
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
            users: [
                {
                    user: req.user.id,
                    owner: req.params.owner_id,
                    ownername: owner.user.name,
                    name: user.user.name,
                    item: req.params.item_id,
                    itemname: item.itemname
                }
            ],
            superwant: true
        })
        await match.save(async(err, docs) => {
            trans = new Transaction({
                match: docs._id,
                users:{
                    owner: req.params.owner_id,
                    ownername: owner.user.name,
                    item: req.params.item_id,
                    itemname: item.itemname,
                    itemphoto: item.photo[1].url,
                    owneravatar: owner.avatar,
                    userwant: req.user.id,
                    userwantavatar: user.avatar,
                    userwantname: user.user.name,
                },
                superwant:true
            })
            await trans.save()
        })
        return res.json(match)
        
    } catch (err) {
        console.error(err.message)
        res.status(500).send('Server Error')
    }
})

// @route   POST api/want/:user_id
// @des     Accept superwant
// @access  Private
router.post('/:user_id/:trans_id', auth, async (req, res) => {
    try {
        
    } catch (err) {
        console.error(err.message)
        res.status(500).send('Server Error')
    }
})
module.exports = router