const nodemailer = require('nodemailer')
require('dotenv').config()

const mailOptions = {
    from: `${process.env.MAIL_FROM_NAME} <${process.env.MAIL_FROM_ADRESS}>`,
    to: 'address@gmail.com',
    subject: 'Sending Email using Node.js',
    html: "<b>Hello world</b>",
    priority:'high'
}

const transporter = nodemailer.createTransport({
    service: process.env.MAIL_SERVICE,
    auth: {
        user: process.env.MAIL_USERNAME,
        pass: process.env.MAIL_PASSWORD
    }
})

transporter.verify((error, success) => {
    if (error) {
        console.log(error)
    }
    else {
        transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
                console.log(error)
            } else {
                console.log('Email sent: ' + info.response)
            }
        })
    }
})
