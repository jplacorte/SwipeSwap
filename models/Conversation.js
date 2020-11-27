const mongoose = require('mongoose')
const Schema = mongoose.Schema

const ConversationSchema = new mongoose.Schema({
    transaction: {
        type: Schema.Types.ObjectId,
        ref: 'transaction'
    },
    users: [
        {
            type: Schema.Types.ObjectId,
            ref: 'user'
        }
    ],
    lastMessage: {
        type: String
    },
    date: {
        type: String,
        default: Date.now,
    }
})

module.exports = Conversation = mongoose.model('conversation', ConversationSchema)