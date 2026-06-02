import express from 'express'
import dotenv from 'dotenv'
import { Resend } from 'resend'

dotenv.config({ path: '.env.local' })

const app = express()
app.use(express.json())

const PORT = process.env.API_PORT || 3001
const resend = new Resend(process.env.RESEND_API_KEY)
const BUSINESS_EMAIL = process.env.BUSINESS_EMAIL || 'tasktrek25@gmail.com'

app.post('/api/send', async (req, res) => {
  const { name, email, country, service, deadline, message } = req.body

  if (!name || !email || !country || !service || !deadline || !message) {
    return res.status(400).json({ error: 'Missing required fields' })
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (!emailRegex.test(email)) {
    return res.status(400).json({ error: 'Invalid email address' })
  }

  try {
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
        <p>Our team will review your request and get in touch within 2 hours during business hours.</p>
        <p>If you have any urgent questions, feel free to reply to this email.</p>
        <p>Best regards,<br/>The TaskTrek Team</p>
      `,
    })

    return res.status(200).json({ success: true, message: 'Email sent' })
  } catch (error) {
    console.error('Email send error:', error)
    return res.status(500).json({ error: 'Failed to send email' })
  }
})

app.listen(PORT, () => {
  console.log(`Dev API server running on http://localhost:${PORT}`)
})
