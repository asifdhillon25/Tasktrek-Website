import { useState, useRef } from 'react'
import { motion } from 'framer-motion'
import toast from 'react-hot-toast'
import { Mail, Phone, MapPin, Send } from 'lucide-react'

export default function Contact() {
  const BUSINESS_EMAIL = 'tasktrek25@gmail.com'
  const WHATSAPP_NUMBER = '923414152012'

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    country: '',
    service: '',
    deadline: '',
    message: '',
  })

  const formRef = useRef(null)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const validateForm = () => {
    if (!formData.name.trim()) {
      toast.error('Please enter your name')
      return false
    }
    if (!formData.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      toast.error('Please enter a valid email')
      return false
    }
    if (!formData.country.trim()) {
      toast.error('Please select your country')
      return false
    }
    if (!formData.service) {
      toast.error('Please select a service')
      return false
    }
    if (!formData.deadline.trim()) {
      toast.error('Please enter your deadline')
      return false
    }
    if (!formData.message.trim()) {
      toast.error('Please enter a message')
      return false
    }
    return true
  }

  const createMessageBody = () => {
    return `Hello TaskTrek Team,

I want to request academic support.

Name: ${formData.name}
Email: ${formData.email}
Country: ${formData.country}
Service Needed: ${formData.service}
Deadline: ${formData.deadline}

Project Details:
${formData.message}

Thank you.`
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    if (!validateForm()) return

    const subject = `New TaskTrek Request - ${formData.service}`
    const body = createMessageBody()

    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(
      BUSINESS_EMAIL
    )}&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`

    window.open(gmailUrl, '_blank')
    toast.success('Gmail opened with your message. Please click Send in Gmail.')
  }

  const handleWhatsAppClick = () => {
    if (!validateForm()) return

    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
      createMessageBody()
    )}`

    window.open(whatsappUrl, '_blank')
  }

  const services = [
    'Assignment Guidance',
    'Research Support',
    'Coding & Technical Projects',
    'Report Writing Support',
    'Presentation Help',
    'Proofreading & Formatting',
    'Urgent Deadline Support',
    'Academic Consultation',
  ]

  const countries = [
    'United States',
    'United Kingdom',
    'Canada',
    'Australia',
    'India',
    'China',
    'Germany',
    'France',
    'Japan',
    'Singapore',
    'Other',
  ]

  return (
    <section id="contact" className="section bg-white dark:bg-navy-900 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_40%_60%,rgba(59,130,246,0.1),transparent_50%)]" />

      <div className="relative z-10 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="section-title">Get Professional Support Today</h2>
          <p className="section-subtitle">
            Share your requirements and contact us directly through Gmail or WhatsApp.
            Our team will respond within 2 hours.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
                <Mail size={20} className="text-white" />
              </div>
              <div>
                <h3 className="font-bold text-gray-900 dark:text-white mb-1">Email</h3>
                <p className="text-gray-700 dark:text-gray-400">tasktrek25@gmail.com</p>
                <p className="text-gray-700 dark:text-gray-400 text-sm">Direct Gmail contact</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
                <Phone size={20} className="text-white" />
              </div>
              <div>
                <h3 className="font-bold text-gray-900 dark:text-white mb-1">WhatsApp Support</h3>
                <p className="text-gray-700 dark:text-gray-400">+92 341 4152012</p>
                <p className="text-gray-700 dark:text-gray-400 text-sm">Fast response available</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
                <MapPin size={20} className="text-white" />
              </div>
              <div>
                <h3 className="font-bold text-gray-900 dark:text-white mb-1">Serving Globally</h3>
                <p className="text-gray-700 dark:text-gray-400">International students</p>
                <p className="text-gray-700 dark:text-gray-400 text-sm">120+ countries</p>
              </div>
            </div>

            <div className="glass p-6 rounded-xl">
              <p className="text-sm font-semibold text-gray-900 dark:text-white mb-4">Why Contact Us?</p>
              <ul className="space-y-3 text-sm text-gray-700 dark:text-gray-300">
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full" />
                  Expert academic guidance
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full" />
                  Personalized support plan
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full" />
                  Confidential process
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full" />
                  Affordable pricing
                </li>
              </ul>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="lg:col-span-2 glass p-8 rounded-2xl"
          >
            <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-900 dark:text-white mb-2">Name *</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your full name"
                    className="w-full px-4 py-3 rounded-lg bg-white dark:bg-white/10 border border-gray-300 dark:border-white/20 text-gray-900 dark:text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-900 dark:text-white mb-2">Email *</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="your@email.com"
                    className="w-full px-4 py-3 rounded-lg bg-white dark:bg-white/10 border border-gray-300 dark:border-white/20 text-gray-900 dark:text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-900 dark:text-white mb-2">Country *</label>
                  <select
                    name="country"
                    value={formData.country}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg bg-white dark:bg-white/10 border border-gray-300 dark:border-white/20 text-gray-900 dark:text-white focus:outline-none focus:border-cyan-400 transition-colors"
                  >
                    <option value="">Select your country</option>
                    {countries.map((country) => (
                      <option key={country} value={country} className="bg-navy-900">
                        {country}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-900 dark:text-white mb-2">Service Needed *</label>
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg bg-white dark:bg-white/10 border border-gray-300 dark:border-white/20 text-gray-900 dark:text-white focus:outline-none focus:border-cyan-400 transition-colors"
                  >
                    <option value="">Select a service</option>
                    {services.map((service) => (
                      <option key={service} value={service} className="bg-navy-900">
                        {service}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-900 dark:text-white mb-2">Deadline *</label>
                <input
                  type="text"
                  name="deadline"
                  value={formData.deadline}
                  onChange={handleChange}
                  placeholder="e.g., 5 days, March 15"
                  className="w-full px-4 py-3 rounded-lg bg-white dark:bg-white/10 border border-gray-300 dark:border-white/20 text-gray-900 dark:text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 transition-colors"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-900 dark:text-white mb-2">Tell Us About Your Project *</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Describe your assignment, project, or academic challenge..."
                  rows={5}
                  className="w-full px-4 py-3 rounded-lg bg-white dark:bg-white/10 border border-gray-300 dark:border-white/20 text-gray-900 dark:text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 transition-colors resize-none"
                />
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <motion.button
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  type="submit"
                  className="w-full btn-primary flex items-center justify-center gap-2"
                >
                  <Send size={20} />
                  Open in Gmail
                </motion.button>

                <motion.button
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  type="button"
                  onClick={handleWhatsAppClick}
                  className="w-full btn-primary flex items-center justify-center gap-2"
                >
                  <Phone size={20} />
                  Send on WhatsApp
                </motion.button>
              </div>

              <p className="text-center text-sm text-gray-600 dark:text-gray-400">
                Your message will open in Gmail or WhatsApp with a ready-made template. Please review and send it.
              </p>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}