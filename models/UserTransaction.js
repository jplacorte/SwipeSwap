const mongoose = require('mongoose')
const Schema = mongoose.Schema

const UserTransactionSchema = new mongoose.Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: 'user'
    },
    transaction: {
        type: Schema.Types.ObjectId,
        ref: 'transaction'
    },
        name: {
        type: String
    },
})

module.exports = UserTransaction = mongoose.model('usertransaction', UserTransactionSchema)