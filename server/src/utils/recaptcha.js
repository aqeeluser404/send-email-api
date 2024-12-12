const axios = require('axios');

async function verifyRecaptcha(responseToken) {
    const secretKey = process.env.RECAPTCHA_SECRET_KEY;  // Use the secret key from environment variables
    const url = `https://www.google.com/recaptcha/api/siteverify?secret=${secretKey}&response=${responseToken}`;

    try {
        const response = await axios.post(url);
        console.log('reCAPTCHA response:', response.data);
        return response.data.success;
    } catch (error) {
        console.error('Error verifying reCAPTCHA:', error);
        return false;
    }
}

module.exports = { verifyRecaptcha }