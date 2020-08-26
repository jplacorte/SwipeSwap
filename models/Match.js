const mongoose = require('mongoose')

const MatchSchema = new mongoose.Schema({
    like: {
        user: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'user'
        },
        item: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'item'
        },
    },
    status: {
        match:{
            type: Boolean
        }
    }
})

module.exports = Match = mongoose.model('match', MatchSchema)