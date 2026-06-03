import { motion } from 'framer-motion'
import { ArrowRight, BookOpen, Clock, GraduationCap, ShieldCheck } from 'lucide-react'

const FloatingCard = ({ delay, icon: Icon, title, text }) => (
  <motion.div
    initial={{ opacity: 0, y: 60 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay, duration: 0.6 }}
    whileHover={{ y: -8 }}
    className="glass p-6 rounded-2xl cursor-pointer group border border-white/10"
  >
    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
      <Icon size={24} className="text-white" />
    </div>

    <h3 className="font-semibold text-white text-lg mb-2">{title}</h3>
    <p className="text-sm text-gray-300 leading-relaxed">{text}</p>
  </motion.div>
)

export default function Hero() {
  const cards = [
    {
      icon: BookOpen,
      title: 'Assignment Guidance',
      text: 'Clear academic support for assignments, reports, and coursework.',
      delay: 0.1,
    },
    {
      icon: GraduationCap,
      title: 'Research Support',
      text: 'Help with research structure, formatting, editing, and presentation.',
      delay: 0.2,
    },
    {
      icon: Clock,
      title: 'Deadline Management',
      text: 'Quick support for urgent tasks and time-sensitive submissions.',
      delay: 0.3,
    },
    {
      icon: ShieldCheck,
      title: 'Confidential Help',
      text: 'Private, reliable, and student-focused academic guidance.',
      delay: 0.4,
    },
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

      <div className="relative z-10 max-w-7xl mx-auto w-full">
        <div className="grid lg:grid-cols-2 gap-14 items-center">
          {/* Left content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Logo / Brand Card */}
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="mb-8 max-w-xl"
            >
              <div className="glass rounded-3xl p-5 md:p-6 border border-white/10 shadow-xl">
                <div className="flex items-center gap-5">
                  <div className="w-24 h-24 md:w-28 md:h-28 rounded-2xl bg-white dark:bg-white/10 p-3 flex items-center justify-center shadow-lg flex-shrink-0">
                    <img
                      src="/1.png"
                      alt="TaskTrek logo"
                      className="w-full h-full object-contain"
                    />
                  </div>

                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.24em] text-cyan-500 dark:text-cyan-300 mb-2">
                      Academic support for students
                    </p>

                    <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white leading-tight">
                      TaskTrek
                    </h2>

                    <p className="text-sm md:text-base text-gray-600 dark:text-gray-300 mt-2 leading-relaxed">
                      Premium academic guidance for assignments, research, coding projects,
                      reports, and urgent deadlines.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

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
              TaskTrek helps international students manage assignments, projects, research,
              editing, formatting, coding tasks, and deadlines with professional academic
              guidance. Expert support when you need it.
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
                onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="btn-primary flex items-center justify-center gap-2 group"
              >
                Get Help Now
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => document.querySelector('#services')?.scrollIntoView({ behavior: 'smooth' })}
                className="btn-secondary flex items-center justify-center gap-2"
              >
                Explore Services
                <ArrowRight size={20} />
              </motion.button>
            </motion.div>

            {/* Trust badges */}
            <motion.div
              className="mt-12 grid grid-cols-3 gap-6 text-sm max-w-xl"
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

          {/* Right side cards */}
          <motion.div
            className="hidden lg:block"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 to-blue-600/20 rounded-[2rem] blur-2xl" />

              <div className="relative glass rounded-[2rem] p-6 border border-white/10 shadow-2xl">
                <div className="grid grid-cols-2 gap-5">
                  {cards.map((card, idx) => (
                    <FloatingCard key={idx} {...card} />
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}