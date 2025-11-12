const UserMessage = require('../models/userMessageModel')
const { getInContactEmail } = require('../utils/sendEmail')
const { verifyRecaptcha } = require('../utils/recaptcha')

module.exports.SendMessageService = async (message) => {
    try {
        // Verify reCAPTCHA 
        // const isRecaptchaValid = await verifyRecaptcha(message.recaptchaResponse); 
        // if (!isRecaptchaValid) { 
        //     throw new Error('reCAPTCHA verification failed'); 
        // }
        const UserMessageData = new UserMessage({
            name: message.name,
            email: message.email,
            message: message.message,
            recaptchaResponse: message.recaptchaResponse,
            dateCreated: new Date()
        })
        getInContactEmail(UserMessageData)
        // await UserMessageData.save()
    } catch (error) {
        throw error
    }
}
