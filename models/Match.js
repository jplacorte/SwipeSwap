const mongoose = require('mongoose');
const Schema = mongoose.Schema

const MatchSchema = new mongoose.Schema({
    users: [
        {
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
            }          
        }
    ],
    status: {
        type: String
    },
    superwant: {
        type: Boolean
    }

})

module.exports = Match = mongoose.model('match', MatchSchema)