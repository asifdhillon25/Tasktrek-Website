import { Resend } from 'resend'

const RESEND_API_KEY = process.env.RESEND_API_KEY
const BUSINESS_EMAIL = process.env.BUSINESS_EMAIL || 'tasktrek25@gmail.com'

// Use your verified Resend domain here (e.g., 'noreply@yourdomain.resend.dev')
// For now, using contact@ prefix with Resend's domain structure
const SENDER_EMAIL = process.env.SENDER_EMAIL || 'contact@resend.dev'
console.log('Config values:', { RESEND_API_KEY: !!RESEND_API_KEY, BUSINESS_EMAIL, SENDER_EMAIL })

if (!RESEND_API_KEY) {
  console.error('ERROR: RESEND_API_KEY environment variable is not set')
}

const resend = new Resend(RESEND_API_KEY)

export default async function handler(req, res) {
  // Only allow POST requests
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' })
  }

  const { name, email, country, service, deadline, message } = req.body

  console.log('Received form submission:', { name, email, service })

  // Validation
  if (!name || !email || !country || !service || !deadline || !message) {
    return res.status(400).json({ error: 'Missing required fields' })
  }

  // Email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (!emailRegex.test(email)) {
    return res.status(400).json({ error: 'Invalid email address' })
  }

  try {
    console.log('Sending email from:', SENDER_EMAIL, 'to business:', BUSINESS_EMAIL)
    
    // Email to business owner
    const businessEmailResult = await resend.emails.send({
      from: SENDER_EMAIL,
      to: BUSINESS_EMAIL,
      replyTo: email,
      subject: `New Support Request from ${name} - ${service}`,
      html: `
        <h2>New Support Request</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Country:</strong> ${country}</p>
        <p><strong>Service:</strong> ${service}</p>
        <p><strong>Deadline:</strong> ${deadline}</p>
        <hr />
        <h3>Message:</h3>
        <p>${message.replace(/\n/g, '<br>')}</p>
      `,
    })

    console.log('Business email result:', businessEmailResult)

    // Confirmation email to student
    const studentEmailResult = await resend.emails.send({
      from: SENDER_EMAIL,
      to: email,
      subject: 'We Received Your Request - TaskTrek',
      html: `
        <h2>Hello ${name},</h2>
        <p>Thank you for reaching out to TaskTrek! We've received your request for <strong>${service}</strong>.</p>
        
        <h3>Request Summary:</h3>
        <ul>
          <li><strong>Service:</strong> ${service}</li>
          <li><strong>Deadline:</strong> ${deadline}</li>
          <li><strong>Country:</strong> ${country}</li>
        </ul>
        
        <p>Our team will review your request and get in touch within 2 hours during business hours. We're excited to help you succeed academically!</p>
        
        <p>If you have any urgent questions, feel free to reply to this email.</p>
        
        <p>Best regards,<br/>The TaskTrek Team</p>
      `,
    })

    console.log('Student email result:', studentEmailResult)

    // Check if both emails were sent successfully
    if (businessEmailResult.error || studentEmailResult.error) {
      console.error('Email sending errors:', { businessEmailResult, studentEmailResult })
      return res.status(500).json({
        error: 'Failed to send one or more emails',
        details: businessEmailResult.error?.message || studentEmailResult.error?.message
      })
    }

    return res.status(200).json({
      success: true,
      message: 'Email sent successfully',
      ids: {
        business: businessEmailResult.id,
        student: studentEmailResult.id
      }
    })
  } catch (error) {
    console.error('Email send error:', error.message, error)
    return res.status(500).json({
      error: 'Failed to send email. Please try again later.',
      details: error.message
    })
  }
}
