const nodemailer = require('nodemailer');

module.exports = async (req, res) => {
  // Enable CORS
  res.setHeader('Access-Control-Allow-Credentials', true);
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
  );

  // Handle preflight OPTIONS request
  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ success: false, error: 'Method Not Allowed' });
  }

  const { name, email, phone, subject, message } = req.body;

  // Validation
  if (!name || !email || !phone || !subject || !message) {
    return res.status(400).json({ 
      success: false, 
      error: 'Missing required contact fields: name, email, phone, subject, and message are required.' 
    });
  }

  const smtpHost = process.env.SMTP_HOST;
  const smtpPort = process.env.SMTP_PORT;
  const smtpUser = process.env.SMTP_USER;
  const smtpPass = process.env.SMTP_PASS;
  const receiverEmail = process.env.RECEIVER_EMAIL || 'info@srivarahiagrofoods.in';

  const isSmtpConfigured = smtpHost && smtpPort && smtpUser && smtpPass;

  if (!isSmtpConfigured) {
    console.log('📝 [SIMULATION MODE] Logging contact email payload (serverless):');
    console.log({ name, email, phone, subject, message });
    return res.status(200).json({ 
      success: true, 
      simulated: true, 
      message: 'Contact inquiry processed in Simulation Mode (No SMTP settings configured in serverless environment).' 
    });
  }

  const transporter = nodemailer.createTransport({
    host: smtpHost,
    port: parseInt(smtpPort),
    secure: parseInt(smtpPort) === 465,
    auth: {
      user: smtpUser,
      pass: smtpPass
    }
  });

  const mailOptions = {
    from: `"${name}" <${smtpUser}>`,
    replyTo: email,
    to: receiverEmail,
    subject: `[Contact Form] ${subject}`,
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e5e5e5; border-radius: 12px; background-color: #fafafa;">
        <h2 style="color: #063B1D; border-bottom: 2px solid #ECC043; padding-bottom: 10px;">Sri Varahi Agro Foods LLP - Contact Request</h2>
        <table style="width: 100%; border-collapse: collapse; margin-top: 15px;">
          <tr>
            <td style="padding: 8px 0; font-weight: bold; width: 120px; color: #555;">Name:</td>
            <td style="padding: 8px 0; color: #222;">${name}</td>
          </tr>
          <tr>
            <td style="padding: 8px 0; font-weight: bold; color: #555;">Email:</td>
            <td style="padding: 8px 0; color: #222;"><a href="mailto:${email}">${email}</a></td>
          </tr>
          <tr>
            <td style="padding: 8px 0; font-weight: bold; color: #555;">Phone:</td>
            <td style="padding: 8px 0; color: #222;">${phone}</td>
          </tr>
          <tr>
            <td style="padding: 8px 0; font-weight: bold; color: #555;">Subject:</td>
            <td style="padding: 8px 0; color: #222; font-style: italic;">${subject}</td>
          </tr>
        </table>
        <div style="margin-top: 20px; padding: 15px; background-color: #ffffff; border-left: 4px solid #128243; border-radius: 4px;">
          <p style="margin: 0; font-weight: bold; color: #555; margin-bottom: 8px;">Message:</p>
          <p style="margin: 0; color: #333; line-height: 1.6; white-space: pre-wrap;">${message}</p>
        </div>
        <p style="margin-top: 25px; font-size: 10px; color: #888; text-align: center; border-top: 1px solid #e5e5e5; padding-top: 15px;">
          This message was sent securely via Nodemailer from srivarahiagrofoods.in serverless backend.
        </p>
      </div>
    `
  };

  try {
    await transporter.sendMail(mailOptions);
    return res.status(200).json({ success: true, message: 'Message sent successfully via email.' });
  } catch (error) {
    console.error('❌ Failed to send contact email via SMTP (serverless):', error.message);
    return res.status(500).json({ 
      success: false, 
      error: 'Internal server error while sending email. Please check server SMTP configurations.' 
    });
  }
};
