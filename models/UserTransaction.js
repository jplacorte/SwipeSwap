const mongoose = require('mongoose')
const Schema = mongoose.Schema

const UserTransactionSchema = new mongoose.Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: 'user'
    },
    name: {
        type: String
    },
    avatar: {
        type: String
    },
    owner: {
        type: Schema.Types.ObjectId,
        ref: 'user'
    },
    ownername: {
        type: String
    },
    owneravatar: {
        type: String
    },
    transaction: {
        type: Schema.Types.ObjectId,
        ref: 'transaction'
    },
    swapped: {
        type: String
    }
    
})

module.exports = UserTransaction = mongoose.model('usertransaction', UserTransactionSchema)