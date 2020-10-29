const mongoose = require('mongoose')
const Schema = mongoose.Schema

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
    status: {
        type: Boolean
    },
    reason: {
        type: String
    },
    users: [
        {
            user:{
                type: Schema.Types.ObjectId,
                ref:'user'
            },

            name:{
                type: String
            },

            item:{
                type: Schema.Types.ObjectId,
                ref:'item'
            },

            itemname: {
                type: String
            }
        }
    ],
    chat: [
        {
            user:{
                type: Schema.Types.ObjectId,
                ref: 'user'
            },
            name: {
                type: String
            },
            text:{
                type: String
            },
        }
    ]
})

module.exports = Transaction = mongoose.model('transaction', TransactionSchema)