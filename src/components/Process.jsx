import { motion } from 'framer-motion'
import { CheckCircle, ArrowRight } from 'lucide-react'

const ProcessStep = ({ number, title, description, delay }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay, duration: 0.5 }}
    className="relative"
  >
    <div className="glass p-8 rounded-xl">
      <div className="flex items-start gap-6">
        <motion.div
          whileInView={{ scale: 1.2, rotate: 360 }}
          transition={{ delay: delay + 0.3, duration: 0.6 }}
          className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-full flex items-center justify-center"
        >
          <span className="text-white font-bold text-2xl">{number}</span>
        </motion.div>

        <div className="flex-grow">
          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{title}</h3>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">{description}</p>
        </div>
      </div>
    </div>

    {/* Arrow to next step */}
    {number < 3 && (
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ delay: delay + 0.5 }}
        className="hidden lg:flex absolute -right-12 top-1/2 transform -translate-y-1/2 z-10"
      >
        <ArrowRight size={32} className="text-gradient-to-r from-cyan-500 to-blue-600 text-cyan-500" />
      </motion.div>
    )}
  </motion.div>
)

export default function Process() {
  const steps = [
    {
      number: 1,
      title: 'Share Your Requirements',
      description:
        'Tell us about your assignment, project, or challenge. We\'ll listen carefully to understand your specific needs, deadline, and academic level.',
      delay: 0.1,
    },
    {
      number: 2,
      title: 'Discuss & Plan',
      description:
        'We\'ll discuss timeline, support approach, and any questions. Together, we\'ll create a personalized plan to help you succeed.',
      delay: 0.3,
    },
    {
      number: 3,
      title: 'Receive Guided Support',
      description:
        'Get expert guidance and regular updates throughout the process. We\'ll support you in developing your work and building your skills.',
      delay: 0.5,
    },
  ]

  return (
    <section id="process" className="section bg-gradient-to-b from-navy-800/10 dark:from-navy-800/50 to-transparent">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="section-title">Simple, Transparent Process</h2>
          <p className="section-subtitle">
            We believe in clarity and straightforward communication. Here's how we work with you.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-12 mb-16">
          {steps.map((step) => (
            <ProcessStep key={step.number} {...step} />
          ))}
        </div>

        {/* Next steps */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.7 }}
          className="glass p-12 rounded-2xl"
        >
          <h3 className="text-2xl font-bold text-white mb-6">What Happens Next?</h3>

          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <div className="flex items-start gap-4 mb-6">
                <CheckCircle size={24} className="text-cyan-400 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-bold text-gray-900 dark:text-white mb-1">Expert Review</h4>
                  <p className="text-gray-700 dark:text-gray-300 text-sm">Our team reviews your requirements and prepares personalized support.</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <CheckCircle size={24} className="text-cyan-400 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-bold text-gray-900 dark:text-white mb-1">Ongoing Support</h4>
                  <p className="text-gray-700 dark:text-gray-300 text-sm">You receive continuous guidance, feedback, and adjustments as needed.</p>
                </div>
              </div>
            </div>

            <div>
              <div className="flex items-start gap-4 mb-6">
                <CheckCircle size={24} className="text-cyan-400 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-bold text-gray-900 dark:text-white mb-1">Your Success</h4>
                  <p className="text-gray-700 dark:text-gray-300 text-sm">You submit your work with confidence, knowing it reflects your best effort.</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <CheckCircle size={24} className="text-cyan-400 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-bold text-gray-900 dark:text-white mb-1">Skill Development</h4>
                  <p className="text-gray-700 dark:text-gray-300 text-sm">You develop skills you can apply to future assignments independently.</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
