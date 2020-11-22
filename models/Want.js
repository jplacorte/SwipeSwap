const mongoose = require('mongoose')
const Schema = mongoose.Schema

const WantSchema = new mongoose.Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: 'user'
    },
    username: {
        type: String
    },
    useravatar: {
        type: String
    },
    owner: {
        type: Schema.Types.ObjectId,
        ref: 'user'
    },
    ownername: {
        type: String
    },
    owneravatar: {
        type: String
    },
    itemwant: {
        type: Schema.Types.ObjectId
    },
    itemwantname: {
        type: String
    },
    itemwantphoto: {
        type: String
    }
})

module.exports = Want = mongoose.model('want', WantSchema)