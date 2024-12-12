const createMailTransporter = require('./createMailTransporter')

const getInContactEmail = (message) => {
    const transporter = createMailTransporter()

    const mailOptions = {
        from: `Developer Form <${process.env.BUSINESS_EMAIL_ADDRESS}>`,
        to: process.env.BUSINESS_EMAIL_ADDRESS,
        subject: `Contact Form Submission from ${user.name}`,
        html: `
            <p>Dear Junior Developer,</p>
            <p>You have received a new message from your contact form.</p>
            <p>
                <strong>Email received from: </strong>${user.name}<br>
                Message: "${user.message}"<br>
                Email: ${user.email}
            </p>
            <p>
                Best regards,<br>
                ${user.name}
            </p>
        `
    }
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.log(error.message);
        } else {
            console.log('Email sent successfully!');
        }
    })
}

module.exports = { getInContactEmail }