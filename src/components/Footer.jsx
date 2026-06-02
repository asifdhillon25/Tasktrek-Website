import { motion } from 'framer-motion'
import { Heart, Github, Linkedin, Mail } from 'lucide-react'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const footerLinks = {
    Product: [
      { name: 'Services', href: '#services' },
      { name: 'Process', href: '#process' },
      { name: 'Testimonials', href: '#testimonials' },
      { name: 'FAQ', href: '#faq' },
    ],
    Company: [
      { name: 'About', href: '#about' },
      { name: 'Blog', href: '#' },
      { name: 'Contact', href: '#contact' },
      { name: 'Careers', href: '#' },
    ],
    Legal: [
      { name: 'Privacy Policy', href: '#' },
      { name: 'Terms of Service', href: '#' },
      { name: 'Code of Conduct', href: '#' },
      { name: 'Disclaimer', href: '#' },
    ],
  }

  return (
    <footer className="bg-white dark:bg-navy-900 border-t border-gray-200 dark:border-navy-800/50">
      {/* Newsletter Section */}
      <div className="bg-gradient-to-r from-blue-50 dark:from-navy-800/30 to-cyan-50 dark:to-navy-800/20 px-4 md:px-8 lg:px-16 py-12">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
              Stay Updated with Academic Tips
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              Subscribe to our newsletter for study strategies, tips, and updates.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-grow px-4 py-3 rounded-lg border border-gray-300 dark:border-navy-700 bg-white dark:bg-navy-800 text-gray-900 dark:text-white placeholder-gray-500 focus:outline-none focus:border-cyan-500 transition-colors"
              />
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-primary whitespace-nowrap"
              >
                Subscribe
              </motion.button>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="px-4 md:px-8 lg:px-16 py-16">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            {/* Brand */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-cyan-500 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold">T</span>
                </div>
                <span className="font-bold text-xl gradient-text">TaskTrek</span>
              </div>
              <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 leading-relaxed">
                Professional academic support for international students. Your journey, made easier.
              </p>
              <div className="flex gap-4">
                <a href="#" className="w-10 h-10 rounded-lg bg-gray-200 dark:bg-navy-800 flex items-center justify-center hover:bg-blue-100 dark:hover:bg-blue-900 transition-colors">
                  <Mail size={18} />
                </a>
                <a href="#" className="w-10 h-10 rounded-lg bg-gray-200 dark:bg-navy-800 flex items-center justify-center hover:bg-blue-100 dark:hover:bg-blue-900 transition-colors">
                  <Linkedin size={18} />
                </a>
                <a href="#" className="w-10 h-10 rounded-lg bg-gray-200 dark:bg-navy-800 flex items-center justify-center hover:bg-blue-100 dark:hover:bg-blue-900 transition-colors">
                  <Github size={18} />
                </a>
              </div>
            </motion.div>

            {/* Product Links */}
            {Object.entries(footerLinks).map(([category, links]) => (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
              >
                <h4 className="font-semibold text-gray-900 dark:text-white mb-4">{category}</h4>
                <ul className="space-y-3">
                  {links.map((link) => (
                    <li key={link.name}>
                      <a
                        href={link.href}
                        className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-cyan-400 transition-colors text-sm"
                      >
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>

          {/* Divider */}
          <div className="border-t border-gray-200 dark:border-navy-800/50 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                © {currentYear} TaskTrek. All rights reserved.
              </p>

              <p className="text-gray-600 dark:text-gray-400 text-sm flex items-center gap-2">
                Made with <Heart size={16} className="text-red-500" /> for international students worldwide
              </p>

              <p className="text-gray-600 dark:text-gray-400 text-sm">
                Academic support with integrity · Confidential & secure
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
