const UserMessage = require('../models/userMessageModel')
const { getInContactEmail } = require('../utils/sendEmail')

module.exports.SendMessageService = async (message) => {
    try {
        const UserMessageData = new UserMessage({
            name: message.name,
            email: message.email,
            message: message.message,
            recaptchaResponse: message.recaptchaResponse,
            dateCreated: new Date()
        })
        getInContactEmail(UserMessageData)
        await UserMessageData.save()
    } catch (error) {
        throw error
    }
}