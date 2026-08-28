import nodemailer from 'nodemailer';

export async function sendEmail(subject: string, html: string, text: string, replyTo?: string, to?: string) {
  const smtpHost = process.env.SMTP_HOST;
  const smtpPort = process.env.SMTP_PORT || '587';
  const smtpUser = process.env.SMTP_USER;
  const smtpPass = process.env.SMTP_PASS;
  const smtpFrom = process.env.SMTP_FROM || 'contact@ontimetherapy.com';

  // Force 'from' to use authenticated user to pass strict SMTP provider checks
  const mailSender = smtpUser ? `Ontime Therapy Services <${smtpUser}>` : smtpFrom;
  const recipient = to || 'contact@ontimetherapy.com';

  const mailOptions = {
    from: mailSender,
    replyTo: replyTo || smtpUser || smtpFrom,
    to: recipient,
    subject,
    html,
    text
  };

  if (smtpHost && smtpUser && smtpPass) {
    const transporter = nodemailer.createTransport({
      host: smtpHost,
      port: parseInt(smtpPort),
      secure: smtpPort === '465',
      auth: {
        user: smtpUser,
        pass: smtpPass,
      },
    });

    await transporter.sendMail(mailOptions);
    console.log(`Email notification sent successfully to ${recipient}: ${subject}`);
  } else {
    console.warn('SMTP environment variables are not fully configured. Email details logged below:');
    console.log(JSON.stringify(mailOptions, null, 2));
  }
}
