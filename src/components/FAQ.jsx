import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown } from 'lucide-react'

const FAQItem = ({ question, answer, index, isOpen, onToggle }) => (
  <motion.div
    initial={{ opacity: 0, y: 10 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay: index * 0.05 }}
    className="glass rounded-xl overflow-hidden"
  >
    <button
      onClick={() => onToggle(index)}
      className="w-full px-8 py-6 flex items-center justify-between group hover:bg-white/10 dark:hover:bg-white/5 transition-all duration-200"
    >
      <h3 className="text-lg font-semibold text-white text-left group-hover:gradient-text transition-all">
        {question}
      </h3>
      <motion.div
        animate={{ rotate: isOpen ? 180 : 0 }}
        transition={{ duration: 0.3 }}
        className="flex-shrink-0 ml-4"
      >
        <ChevronDown size={24} className="text-cyan-400" />
      </motion.div>
    </button>

    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
          className="border-t border-gray-200 dark:border-white/10"
        >
          <div className="px-8 py-6 text-gray-700 dark:text-gray-300 leading-relaxed">
            {answer}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  </motion.div>
)

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0)

  const faqs = [
    {
      question: 'Is TaskTrek ethical? Are you helping me cheat?',
      answer: 'Absolutely not. TaskTrek provides guidance, tutoring, editing, and feedback - similar to working with a tutor or academic advisor. We help you understand concepts, develop skills, and improve your own work. We never write assignments for you or encourage academic dishonesty.',
    },
    {
      question: 'How do you ensure my work is original?',
      answer: 'We never provide pre-written content. Instead, we guide you through your own thinking process. We offer feedback on YOUR work, help you understand concepts, and suggest improvements. The final work is always yours, developed with our guidance.',
    },
    {
      question: 'What is your typical turnaround time?',
      answer: 'Our average response time is 2 hours for initial consultations. For detailed feedback and guidance, it typically takes 1-3 business days depending on the complexity and deadline. We also offer expedited support for urgent situations.',
    },
    {
      question: 'Can you help with all subjects?',
      answer: 'We have expertise across most academic disciplines including humanities, sciences, engineering, business, and social sciences. Our team includes professionals with backgrounds in various fields. If we cannot help directly, we\'ll connect you with appropriate resources.',
    },
    {
      question: 'How do you keep my information confidential?',
      answer: 'Your privacy is paramount. All communications and academic work are kept strictly confidential. We use encrypted communication channels, secure file storage, and never share student information with third parties without explicit consent.',
    },
    {
      question: 'Do you offer support in languages other than English?',
      answer: 'While our primary support is in English, we have team members who can assist in other languages. We\'re experienced in helping non-native English speakers with writing and communication. Please mention your language needs when contacting us.',
    },
    {
      question: 'What if I\'m not satisfied with the support?',
      answer: 'We offer a satisfaction guarantee. If you\'re not satisfied with our initial consultation, we\'ll work to adjust our approach or offer a refund. Your success is our priority, and we\'re committed to finding the right support method for you.',
    },
    {
      question: 'How much does TaskTrek cost?',
      answer: 'Our pricing depends on the type and urgency of support needed. We offer flexible pricing options and package deals. Most students invest between $50-$200 per assignment depending on complexity and deadline urgency. We also offer hourly consultation rates.',
    },
  ]

  return (
    <section id="faq" className="section bg-gradient-to-b from-navy-800/10 dark:from-navy-800/50 to-transparent">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="section-title">Frequently Asked Questions</h2>
          <p className="section-subtitle">
            Everything you need to know about TaskTrek and our approach to academic support.
          </p>
        </motion.div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <FAQItem
              key={index}
              {...faq}
              index={index}
              isOpen={openIndex === index}
              onToggle={setOpenIndex}
            />
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-16 glass p-12 rounded-2xl text-center"
        >
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Still have questions?</h3>
          <p className="text-gray-700 dark:text-gray-300 mb-6">
            Get in touch with our team. We\'re here to answer any questions and help you find the right support.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => document.querySelector('#contact').scrollIntoView({ behavior: 'smooth' })}
            className="btn-primary"
          >
            Contact Us
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}
