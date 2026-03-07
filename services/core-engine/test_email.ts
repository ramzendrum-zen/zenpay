import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'eventbooking.otp@gmail.com',
        pass: 'wexj uicx fmwm oloc'
    }
});

async function testEmail() {
    console.log('--- Email Service Test ---');
    try {
        const info = await transporter.sendMail({
            from: '"ZenWallet Test" <eventbooking.otp@gmail.com>',
            to: 'ramzendrum@gmail.com', // Testing with user's email
            subject: 'ZEN TEST - ' + new Date().toLocaleTimeString(),
            text: 'This is a test to verify the OTP mailing service is active.'
        });
        console.log('Email sent successfully:', info.messageId);
    } catch (error) {
        console.error('Email failed Error:', error);
    }
}

testEmail();
