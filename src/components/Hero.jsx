import { motion } from 'framer-motion'
import { ArrowRight, BookOpen } from 'lucide-react'

const FloatingCard = ({ delay, icon: Icon, title }) => (
  <motion.div
    initial={{ opacity: 0, y: 100 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay, duration: 0.6 }}
    whileHover={{ y: -10 }}
    className="glass p-6 rounded-xl max-w-xs cursor-pointer group"
  >
    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
      <Icon size={24} className="text-white" />
    </div>
    <h3 className="font-semibold text-white text-lg">{title}</h3>
  </motion.div>
)

export default function Hero() {
  const cards = [
    { icon: BookOpen, title: 'Assignment Guidance', delay: 0.1 },
    { icon: BookOpen, title: 'Research Support', delay: 0.2 },
    { icon: BookOpen, title: 'Deadline Management', delay: 0.3 },
  ]

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-20 px-4 md:px-8 overflow-hidden"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-blue-50 dark:from-navy-900 via-white dark:via-navy-800 to-white dark:to-navy-900" />

      {/* Animated background elements */}
      <motion.div
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ duration: 8, repeat: Infinity }}
        className="absolute top-20 right-10 w-72 h-72 bg-cyan-400/20 rounded-full blur-3xl"
      />
      <motion.div
        animate={{ scale: [1.2, 1, 1.2] }}
        transition={{ duration: 8, repeat: Infinity, delay: 2 }}
        className="absolute -bottom-20 -left-20 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl"
      />

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.h1
              className="text-5xl md:text-7xl font-bold mb-6 gradient-text leading-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              Your Academic Journey, Made Easier
            </motion.h1>

            <motion.p
              className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-8 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              TaskTrek helps international students manage assignments, projects, research, editing, formatting, coding tasks, and deadlines with professional academic guidance. Expert support when you need it.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => document.querySelector('#contact').scrollIntoView({ behavior: 'smooth' })}
                className="btn-primary flex items-center justify-center gap-2 group"
              >
                Get Help Now
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => document.querySelector('#services').scrollIntoView({ behavior: 'smooth' })}
                className="btn-secondary flex items-center justify-center gap-2"
              >
                Explore Services
                <ArrowRight size={20} />
              </motion.button>
            </motion.div>

            {/* Trust badges */}
            <motion.div
              className="mt-12 flex flex-col sm:flex-row gap-8 text-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
            >
              <div>
                <p className="font-bold text-2xl gradient-text">500+</p>
                <p className="text-gray-600 dark:text-gray-400">Students Supported</p>
              </div>
              <div>
                <p className="font-bold text-2xl gradient-text">4.9/5</p>
                <p className="text-gray-600 dark:text-gray-400">Average Rating</p>
              </div>
              <div>
                <p className="font-bold text-2xl gradient-text">24/7</p>
                <p className="text-gray-600 dark:text-gray-400">Availability</p>
              </div>
            </motion.div>
          </motion.div>

          {/* Right side - Floating cards */}
          <motion.div
            className="hidden md:flex flex-col items-center justify-center"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="grid grid-cols-1 gap-6">
              {cards.map((card, idx) => (
                <FloatingCard key={idx} {...card} />
              ))}
            </div>

            {/* Dashboard mockup */}
            <motion.div
              className="mt-8 glass p-6 rounded-xl max-w-sm w-full"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
            >
              <div className="space-y-3">
                <div className="h-3 bg-white/20 rounded w-3/4" />
                <div className="h-3 bg-white/20 rounded w-full" />
                <div className="h-3 bg-white/20 rounded w-4/5" />
              </div>
              <div className="mt-4 pt-4 border-t border-white/10 space-y-2">
                <div className="h-2 bg-white/10 rounded w-1/2" />
                <div className="h-2 bg-white/10 rounded w-2/3" />
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
