const mongoose = require('mongoose');
const Schema = mongoose.Schema

const MatchSchema = new mongoose.Schema({
    owner: {
        type: Schema.Types.ObjectId,
        ref: 'user'
    },
    ownername: {
        type: String
    },
    ownerAvatar: {
        type: String
    },
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
    item: {
        type: Schema.Types.ObjectId,
        ref: 'item'
    },
    itemname: {
        type: String
    },          
    status: {
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
    superwant: {
        type: Boolean
    }

})

module.exports = Match = mongoose.model('match', MatchSchema)