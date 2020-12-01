const mongoose = require('mongoose')
const Schema = mongoose.Schema

const ChatSchema = new mongoose.Schema({
    conversation: {
            type: Schema.Types.ObjectId,
            ref: 'conversation'
    },
    to: {
        type: Schema.Types.ObjectId,
        ref: 'user'
    },
    toAvatar: {
        type: String
    },
    toName: {
        type: String
    },
    from: {
        type: Schema.Types.ObjectId,
        ref: 'user'
    },
    fromAvatar: {
        type: String
    },
    fromName: {
        type: String
    },
    body: {
        type: String,
        required: true
    },
    date: {
        type: String,
        default: Date.now,
    }
})

module.exports = Chat = mongoose.model('chat', ChatSchema)