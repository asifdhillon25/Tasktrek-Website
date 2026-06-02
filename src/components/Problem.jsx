import { motion } from 'framer-motion'
import { Clock, BarChart3, BookMarked, Languages, AlertCircle, Briefcase } from 'lucide-react'

const ProblemCard = ({ icon: Icon, title, description, delay }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ delay, duration: 0.5 }}
    viewport={{ once: true }}
    whileHover={{ y: -5 }}
    className="glass p-8 rounded-xl group cursor-pointer"
  >
    <div className="w-14 h-14 bg-gradient-to-br from-red-500/20 to-orange-500/20 rounded-lg flex items-center justify-center mb-4 group-hover:from-red-500/30 group-hover:to-orange-500/30 transition-all">
      <Icon size={28} className="text-red-400" />
    </div>
    <h3 className="font-bold text-lg mb-2 text-white group-hover:gradient-text transition-all">{title}</h3>
    <p className="text-gray-300 text-sm leading-relaxed">{description}</p>
  </motion.div>
)

export default function Problem() {
  const problems = [
    {
      icon: Clock,
      title: 'Tight Deadlines',
      description: 'Managing multiple assignments with overlapping deadlines while maintaining quality',
      delay: 0.1,
    },
    {
      icon: Languages,
      title: 'Language Barriers',
      description: 'English not being your first language can create communication challenges',
      delay: 0.2,
    },
    {
      icon: AlertCircle,
      title: 'Academic Pressure',
      description: 'Balancing coursework, part-time jobs, and cultural adaptation',
      delay: 0.3,
    },
    {
      icon: BookMarked,
      title: 'Research Confusion',
      description: 'Finding credible sources, understanding citation formats, and conducting research',
      delay: 0.4,
    },
    {
      icon: BarChart3,
      title: 'Formatting Issues',
      description: 'APA, MLA, Harvard, Chicago - navigating different formatting requirements',
      delay: 0.5,
    },
    {
      icon: Briefcase,
      title: 'Job & Study Balance',
      description: 'Managing part-time work while maintaining academic excellence',
      delay: 0.6,
    },
  ]

  return (
    <section className="section bg-gradient-to-b from-blue-900/20 dark:from-navy-800/30 to-transparent relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(59,130,246,0.1),transparent_50%)]" />

      <div className="relative z-10 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="section-title">Challenges International Students Face</h2>
          <p className="section-subtitle">
            We understand the unique struggles you're navigating. TaskTrek is designed to help you overcome these obstacles and excel in your studies.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {problems.map((problem, idx) => (
            <ProblemCard key={idx} {...problem} />
          ))}
        </div>

        {/* Statistics */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.7 }}
          className="mt-20 grid md:grid-cols-3 gap-8 text-center"
        >
          <div className="glass p-8 rounded-xl">
            <p className="text-4xl font-bold gradient-text mb-2">78%</p>
            <p className="text-gray-700 dark:text-gray-300">Report improved grades within 3 months</p>
          </div>
          <div className="glass p-8 rounded-xl">
            <p className="text-4xl font-bold gradient-text mb-2">92%</p>
            <p className="text-gray-700 dark:text-gray-300">Successfully manage deadlines with our support</p>
          </div>
          <div className="glass p-8 rounded-xl">
            <p className="text-4xl font-bold gradient-text mb-2">24/7</p>
            <p className="text-gray-700 dark:text-gray-300">Availability across different time zones</p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
