const express = require('express')
const router = express.Router()
const mongoose = require('mongoose');
const auth = require('../../middleware/auth')

const Conversation = require('../../models/Conversation')
const Chat = require('../../models/Chat')
const Profile = require('../../models/Profile')
const Transaction = require('../../models/Transaction')

// @route   GET api/chat/
// @des     Get conversations list
// @access  Private
router.get('/', auth, (req, res) => {

    let from = mongoose.Types.ObjectId(req.user.id)

    Conversation.aggregate([
        {
            $lookup: {
                from: 'user',
                localField: 'users',
                foreignField: '_id',
                as: 'usersObj'
            }
        }
    ]).match({
        users: { $all: [{ $elemMatch: { $eq: from } }] }
    }).project({
        'usersObj._v': 0
    }).exec((err, conversations) => {
        if(err){
            console.log(err)
            res.setHeader('Content-Type', 'application/json')
            res.end(JSON.stringify({ message: 'Failure' }))
            res.status(500)
        }else{
            return res.json(conversations)
        }
    })
})

// @route   GET api/chat/:con_id
// @des     Get messages
// @access  Private
router.get('/:con_id', auth, async (req, res) => {
    
    try {
        const con = await Chat.find({ conversation: req.params.con_id })
        
        if(!con){
            return res.status(400).json({ msg: 'Empty...' })
        }

        res.json(con)
        
    } catch (err) {
        console.error(err.message)
        res.status(500).send("Server Error")
    }

})

// @route   POST api/chat/message
// @des     Post a message
// @access  Private
router.post('/messages/:trans_id', auth, async (req, res) => {

    let fromProfile = await Profile.findOne({user:req.user.id}).populate('user', ['name'])
    let toProfile = await Profile.findOne({user:req.body.to}).populate('user', ['name'])
    
    await Conversation.findOneAndUpdate({
        _id: req.body.convID
    }, 
    {
        transaction: req.params.trans_id,
        users: [req.user.id, req.body.to],
        avatars: [fromProfile.avatar, toProfile.avatar],
        names:[fromProfile.user.name, toProfile.user.name],
        lastMessage: req.body.body,
        date: Date.now()
    },
    { upsert: true, new: true },
    async (err, conversation) => {
        try {

            let chat = new Chat({
                conversation: conversation._id,
                to: req.body.to,
                toAvatar: toProfile.avatar,
                toName: toProfile.user.name,
                from: req.user.id,
                fromAvatar: fromProfile.avatar,
                fromName:fromProfile.user.name,
                body: req.body.body,
                date: Date.now()
            })
            
            await req.io.sockets.emit('messages', req.body.body)

            await chat.save()
            return res.json(chat)
        } catch (err) {
            console.error(err.message)
            res.status(500).send("Server Error")
        }
     }
    )
})

//  @route  POST api/chat/:trans_id
//  @desc   Create a new message
//  @access Private
router.post('/:trans_id', auth, async (req, res) => {

        const fromProfile = await Profile.findOne({user:req.user.id}).populate('user', ['name'])
        const toProfile = await Profile.findOne({user:req.body.to}).populate('user', ['name'])
        
    try {
        const con = new Conversation({
            transaction: req.params.trans_id,
            users: [req.user.id, req.body.to],
            avatars: [fromProfile.avatar, toProfile.avatar],
            names:[fromProfile.user.name, toProfile.user.name],
            lastMessage: "new",
            date: Date.now()
        })

        await Transaction.findByIdAndUpdate(
            { _id: req.params.trans_id },
            { $set: { messaged: true } },
            { new: true }
        )

        con.save()
        return res.json(con)
        
    } catch (err) {
        console.error(err.message)
        res.status(500).send("Server Error")
    }
})

module.exports = router