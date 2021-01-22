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
    item: {
        type: Schema.Types.ObjectId,
        ref: 'item'
    },
    itemname: {
        type: String
    },
    itemdesc: {
        type: String
    },
    itemstatus: {
        type: String
    },
    itemphoto: {
        type: String
    },
    userwant: { 
        type: Schema.Types.ObjectId,
        ref: 'user'
    },
    userwantavatar: {
        type: String
    },
    userwantname: {
        type: String
    },
    userwantitem: {
        type: Schema.Types.ObjectId,
        ref: 'item'
    },
    userwantitemname: {
        type: String
    },
    userwantitemdesc: {
        type: String
    },
    userwantitemstat: {
        type: String
    },
    userwantitemphoto: {
        type: String
    },
    user1: {
        type: Schema.Types.ObjectId,
        ref: 'user'
    },
    username1: {
        type: String
    },
    useravatar1: {
        type: String
    },
    item1: {
        type: Schema.Types.ObjectId,
        ref: 'item'
    },
    itemname1: {
        type: String
    },
    itemdesc1: {
        type: String
    },
    itemstatus1: {
        type: String
    },
    itemphoto1: {
        type: String
    },
    user2: {
        type: Schema.Types.ObjectId,
        ref: 'user'
    },
    username2: {
        type: String
    },
    useravatar2: {
        type: String
    },
    item2: {
        type: Schema.Types.ObjectId,
        ref: 'item'
    },
    itemname2: {
        type: String
    },
    itemdesc2: {
        type: String
    },
    itemstatus2: {
        type: String
    },
    itemphoto2:{
        type: String
    },
    superwant: {
        type: Boolean, default: false
    },
    messaged: {
        type: Boolean, default: false
    },
    accepted: {
        type: String
    },
    swapped: {
        type: String
    }
})

module.exports = Transaction = mongoose.model('transaction', TransactionSchema)