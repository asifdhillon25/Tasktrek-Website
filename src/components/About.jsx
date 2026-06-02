import { motion } from 'framer-motion'
import { CheckCircle2 } from 'lucide-react'

const TimelineItem = ({ step, title, description, isLast, delay }) => (
  <motion.div
    initial={{ opacity: 0, x: -50 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true }}
    transition={{ delay }}
    className="relative pl-8 pb-12"
  >
    {/* Timeline dot */}
    <motion.div
      whileInView={{ scale: 1.2 }}
      className="absolute left-0 top-0 w-6 h-6 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full border-4 border-white dark:border-navy-900 shadow-lg"
    />

    {/* Timeline line */}
    {!isLast && (
      <div className="absolute left-2.5 top-6 w-1 h-20 bg-gradient-to-b from-blue-500 to-transparent" />
    )}

    {/* Content */}
    <div className="glass p-6 rounded-xl group hover:bg-white/15 dark:hover:bg-white/8 transition-all cursor-pointer">
      <div className="flex items-start gap-4">
        <div className="flex-shrink-0">
          <div className="flex items-center justify-center h-10 w-10 rounded-lg bg-gradient-to-br from-blue-500 to-cyan-500">
            <span className="text-white font-bold text-lg">{step}</span>
          </div>
        </div>
        <div className="flex-grow">
          <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2 group-hover:gradient-text transition-all">{title}</h3>
          <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">{description}</p>
        </div>
      </div>
    </div>
  </motion.div>
)

export default function About() {
  const timelineItems = [
    {
      step: 1,
      title: 'From Confusion to Clarity',
      description: 'Many international students feel overwhelmed by academic requirements. We start by understanding your specific challenges and goals.',
      delay: 0.1,
    },
    {
      step: 2,
      title: 'Expert Guidance & Support',
      description: 'Our team provides personalized academic guidance, helping you develop strategies and skills to succeed independently.',
      delay: 0.2,
    },
    {
      step: 3,
      title: 'Building Confidence',
      description: 'Through structured support and mentorship, you gain the confidence to tackle assignments and projects on your own.',
      delay: 0.3,
    },
    {
      step: 4,
      title: 'Achieving Excellence',
      description: 'With improved skills and strategic support, you reach your academic potential and build a strong foundation for future success.',
      delay: 0.4,
    },
  ]

  return (
    <section id="about" className="section bg-white dark:bg-navy-900">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left side - Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <motion.h2
              className="text-4xl md:text-5xl font-bold mb-6 gradient-text"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              From Confusion to Confidence
            </motion.h2>

            <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
              TaskTrek was founded with a simple mission: help international students transform their academic struggles into success. We've guided over 500 students through their toughest academic challenges.
            </p>

            <div className="space-y-4 mb-8">
              {[
                'Personalized academic strategies',
                'Expert mentorship and guidance',
                'Professional editing and feedback',
                'Deadline and project management support',
              ].map((feature, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="flex items-start gap-3"
                >
                  <CheckCircle2 size={24} className="text-cyan-500 flex-shrink-0 mt-1" />
                  <span className="text-gray-700 dark:text-gray-300 font-medium">{feature}</span>
                </motion.div>
              ))}
            </div>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-primary"
            >
              Learn Our Approach
            </motion.button>
          </motion.div>

          {/* Right side - Timeline */}
          <div className="space-y-2">
            {timelineItems.map((item, idx) => (
              <TimelineItem
                key={idx}
                {...item}
                isLast={idx === timelineItems.length - 1}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
