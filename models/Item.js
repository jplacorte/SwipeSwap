const mongoose = require('mongoose')
const Schema = mongoose.Schema

const ItemSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user'
    },
    itemname: {
        type: String
    },
    description: {
        type: String
    },
    status: {
        type: String
    },
    photo: [
        {
            url:{
                type: String
            }
        }
    ],
    categories: {
        type: [String]
    },
    rating: {
        type: String
    },
    review: [
        {
            user: {
                type: Schema.Types.ObjectId,
                ref: 'users'
            },
            name: {
                type: String
            },
            reviewdetails: {
                type: String
            }
        }
    ],
    want: [
        {
            user: {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'user'
            }
        }
    ],
    superwant: [
        {
            user: {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'user'
            }
        }
    ],
    swapped: {
        type: Boolean, default: false
    }
})

module.exports = Item = mongoose.model('item', ItemSchema)