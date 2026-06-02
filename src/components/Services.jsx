import { motion } from 'framer-motion'
import {
  BookOpen,
  Microscope,
  Code,
  FileText,
  Presentation,
  CheckSquare,
  Zap,
  Users,
} from 'lucide-react'

const ServiceCard = ({ icon: Icon, title, description, features, delay }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay, duration: 0.5 }}
    whileHover={{ y: -10 }}
    className="glass p-8 rounded-xl group cursor-pointer overflow-hidden relative"
  >
    <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-cyan-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

    <div className="relative z-10">
      <motion.div
        whileHover={{ scale: 1.1, rotate: 5 }}
        className="w-16 h-16 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-xl flex items-center justify-center mb-6 group-hover:from-blue-500/40 group-hover:to-cyan-500/40 transition-all"
      >
        <Icon size={32} className="text-cyan-400" />
      </motion.div>

      <h3 className="text-xl font-bold text-white mb-3 group-hover:gradient-text transition-all">
        {title}
      </h3>

      <p className="text-gray-700 dark:text-gray-300 text-sm mb-4 leading-relaxed">{description}</p>

      <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
        {features.map((feature, idx) => (
          <motion.li
            key={idx}
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: delay + idx * 0.05 }}
            className="flex items-center gap-2"
          >
            <CheckSquare size={16} className="text-cyan-400 flex-shrink-0" />
            <span>{feature}</span>
          </motion.li>
        ))}
      </ul>

      <motion.button
        whileHover={{ x: 5 }}
        className="mt-6 text-cyan-400 font-semibold text-sm group-hover:text-white transition-colors flex items-center gap-2"
      >
        Learn More →
      </motion.button>
    </div>
  </motion.div>
)

export default function Services() {
  const services = [
    {
      icon: BookOpen,
      title: 'Assignment Guidance',
      description: 'Expert guidance on structuring and developing your assignments.',
      features: ['Topic understanding', 'Research direction', 'Outline feedback', 'Proofreading'],
      delay: 0.1,
    },
    {
      icon: Microscope,
      title: 'Research Support',
      description: 'Help finding credible sources and conducting rigorous research.',
      features: ['Source evaluation', 'Literature review', 'Citation help', 'Research strategies'],
      delay: 0.2,
    },
    {
      icon: Code,
      title: 'Coding & Technical Projects',
      description: 'Support for coding assignments, debugging, and technical concepts.',
      features: ['Code review', 'Logic debugging', 'Best practices', 'Documentation'],
      delay: 0.3,
    },
    {
      icon: FileText,
      title: 'Report Writing Support',
      description: 'Professional guidance on academic writing and report structure.',
      features: ['Structure guidance', 'Writing clarity', 'Analysis help', 'Expression improvement'],
      delay: 0.4,
    },
    {
      icon: Presentation,
      title: 'Presentation Help',
      description: 'Support with presentation content, slides, and delivery tips.',
      features: ['Slide design tips', 'Content flow', 'Speaking guidance', 'Q&A preparation'],
      delay: 0.5,
    },
    {
      icon: CheckSquare,
      title: 'Proofreading & Formatting',
      description: 'Professional editing and formatting according to your institution\'s standards.',
      features: ['Grammar check', 'Formatting assistance', 'Style consistency', 'Final polish'],
      delay: 0.6,
    },
    {
      icon: Zap,
      title: 'Urgent Deadline Support',
      description: 'Fast-track support for approaching deadlines.',
      features: ['Priority support', 'Quick turnarounds', 'Emergency assistance', 'Round-the-clock availability'],
      delay: 0.7,
    },
    {
      icon: Users,
      title: 'Academic Consultation',
      description: 'Strategic guidance on academic planning and success strategies.',
      features: ['Academic planning', 'Course selection', 'Study strategies', 'Career guidance'],
      delay: 0.8,
    },
  ]

  return (
    <section id="services" className="section bg-gradient-to-b from-navy-800/10 dark:from-navy-800/50 to-transparent relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(6,182,212,0.1),transparent_50%)]" />

      <div className="relative z-10 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="section-title">Our Services</h2>
          <p className="section-subtitle">
            Comprehensive academic support tailored to your specific needs. From assignment guidance to urgent deadline support, we've got you covered.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, idx) => (
            <ServiceCard key={idx} {...service} />
          ))}
        </div>
      </div>
    </section>
  )
}
