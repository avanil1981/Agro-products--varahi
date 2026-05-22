const express = require('express');
const cors = require('cors');
const nodemailer = require('nodemailer');
const path = require('path');
require('dotenv').config({ path: path.join(__dirname, '../.env') });

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 5001;

// Setup transporter configuration
const smtpHost = process.env.SMTP_HOST;
const smtpPort = process.env.SMTP_PORT;
const smtpUser = process.env.SMTP_USER;
const smtpPass = process.env.SMTP_PASS;
const receiverEmail = process.env.RECEIVER_EMAIL || 'info@srivarahiagrofoods.in';

let transporter = null;
const isSmtpConfigured = smtpHost && smtpPort && smtpUser && smtpPass;

if (isSmtpConfigured) {
  transporter = nodemailer.createTransport({
    host: smtpHost,
    port: parseInt(smtpPort),
    secure: parseInt(smtpPort) === 465, // true for port 465, false for other ports
    auth: {
      user: smtpUser,
      pass: smtpPass
    }
  });

  // Verify SMTP Connection
  transporter.verify((error, success) => {
    if (error) {
      console.error('❌ Nodemailer SMTP Connection Verification Failed:', error.message);
    } else {
      console.log('✅ Nodemailer SMTP Server is ready to deliver messages.');
    }
  });
} else {
  console.warn(
    '\n⚠️  WARNING: SMTP settings are not fully configured in your .env file.\n' +
    '   The server will run in simulation mode. Submissions will be logged here but NOT emailed.\n' +
    '   Fill in SMTP_HOST, SMTP_PORT, SMTP_USER, and SMTP_PASS to enable live delivery.\n'
  );
}

// 1. Contact Form Endpoint
app.post('/api/contact', async (req, res) => {
  const { name, email, phone, subject, message } = req.body;

  // Validation
  if (!name || !email || !phone || !subject || !message) {
    return res.status(400).json({ 
      success: false, 
      error: 'Missing required contact fields: name, email, phone, subject, and message are required.' 
    });
  }

  console.log(`\n📬 [Contact Form Submission] Received request from: ${name} (${email})`);

  if (!isSmtpConfigured) {
    console.log('📝 [SIMULATION MODE] Logging contact email payload:');
    console.log({ name, email, phone, subject, message });
    return res.status(200).json({ 
      success: true, 
      simulated: true, 
      message: 'Contact inquiry processed in Simulation Mode (No SMTP settings found).' 
    });
  }

  // Construct Email Options
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
          This message was sent securely via Nodemailer from srivarahiagrofoods.in backend.
        </p>
      </div>
    `
  };

  try {
    await transporter.sendMail(mailOptions);
    console.log(`✉️ Email successfully sent to ${receiverEmail}`);
    return res.status(200).json({ success: true, message: 'Message sent successfully via email.' });
  } catch (error) {
    console.error('❌ Failed to send email via SMTP:', error.message);
    return res.status(500).json({ 
      success: false, 
      error: 'Internal server error while sending email. Please check server SMTP configurations.' 
    });
  }
});

// 2. Quotation Form Endpoint
app.post('/api/quote', async (req, res) => {
  const {
    name, email, phone, companyName, designation, country, 
    portOfDestination, productInterested, quantity, 
    packagingPreference, paymentTerms, specialSpecs, message 
  } = req.body;

  // Validation
  const required = [
    'name', 'email', 'phone', 'companyName', 'country', 
    'portOfDestination', 'productInterested', 'quantity', 
    'packagingPreference', 'paymentTerms'
  ];

  const missing = required.filter(f => !req.body[f]);
  if (missing.length > 0) {
    return res.status(400).json({ 
      success: false, 
      error: `Missing required quotation fields: ${missing.join(', ')}.` 
    });
  }

  console.log(`\n🌾 [Bulk Quotation Request] Received request from: ${name} (${companyName}) for ${productInterested}`);

  if (!isSmtpConfigured) {
    console.log('📝 [SIMULATION MODE] Logging quotation email payload:');
    console.log(req.body);
    return res.status(200).json({ 
      success: true, 
      simulated: true, 
      message: 'Quotation request processed in Simulation Mode (No SMTP settings found).' 
    });
  }

  // Construct Email Options
  const mailOptions = {
    from: `"${name}" <${smtpUser}>`,
    replyTo: email,
    to: receiverEmail,
    subject: `[BULK QUOTE] Inquiry for ${productInterested} (${quantity})`,
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 650px; margin: 0 auto; padding: 25px; border: 1px solid #e5e5e5; border-radius: 16px; background-color: #fafafa;">
        <h2 style="color: #063B1D; border-bottom: 2px solid #ECC043; padding-bottom: 12px; margin-bottom: 20px;">Sri Varahi Agro Foods LLP - Sourcing Request</h2>
        
        <h3 style="color: #128243; font-size: 14px; text-transform: uppercase; margin-bottom: 10px;">1. Importer Profile</h3>
        <table style="width: 100%; border-collapse: collapse; margin-bottom: 20px; font-size: 13px;">
          <tr style="border-bottom: 1px solid #eee;">
            <td style="padding: 8px; font-weight: bold; width: 180px; color: #666; background-color: #f1f1f1;">Contact Person:</td>
            <td style="padding: 8px; color: #222;">${name}</td>
          </tr>
          <tr style="border-bottom: 1px solid #eee;">
            <td style="padding: 8px; font-weight: bold; color: #666; background-color: #f1f1f1;">Company Name:</td>
            <td style="padding: 8px; color: #222; font-weight: bold;">${companyName}</td>
          </tr>
          <tr style="border-bottom: 1px solid #eee;">
            <td style="padding: 8px; font-weight: bold; color: #666; background-color: #f1f1f1;">Job Title / Designation:</td>
            <td style="padding: 8px; color: #222;">${designation || 'Not Specified'}</td>
          </tr>
          <tr style="border-bottom: 1px solid #eee;">
            <td style="padding: 8px; font-weight: bold; color: #666; background-color: #f1f1f1;">Email:</td>
            <td style="padding: 8px; color: #222;"><a href="mailto:${email}">${email}</a></td>
          </tr>
          <tr style="border-bottom: 1px solid #eee;">
            <td style="padding: 8px; font-weight: bold; color: #666; background-color: #f1f1f1;">Phone:</td>
            <td style="padding: 8px; color: #222;">${phone}</td>
          </tr>
          <tr style="border-bottom: 1px solid #eee;">
            <td style="padding: 8px; font-weight: bold; color: #666; background-color: #f1f1f1;">Country:</td>
            <td style="padding: 8px; color: #222;">${country}</td>
          </tr>
        </table>

        <h3 style="color: #128243; font-size: 14px; text-transform: uppercase; margin-bottom: 10px;">2. Sourcing & Logistics Details</h3>
        <table style="width: 100%; border-collapse: collapse; margin-bottom: 20px; font-size: 13px;">
          <tr style="border-bottom: 1px solid #eee;">
            <td style="padding: 8px; font-weight: bold; width: 180px; color: #666; background-color: #f1f1f1;">Product Requested:</td>
            <td style="padding: 8px; color: #063B1D; font-weight: bold;">${productInterested}</td>
          </tr>
          <tr style="border-bottom: 1px solid #eee;">
            <td style="padding: 8px; font-weight: bold; color: #666; background-color: #f1f1f1;">Estimated Volume / Qty:</td>
            <td style="padding: 8px; color: #222;">${quantity}</td>
          </tr>
          <tr style="border-bottom: 1px solid #eee;">
            <td style="padding: 8px; font-weight: bold; color: #666; background-color: #f1f1f1;">Destination Port:</td>
            <td style="padding: 8px; color: #222;">${portOfDestination}</td>
          </tr>
          <tr style="border-bottom: 1px solid #eee;">
            <td style="padding: 8px; font-weight: bold; color: #666; background-color: #f1f1f1;">Packaging Preference:</td>
            <td style="padding: 8px; color: #222;">${packagingPreference}</td>
          </tr>
          <tr style="border-bottom: 1px solid #eee;">
            <td style="padding: 8px; font-weight: bold; color: #666; background-color: #f1f1f1;">Preferred Payment Terms:</td>
            <td style="padding: 8px; color: #222;">${paymentTerms}</td>
          </tr>
        </table>

        <h3 style="color: #128243; font-size: 14px; text-transform: uppercase; margin-bottom: 10px;">3. Specifications & Remarks</h3>
        <div style="padding: 12px; background-color: #ffffff; border: 1px solid #eee; border-radius: 8px; font-size: 12.5px; margin-bottom: 15px;">
          <p style="margin: 0; font-weight: bold; color: #555; margin-bottom: 5px;">Quality Specifications (broken %, moisture, etc.):</p>
          <p style="margin: 0; color: #333; line-height: 1.5; white-space: pre-wrap; font-style: italic;">${specialSpecs || 'None specified.'}</p>
        </div>
        
        <div style="padding: 12px; background-color: #ffffff; border: 1px solid #eee; border-radius: 8px; font-size: 12.5px;">
          <p style="margin: 0; font-weight: bold; color: #555; margin-bottom: 5px;">Additional Remarks:</p>
          <p style="margin: 0; color: #333; line-height: 1.5; white-space: pre-wrap;">${message || 'No additional remarks provided.'}</p>
        </div>

        <p style="margin-top: 30px; font-size: 10px; color: #888; text-align: center; border-top: 1px solid #e5e5e5; padding-top: 15px;">
          This commercial RFQ email was automatically compiled and sent from the Sri Varahi Agro portal.
        </p>
      </div>
    `
  };

  try {
    await transporter.sendMail(mailOptions);
    console.log(`✉️ Sourcing Request successfully sent to ${receiverEmail}`);
    return res.status(200).json({ success: true, message: 'Quotation sent successfully via email.' });
  } catch (error) {
    console.error('❌ Failed to send quotation email via SMTP:', error.message);
    return res.status(500).json({ 
      success: false, 
      error: 'Internal server error while sending email. Please check server SMTP configurations.' 
    });
  }
});

// Start Server
app.listen(PORT, () => {
  console.log(`🚀 Sri Varahi Agro Backend running on http://localhost:${PORT}`);
});
