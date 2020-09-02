const mongoose = require('mongoose')
const Schema = mongoose.Schema

const MatchSchema = new mongoose.Schema({
    isMatch:{
        type: Boolean
    },
    like: {
        user: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'user'
        },
        item: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'item'
        },
    }
})

module.exports = Match = mongoose.model('match', MatchSchema)