const mongoose = require('mongoose')
const Schema = mongoose.Schema

const LimitSchema = new mongoose.Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: 'user'
    },
    rewind: {
        type: Number
        },
    superwant: {
        type: Number
        },
    rewindsleft: {
        type: Number,
        default: 4
    },
    superwantleft: {
        type: Number,
        default: 4
    },
    date: {
        type: String,
        default: Date.now,
    }
})

module.exports = Limitation = mongoose.model('limit', LimitSchema)