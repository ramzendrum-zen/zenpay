import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 587,
  secure: false, // Use STARTTLS
  auth: {
    user: 'eventbooking.otp@gmail.com',
    pass: 'wexj uicx fmwm oloc'
  },
  tls: {
    rejectUnauthorized: false // Helps in some restricted environments
  },
  connectionTimeout: 15000, // 15 seconds
  greetingTimeout: 10000,
  socketTimeout: 20000
});

export function generateOtp(): string {
  return Math.floor(100000 + Math.random() * 900000).toString();
}

export function otpExpiry(): Date {
  const d = new Date();
  d.setMinutes(d.getMinutes() + 10);
  return d;
}

function emailBase(content: string): string {
  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8"/>
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>ZenWallet</title>
</head>
<body style="margin:0;padding:0;background:#f1f5f9;font-family:'Helvetica Neue',Arial,sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#f1f5f9;padding:48px 16px;">
    <tr>
      <td align="center">
        <table width="100%" style="max-width:520px;" cellpadding="0" cellspacing="0">

          <!-- Logo -->
          <tr>
            <td align="center" style="padding-bottom:28px;">
              <table cellpadding="0" cellspacing="0">
                <tr>
                  <td style="background:#1e40af;width:38px;height:38px;border-radius:10px;text-align:center;vertical-align:middle;">
                    <span style="color:white;font-size:18px;font-weight:900;line-height:38px;">Z</span>
                  </td>
                  <td style="padding-left:10px;vertical-align:middle;">
                    <span style="font-size:18px;font-weight:800;color:#0f172a;letter-spacing:-0.5px;">ZenWallet</span>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Card -->
          <tr>
            <td style="background:#ffffff;border-radius:16px;border:1px solid #e2e8f0;overflow:hidden;">
              ${content}
            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td align="center" style="padding-top:24px;">
              <p style="margin:0;font-size:11px;color:#94a3b8;line-height:1.6;">
                This email was sent by <span style="color:#64748b;font-weight:600;">ZenWallet Inc.</span><br/>
                If you didn't request this, you can safely ignore this email.
              </p>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>`;
}

export async function sendVerificationEmail(toEmail: string, name: string, otp: string) {
  const content = `
      <!-- Header accent -->
      <tr><td style="background:#2563eb;height:4px;"></td></tr>

      <!-- Body -->
      <table width="100%" cellpadding="0" cellspacing="0">
        <tr>
          <td style="padding:40px 40px 32px;">
            <p style="margin:0 0 6px;font-size:12px;font-weight:700;color:#2563eb;text-transform:uppercase;letter-spacing:0.12em;">Account Verification</p>
            <h1 style="margin:0 0 16px;font-size:22px;font-weight:800;color:#0f172a;line-height:1.3;">Verify your email address</h1>
            <p style="margin:0 0 32px;font-size:14px;color:#64748b;line-height:1.7;">
              Hi <strong style="color:#0f172a;">${name}</strong>, welcome to ZenWallet. Enter the code below to activate your merchant account.
            </p>

            <!-- OTP Block -->
            <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom:32px;">
              <tr>
                <td style="background:#f8fafc;border:1px solid #e2e8f0;border-radius:12px;padding:28px;text-align:center;">
                  <p style="margin:0 0 10px;font-size:11px;font-weight:700;color:#94a3b8;text-transform:uppercase;letter-spacing:0.15em;">One-Time Code</p>
                  <p style="margin:0;font-size:40px;font-weight:900;letter-spacing:0.35em;color:#1e40af;font-family:'Courier New',monospace;">${otp}</p>
                  <p style="margin:12px 0 0;font-size:12px;color:#94a3b8;">Expires in <strong style="color:#64748b;">10 minutes</strong></p>
                </td>
              </tr>
            </table>

            <!-- Info rows -->
            <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom:32px;">
              <tr>
                <td style="padding:12px 0;border-bottom:1px solid #f1f5f9;">
                  <table width="100%"><tr>
                    <td style="font-size:13px;color:#94a3b8;width:130px;">Sent to</td>
                    <td style="font-size:13px;color:#0f172a;font-weight:600;">${toEmail}</td>
                  </tr></table>
                </td>
              </tr>
              <tr>
                <td style="padding:12px 0;border-bottom:1px solid #f1f5f9;">
                  <table width="100%"><tr>
                    <td style="font-size:13px;color:#94a3b8;width:130px;">Valid for</td>
                    <td style="font-size:13px;color:#0f172a;font-weight:600;">10 minutes</td>
                  </tr></table>
                </td>
              </tr>
              <tr>
                <td style="padding:12px 0;">
                  <table width="100%"><tr>
                    <td style="font-size:13px;color:#94a3b8;width:130px;">Use case</td>
                    <td style="font-size:13px;color:#16a34a;font-weight:700;">Email verification</td>
                  </tr></table>
                </td>
              </tr>
            </table>

            <p style="margin:0;font-size:12px;color:#94a3b8;line-height:1.6;">
              Do not share this code with anyone. ZenWallet will <strong style="color:#64748b;">never ask for your OTP</strong> by phone or chat.
            </p>
          </td>
        </tr>
      </table>
    `;

  await transporter.sendMail({
    from: '"ZenWallet" <eventbooking.otp@gmail.com>',
    to: toEmail,
    subject: `${otp} is your ZenWallet verification code`,
    html: emailBase(content)
  });
}

export async function sendPasswordResetEmail(toEmail: string, name: string, otp: string) {
  const content = `
      <!-- Header accent - blue -->
      <tr><td style="background:#2563eb;height:4px;"></td></tr>

      <table width="100%" cellpadding="0" cellspacing="0">
        <tr>
          <td style="padding:40px 40px 32px;">
            <p style="margin:0 0 6px;font-size:12px;font-weight:700;color:#2563eb;text-transform:uppercase;letter-spacing:0.12em;">Account Security</p>
            <h1 style="margin:0 0 16px;font-size:22px;font-weight:800;color:#0f172a;line-height:1.3;">Password reset request</h1>
            <p style="margin:0 0 32px;font-size:14px;color:#64748b;line-height:1.7;">
              Hi <strong style="color:#0f172a;">${name}</strong>, we received a request to reset your ZenWallet account password. Use the code below to proceed.
            </p>

            <!-- OTP Block -->
            <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom:32px;">
              <tr>
                <td style="background:#f8fafc;border:1px solid #e2e8f0;border-radius:12px;padding:28px;text-align:center;">
                  <p style="margin:0 0 10px;font-size:11px;font-weight:700;color:#94a3b8;text-transform:uppercase;letter-spacing:0.15em;">Reset Code</p>
                  <p style="margin:0;font-size:40px;font-weight:900;letter-spacing:0.35em;color:#1e40af;font-family:'Courier New',monospace;">${otp}</p>
                  <p style="margin:12px 0 0;font-size:12px;color:#94a3b8;">Expires in <strong style="color:#64748b;">10 minutes</strong></p>
                </td>
              </tr>
            </table>

            <!-- Info rows -->
            <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom:32px;">
              <tr>
                <td style="padding:12px 0;border-bottom:1px solid #f1f5f9;">
                  <table width="100%"><tr>
                    <td style="font-size:13px;color:#94a3b8;width:130px;">Account</td>
                    <td style="font-size:13px;color:#0f172a;font-weight:600;">${toEmail}</td>
                  </tr></table>
                </td>
              </tr>
              <tr>
                <td style="padding:12px 0;border-bottom:1px solid #f1f5f9;">
                  <table width="100%"><tr>
                    <td style="font-size:13px;color:#94a3b8;width:130px;">Valid for</td>
                    <td style="font-size:13px;color:#0f172a;font-weight:600;">10 minutes only</td>
                  </tr></table>
                </td>
              </tr>
              <tr>
                <td style="padding:12px 0;">
                  <table width="100%"><tr>
                    <td style="font-size:13px;color:#94a3b8;width:130px;">Action</td>
                    <td style="font-size:13px;color:#2563eb;font-weight:700;">Password reset</td>
                  </tr></table>
                </td>
              </tr>
            </table>

            <!-- Warning box -->
            <table width="100%" cellpadding="0" cellspacing="0">
              <tr>
                <td style="background:#f8fafc;border:1px solid #e2e8f0;border-radius:10px;padding:16px 20px;">
                  <p style="margin:0;font-size:12px;color:#64748b;line-height:1.6;">
                    <strong>Didn't request this?</strong> If you didn't ask to reset your password, please ignore this email or change your password immediately to secure your account.
                  </p>
                </td>
              </tr>
            </table>
          </td>
        </tr>
      </table>
    `;

  await transporter.sendMail({
    from: '"ZenWallet" <eventbooking.otp@gmail.com>',
    to: toEmail,
    subject: `${otp} — ZenWallet password reset code`,
    html: emailBase(content)
  });
}
