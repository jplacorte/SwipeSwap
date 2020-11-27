const express = require('express')
const router = express.Router()
const mongoose = require('mongoose');
const auth = require('../../middleware/auth')

const Conversation = require('../../models/Conversation')
const Chat = require('../../models/Chat')

// @route   GET api/chat/
// @des     Get conversations list
// @access  Private
router.get('/', auth, async (req, res) => {

    let from = mongoose.Types.ObjectId(req.user.id)

    await Conversation.aggregate([
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
    }).exec(async (err, conversations) => {
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
router.post('/messages', auth, async (req, res) => {

    let from = mongoose.Types.ObjectId(req.user.id);
    let to = mongoose.Types.ObjectId(req.body.to);

    await Conversation.findOneAndUpdate({
        users: {
            $all: [
                {$elemMatch: { $eq: from }},
                {$elemMatch: { $eq: to }}
            ]
        }
    }, 
    {
        users: [req.user.id, req.body.to],
        lastMessage: req.body.body,
        date: Date.now()
    },
    { upsert: true, new: true, setDefaultsOnInsert: true },
    function(err, conversation){
        if(err){
            console.log(err)
            res.setHeader('Content-Type', 'application/json');
            res.end(JSON.stringify({ message: 'Failure' }))
            res.status(500)
        }else{
            let chat = new Chat({
                conversation: conversation._id,
                to: req.body.to,
                from: req.user.id,
                body: req.body.body,
                date: Date.now()
            })
            
            req.io.sockets.emit('messages', req.body.body)

            chat.save( err => {
                if (err) {
                    console.log(err);
                    res.setHeader('Content-Type', 'application/json');
                    res.end(JSON.stringify({ message: 'Failure' }));
                    res.sendStatus(500);
                } else {
                    res.setHeader('Content-Type', 'application/json');
                    res.end(
                        JSON.stringify({
                            message: 'Success',
                            conversationId: conversation._id,
                        })
                    );
                }
            })
        }
    }
    )
})

module.exports = router