const mongoose = require('mongoose')

const ProfileSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user'
    },
    dateofbirth: {
        type: String
    },
    location: {
        type: String,
        required: true
    },
    subscriptionlevel: {
        type: String,
        required: true
    },
    totalswaps: {
        type: String
    },
    totalswipes: {
        type: String
    },
    averagetimeofuse: {
        type: String
    },
    avatar: {
        type: String
    },
    coins:{
        type: String
    },
    rating: {
        type: String
    },
    badges: [
        {
            badgename: {
                type: String
            }
        }
    ]
})

module.exports = Profile = mongoose.model('profile', ProfileSchema)