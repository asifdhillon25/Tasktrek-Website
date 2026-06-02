// API configuration
export const API_ENDPOINT = process.env.VITE_API_URL || 'http://localhost:3000'

// Services list
export const SERVICES = [
  'Assignment Guidance',
  'Research Support',
  'Coding & Technical Projects',
  'Report Writing Support',
  'Presentation Help',
  'Proofreading & Formatting',
  'Urgent Deadline Support',
  'Academic Consultation',
]

// Countries for the form
export const COUNTRIES = [
  'United States',
  'United Kingdom',
  'Canada',
  'Australia',
  'India',
  'China',
  'Germany',
  'France',
  'Japan',
  'Singapore',
  'Other',
]

// Animation variants
export const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 },
}

export const fadeInLeft = {
  initial: { opacity: 0, x: -50 },
  animate: { opacity: 1, x: 0 },
  transition: { duration: 0.6 },
}

export const fadeInRight = {
  initial: { opacity: 0, x: 50 },
  animate: { opacity: 1, x: 0 },
  transition: { duration: 0.6 },
}
