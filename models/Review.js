const mongoose = require('mongoose')
const Schema = mongoose.Schema

const ReviewSchema = new mongoose.Schema({
    user: { 
        type: Schema.Types.ObjectId,
        ref: 'user'
    },
    owner:{
        type: Schema.Types.ObjectId,
        ref: 'user'
    },
    avatar: {
        type: String
    },
    ownername: {
        type: String
    },
    name: {
        type: String,
        required: true
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
    review: {
        type: String
    },
    image:{
        type: String
    },
    image2:{
        type: String
    },
    image3:{
        type: String
    },
    image4:{
        type: String
    }
})

module.exports = Review = mongoose.model('review', ReviewSchema)