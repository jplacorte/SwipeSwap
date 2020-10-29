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
            user: { 
                type: Schema.Types.ObjectId,
                ref: 'user'
            },
            name: {
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
    }

})

module.exports = Match = mongoose.model('match', MatchSchema)