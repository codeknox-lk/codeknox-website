import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  // Set CORS headers
  res.setHeader('Access-Control-Allow-Origin', process.env.FRONTEND_URL || '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  // Handle preflight requests
  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  // Only allow POST requests
  if (req.method !== 'POST') {
    return res.status(405).json({
      success: false,
      message: 'Method not allowed'
    });
  }

  try {
    const {
      name,
      email,
      phone,
      company,
      budget,
      services,
      message,
      mathAnswer,
      honeypot,
    } = req.body;

    // Basic validation
    if (!name || !email || !phone || !company || !budget || !services || !message || !mathAnswer) {
      return res.status(400).json({
        success: false,
        message: 'All fields are required'
      });
    }

    // Verify math answer (simple spam protection)
    const expectedAnswer = 7 + 3;
    if (parseInt(mathAnswer) !== expectedAnswer) {
      return res.status(400).json({
        success: false,
        message: 'Invalid math answer. Please try again.'
      });
    }

    // Check honeypot (should be empty)
    if (honeypot) {
      return res.status(400).json({
        success: false,
        message: 'Bot detected. Submission rejected.'
      });
    }

    // Check if email configuration is available
    if (!process.env.EMAIL_HOST || !process.env.EMAIL_USER || !process.env.EMAIL_PASS || !process.env.EMAIL_TO) {
      console.error('Email configuration missing');
      return res.status(500).json({
        success: false,
        message: 'Email service not configured. Please contact us directly.'
      });
    }

    // Create email transporter
    const transporter = nodemailer.createTransporter({
      host: process.env.EMAIL_HOST,
      port: parseInt(process.env.EMAIL_PORT) || 587,
      secure: process.env.EMAIL_PORT === '465',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
      tls: {
        rejectUnauthorized: false,
      },
    });

    // Test the connection
    try {
      await transporter.verify();
    } catch (verifyError) {
      console.error('Email transporter verification failed:', verifyError);
      return res.status(500).json({
        success: false,
        message: 'Email service unavailable. Please try again later or contact us directly.'
      });
    }

    // Create email content
    const emailContent = `
      <h2>New Contact Form Submission</h2>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Phone:</strong> ${phone}</p>
      <p><strong>Company:</strong> ${company}</p>
      <p><strong>Budget:</strong> ${budget}</p>
      <p><strong>Services:</strong> ${Array.isArray(services) ? services.join(', ') : services}</p>
      <p><strong>Message:</strong></p>
      <p>${message.replace(/\n/g, '<br>')}</p>
      <hr>
      <p><em>Submitted on: ${new Date().toLocaleString()}</em></p>
    `;

    // Send email
    const mailOptions = {
      from: process.env.EMAIL_FROM || process.env.EMAIL_USER,
      to: process.env.EMAIL_TO,
      subject: `New Contact Form Submission from ${name} - ${company}`,
      html: emailContent,
      replyTo: email,
    };

    await transporter.sendMail(mailOptions);

    // Log successful submission
    console.log(`Contact form submitted successfully: ${name} (${email})`);

    res.status(200).json({
      success: true,
      message: 'Thank you for your message! We will get back to you within 24 hours.',
    });

  } catch (error) {
    console.error('Error processing contact form:', error);
    
    res.status(500).json({
      success: false,
      message: 'Sorry, there was an error sending your message. Please try again later.',
    });
  }
}
