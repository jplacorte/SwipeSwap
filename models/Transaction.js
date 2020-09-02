const mongoose = require('mongoose')

const TransactionSchema = new mongoose.Schema({
    match: {
        type: Schema.Types.ObjectId,
        ref: 'match'
    },
    schedule: {
        type: String
    },
    location: {
        type: String
    },
    dateoftransaction: {
        type: Date
    },
    confirmation: {
        type: Boolean
    },
    reason: {
        type: String
    },
    chat: [
        {
            user:{
                type: Schema.Types.ObjectId,
                ref: 'users'
            },
            text:{
                type: String,
                required: true
            },
        }
    ]
})

module.exports = Transaction = mongoose.model('transaction', TransactionSchema)