import { motion } from 'framer-motion'
import { Zap, MessageCircle, Shield, TrendingUp, Clock, Globe } from 'lucide-react'

const BenefitCard = ({ icon: Icon, title, description, delay }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.9 }}
    whileInView={{ opacity: 1, scale: 1 }}
    viewport={{ once: true }}
    transition={{ delay, duration: 0.5 }}
    className="glass p-8 rounded-xl text-center hover:bg-white/15 dark:hover:bg-white/8 transition-all cursor-pointer group"
  >
    <motion.div
      whileHover={{ scale: 1.15, rotate: 10 }}
      className="w-16 h-16 bg-gradient-to-br from-cyan-500/30 to-blue-500/30 rounded-xl flex items-center justify-center mx-auto mb-6 group-hover:from-cyan-500/50 group-hover:to-blue-500/50 transition-all"
    >
      <Icon size={32} className="text-cyan-400" />
    </motion.div>

    <h3 className="text-lg font-bold text-white mb-3 group-hover:gradient-text transition-all">
      {title}
    </h3>
    <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">{description}</p>
  </motion.div>
)

export default function WhyChoose() {
  const benefits = [
    {
      icon: Zap,
      title: 'Fast Communication',
      description: 'Quick responses to your queries. Average response time within 2 hours.',
      delay: 0.1,
    },
    {
      icon: MessageCircle,
      title: 'Student-Focused Support',
      description: 'Our team understands international student challenges. We\'re here to help, not judge.',
      delay: 0.2,
    },
    {
      icon: Shield,
      title: 'Confidential Process',
      description: 'Your privacy is paramount. All communications and work remain completely confidential.',
      delay: 0.3,
    },
    {
      icon: TrendingUp,
      title: 'Quality-Focused Assistance',
      description: 'We focus on helping you develop skills and understanding, not shortcuts.',
      delay: 0.4,
    },
    {
      icon: Clock,
      title: 'Clear Progress Updates',
      description: 'You\'ll always know where you stand. Transparent communication throughout the process.',
      delay: 0.5,
    },
    {
      icon: Globe,
      title: 'Global Student Support',
      description: '24/7 availability across time zones. Support in English with understanding of diverse backgrounds.',
      delay: 0.6,
    },
  ]

  return (
    <section className="section bg-white dark:bg-navy-900 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(59,130,246,0.1),transparent_50%)]" />

      <div className="relative z-10 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="section-title">Why Choose TaskTrek?</h2>
          <p className="section-subtitle">
            We're not just an academic service. We're your partner in achieving your educational goals with integrity and excellence.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit, idx) => (
            <BenefitCard key={idx} {...benefit} />
          ))}
        </div>

        {/* Trust section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.7 }}
          className="mt-20 p-12 glass rounded-2xl text-center"
        >
        <p className="text-gray-700 dark:text-gray-300 mb-4">Trusted by international students from</p>
        <p className="text-3xl md:text-4xl font-bold gradient-text">120+ Countries</p>
        <p className="text-gray-700 dark:text-gray-300 mt-4">
            Join thousands of students who have transformed their academic journey with TaskTrek.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
