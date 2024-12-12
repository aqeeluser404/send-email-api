const mongoose = require('mongoose')

const userMessageSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    message: { type: String, required: true },
    recaptchaResponse: { type: String, required: true },
    dateCreated: { type: Date }
}, { collection: 'User Messages'})

module.exports = mongoose.model('User Messages', userMessageSchema)