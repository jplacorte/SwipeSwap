const mongoose = require('mongoose')
const Schema = mongoose.Schema

const ProfileSchema = new mongoose.Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: 'user'
    },
    dateofbirth: {
        type: String
    },
    location: {
        type: String
    },
    subscriptionlevel: {
        type: String,
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
    ],
    social: {
        google: {
            type: String
        },
        facebook: {
            type: String
        },
        instagram: {
            type: String
        }
    },
    receivedFromSwapped: [
        {
            owner: {
                type: Schema.Types.ObjectId,
                ref:'user'
            },
            name: {
                type: String
            },
            avatar: {
                type: String
            },
            item: {
                type: Schema.Types.ObjectId,
                ref:'item'
            },
            itemname: {
                type: String
            },
            itemimage: {
                type: String
            },
            rating: {
                type: String
            },
            reviewdetails: {
                type: String
            },      
            status: {
                type: String
            },
            description: {
                type: String
            }
        }
    ],
    boring: [
        {
            item: {
                type: Schema.Types.ObjectId,
                ref: 'item'
            },
            itemname: {
                type: String
            },
            categories: [String]
        }
    ]
})

module.exports = Profile = mongoose.model('profile', ProfileSchema)