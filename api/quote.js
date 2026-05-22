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

  const smtpHost = process.env.SMTP_HOST;
  const smtpPort = process.env.SMTP_PORT;
  const smtpUser = process.env.SMTP_USER;
  const smtpPass = process.env.SMTP_PASS;
  const receiverEmail = process.env.RECEIVER_EMAIL || 'info@srivarahiagrofoods.in';

  const isSmtpConfigured = smtpHost && smtpPort && smtpUser && smtpPass;

  if (!isSmtpConfigured) {
    console.log('📝 [SIMULATION MODE] Logging quotation email payload (serverless):');
    console.log(req.body);
    return res.status(200).json({ 
      success: true, 
      simulated: true, 
      message: 'Quotation request processed in Simulation Mode (No SMTP settings configured in serverless environment).' 
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
          This commercial RFQ email was automatically compiled and sent from the Sri Varahi Agro portal serverless backend.
        </p>
      </div>
    `
  };

  try {
    await transporter.sendMail(mailOptions);
    return res.status(200).json({ success: true, message: 'Quotation sent successfully via email.' });
  } catch (error) {
    console.error('❌ Failed to send quotation email via SMTP (serverless):', error.message);
    return res.status(500).json({ 
      success: false, 
      error: 'Internal server error while sending email. Please check server SMTP configurations.' 
    });
  }
};
