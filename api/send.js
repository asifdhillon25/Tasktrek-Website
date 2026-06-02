import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

const BUSINESS_EMAIL = 'tasktrek25@gmail.com'

export default async function handler(req, res) {
  // Only allow POST requests
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' })
  }

  const { name, email, country, service, deadline, message } = req.body

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
    // Email to business owner
    await resend.emails.send({
      from: 'TaskTrek <onboarding@resend.dev>',
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

    // Confirmation email to student
    await resend.emails.send({
      from: 'TaskTrek <onboarding@resend.dev>',
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

    return res.status(200).json({
      success: true,
      message: 'Email sent successfully',
    })
  } catch (error) {
    console.error('Email send error:', error)
    return res.status(500).json({
      error: 'Failed to send email. Please try again later.',
    })
  }
}
