const mongoose = require('mongoose')
const Schema = mongoose.Schema

const MatchSchema = new mongoose.Schema({
    isMatch:{
        type: Boolean, default: false
    },
    users:
    [
        {
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
        }
    ]

})

module.exports = Match = mongoose.model('match', MatchSchema)