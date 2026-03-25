import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'eventbooking.otp@gmail.com',
        pass: 'wexj uicx fmwm oloc'
    }
});

async function sendManualOtp() {
    const email = 'ramzendrum@gmail.com';
    const otp = '847457'; // From DB check
    console.log(`Sending manual OTP ${otp} to ${email}...`);
    try {
        const info = await transporter.sendMail({
            from: '"ZenPay Help" <eventbooking.otp@gmail.com>',
            to: email,
            subject: `Your ZenPay OTP is ${otp}`,
            text: `Your manual verification code is: ${otp}. Please enter this on the website to activate your account.`
        });
        console.log('Sent:', info.messageId);
    } catch (err) {
        console.error('Failed:', err);
    }
}

sendManualOtp();
