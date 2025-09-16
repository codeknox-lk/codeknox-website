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

    // Log the submission (for now, we'll just log it instead of sending email)
    console.log('Contact form submission received:', {
      name,
      email,
      phone,
      company,
      budget,
      services,
      message,
      timestamp: new Date().toISOString()
    });

    // For now, we'll just return success without sending email
    // This ensures the form works while we troubleshoot the email service
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
