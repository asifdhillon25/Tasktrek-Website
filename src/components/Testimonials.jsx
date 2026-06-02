import { motion } from 'framer-motion'
import { Star } from 'lucide-react'

const TestimonialCard = ({ name, initials, country, rating, text, delay }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay, duration: 0.5 }}
    whileHover={{ y: -5 }}
    className="glass p-8 rounded-xl group cursor-pointer"
  >
    {/* Rating */}
    <div className="flex gap-1 mb-4">
      {[...Array(rating)].map((_, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: delay + i * 0.1 }}
        >
          <Star size={16} className="fill-yellow-400 text-yellow-400" />
        </motion.div>
      ))}
    </div>

    {/* Quote */}
    <p className="text-gray-700 dark:text-gray-300 mb-6 text-sm leading-relaxed dark:group-hover:text-gray-200 transition-colors">
      "{text}"
    </p>

    {/* Author */}
    <div className="flex items-center gap-4">
      <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full flex items-center justify-center text-white font-bold">
        {initials}
      </div>
      <div>
        <p className="font-semibold text-gray-900 dark:text-white text-sm">{name}</p>
        <p className="text-gray-600 dark:text-gray-400 text-xs">{country}</p>
      </div>
    </div>
  </motion.div>
)

export default function Testimonials() {
  const testimonials = [
    {
      name: 'Alex Chen',
      initials: 'AC',
      country: 'International Student • USA',
      rating: 5,
      text: 'TaskTrek completely transformed my approach to assignments. The guidance I received helped me understand the material better, not just complete the work. My grades improved significantly.',
      delay: 0.1,
    },
    {
      name: 'Maria Rodriguez',
      initials: 'MR',
      country: 'International Student • Canada',
      rating: 5,
      text: 'As someone whose first language isn\'t English, the support with writing and clarity was invaluable. The team was patient and helped me develop my own voice in academic writing.',
      delay: 0.2,
    },
    {
      name: 'Priya Patel',
      initials: 'PP',
      country: 'International Student • UK',
      rating: 5,
      text: 'I was struggling with research methodology. TaskTrek helped me understand the concepts rather than just giving me answers. This skill has been crucial in all my subsequent projects.',
      delay: 0.3,
    },
    {
      name: 'James Okafor',
      initials: 'JO',
      country: 'International Student • Australia',
      rating: 5,
      text: 'The 24/7 support was a lifesaver during my tight deadlines. But what impressed me most was how they helped me develop a system to manage future deadlines independently.',
      delay: 0.4,
    },
    {
      name: 'Sofia Müller',
      initials: 'SM',
      country: 'International Student • USA',
      rating: 5,
      text: 'TaskTrek helped me balance my part-time job and studies. The deadline management support gave me peace of mind and actually improved my academic performance.',
      delay: 0.5,
    },
    {
      name: 'Ravi Kumar',
      initials: 'RK',
      country: 'International Student • USA',
      rating: 5,
      text: 'Coding assignments were my biggest challenge. The team\'s technical guidance and code review sessions helped me not just complete assignments but actually understand programming concepts.',
      delay: 0.6,
    },
  ]

  return (
    <section id="testimonials" className="section bg-white dark:bg-navy-900 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_60%_30%,rgba(6,182,212,0.1),transparent_50%)]" />

      <div className="relative z-10 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="section-title">What Students Say</h2>
          <p className="section-subtitle">
            Real testimonials from international students who have transformed their academic journey with TaskTrek.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, idx) => (
            <TestimonialCard key={idx} {...testimonial} />
          ))}
        </div>

        {/* Social proof */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.7 }}
          className="mt-20 grid md:grid-cols-3 gap-8 text-center"
        >
          <div>
            <p className="text-5xl font-bold gradient-text mb-2">4.9/5</p>
            <p className="text-gray-600 dark:text-gray-400">Average Rating</p>
            <p className="text-sm text-gray-500 mt-1">From 500+ reviews</p>
          </div>
          <div>
            <p className="text-5xl font-bold gradient-text mb-2">98%</p>
            <p className="text-gray-600 dark:text-gray-400">Satisfaction Rate</p>
            <p className="text-sm text-gray-500 mt-1">Would recommend</p>
          </div>
          <div>
            <p className="text-5xl font-bold gradient-text mb-2">500+</p>
            <p className="text-gray-600 dark:text-gray-400">Students Helped</p>
            <p className="text-sm text-gray-500 mt-1">From 120+ countries</p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
