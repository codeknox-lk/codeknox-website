import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

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

    // Send email using Resend
    const { data, error } = await resend.emails.send({
      from: 'CodeKnox Contact Form <noreply@codeknox.lk>',
      to: ['hellocodeknox@gmail.com'],
      subject: `New Contact Form Submission from ${name} - ${company}`,
      html: `
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
      `,
      replyTo: email,
    });

    if (error) {
      console.error('Resend error:', error);
      return res.status(500).json({
        success: false,
        message: 'Failed to send email. Please try again later.'
      });
    }

    console.log('Email sent successfully:', data);

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
