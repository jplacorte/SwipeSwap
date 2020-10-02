const mongoose = require('mongoose')
const Schema = mongoose.Schema

const NotificationSchema = new mongoose.Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: 'user'
    },
    name: {
        type: String
    },
    text: {
        type: String
    },
    read: {
        type: Boolean, default: false
    }

})

module.exports = Notif = mongoose.model('notification', NotificationSchema)