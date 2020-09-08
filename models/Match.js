const mongoose = require('mongoose')
const Schema = mongoose.Schema

const MatchSchema = new mongoose.Schema({
    isMatch:{
        type: Boolean
    },
    like: {
        user: {
            type: Schema.Types.ObjectId,
            ref: 'user'
        },
        item: {
            type: Schema.Types.ObjectId,
            ref: 'item'
        },
    }
})

module.exports = Match = mongoose.model('match', MatchSchema)