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
    from: {
        type: Schema.Types.ObjectId,
        ref: 'user'
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