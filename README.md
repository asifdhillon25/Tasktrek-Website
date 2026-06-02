# TaskTrek - Premium Academic Support Website

A modern, production-ready SaaS-style landing page for TaskTrek, providing ethical academic support and guidance for international students.

## 🎯 Project Overview

TaskTrek is a premium single-page website built with cutting-edge technologies to help international students with:
- Assignment guidance
- Research support
- Coding & technical projects
- Report writing support
- Presentation help
- Proofreading & formatting
- Urgent deadline support
- Academic consultation

## ✨ Features

- **Modern Design**: Premium SaaS-style landing page with glassmorphism effects
- **Smooth Animations**: Framer Motion animations throughout
- **Dark/Light Mode**: Full theme support with toggle
- **Fully Responsive**: Perfect on all devices
- **Component-Based**: Clean, reusable React components
- **Email Integration**: Resend email service with Vercel serverless functions
- **Form Validation**: Client-side and server-side validation
- **Toast Notifications**: User-friendly feedback with react-hot-toast
- **SEO Optimized**: Proper meta tags and semantic HTML
- **Production Ready**: Tailored for Vercel deployment

## 🛠 Tech Stack

- **Frontend**:
  - React 18
  - Vite
  - Tailwind CSS 3
  - Framer Motion 10
  - Lucide React Icons
  - React Hot Toast

- **Backend**:
  - Vercel Serverless Functions
  - Resend Email Service

## 📁 Project Structure

```
TaskTrek Website/
├── src/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Hero.jsx
│   │   ├── Problem.jsx
│   │   ├── About.jsx
│   │   ├── Services.jsx
│   │   ├── WhyChoose.jsx
│   │   ├── Process.jsx
│   │   ├── Testimonials.jsx
│   │   ├── FAQ.jsx
│   │   ├── Contact.jsx
│   │   └── Footer.jsx
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── api/
│   └── send.js          # Vercel serverless function for emails
├── public/              # Static assets (replace placeholder with your logo)
├── index.html
├── package.json
├── vite.config.js
├── tailwind.config.js
├── postcss.config.js
├── vercel.json
├── .env.example
└── README.md
```

## 🚀 Getting Started

### Prerequisites
- Node.js 16+ and npm
- Vercel account (for deployment)
- Resend account (for email service)

### Installation

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Set Up Environment Variables**
   ```bash
   cp .env.example .env.local
   ```
   
   Add your Resend API key:
   ```
   RESEND_API_KEY=your_resend_api_key_here
   VITE_API_URL=http://localhost:3000
   ```

3. **Start Development Server**
   ```bash
   npm run dev
   ```
   
   The site will open at `http://localhost:3000`

4. **Build for Production**
   ```bash
   npm run build
   ```

## 📧 Email Configuration

### Resend Setup

1. **Get API Key**:
   - Go to [resend.dev](https://resend.dev)
   - Create account and verify email
   - Generate API key from dashboard

2. **Update Environment Variables**:
   - Add `RESEND_API_KEY` to `.env.local` for development
   - Add to Vercel Environment Variables for production

3. **Update Business Email**:
   - In `api/send.js`, change `BUSINESS_EMAIL` to your email:
     ```javascript
     const BUSINESS_EMAIL = 'your-email@domain.com'
     ```

## 🎨 Customization

### Colors & Theme
- Edit `tailwind.config.js` to customize colors
- Navy, blue, cyan, and slate defaults provided
- Dark mode automatically supported

### Content
- Update hero heading, subheading in [Hero.jsx](src/components/Hero.jsx)
- Modify services list in [Services.jsx](src/components/Services.jsx)
- Update FAQ questions in [FAQ.jsx](src/components/FAQ.jsx)
- Replace placeholder images and logo

### Brand
- Replace logo placeholder in [Navbar.jsx](src/components/Navbar.jsx)
- Update footer links in [Footer.jsx](src/components/Footer.jsx)
- Modify contact email in `api/send.js`

## 🚢 Deployment

### Deploy to Vercel

1. **Push to GitHub**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin your-repo-url
   git push -u origin main
   ```

2. **Deploy via Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Import your GitHub repository
   - Add environment variable `RESEND_API_KEY`
   - Deploy!

3. **Update API URL**
   - In production, update `VITE_API_URL` in Vercel environment variables
   - Or remove the variable if using relative paths

## 📝 Sections Included

1. **Navbar**: Sticky navigation with dark mode toggle
2. **Hero**: Eye-catching headline with animated cards
3. **Problem**: Challenges faced by international students
4. **About**: Story section with timeline
5. **Services**: 8 premium service offerings
6. **Why Choose**: 6 key benefits
7. **Process**: 3-step workflow visualization
8. **Testimonials**: Student reviews with ratings
9. **FAQ**: 8 common questions with accordion
10. **Contact**: Professional contact form with validation
11. **Footer**: Links, newsletter signup, social media

## 🔧 Configuration Files

### Vite Configuration
- Hot reload development server
- Optimized production builds
- Source maps disabled for production

### Tailwind Configuration
- Custom color palette (navy, blue, cyan, slate)
- Dark mode support
- Extended animations and keyframes
- Custom components (btn-primary, glass effect, etc.)

### Vercel Configuration
- Build command: `npm run build`
- Output directory: `dist`
- Serverless function memory: 1024MB
- Max duration: 30 seconds

## 🎯 Best Practices

- **Performance**: Uses React.lazy for code splitting ready
- **Accessibility**: ARIA labels on form inputs and buttons
- **SEO**: Semantic HTML, meta tags, proper heading hierarchy
- **Security**: Form validation on client and server
- **Responsive**: Mobile-first design approach
- **Ethical**: Clear messaging about academic support integrity

## 📱 Responsive Design

- Mobile: Optimized for phones (320px+)
- Tablet: Perfect layout for tablets (768px+)
- Desktop: Full-featured experience (1024px+)
- Ultra-wide: Beautiful on large screens (1920px+)

## 🎁 Placeholder Assets

The website includes placeholder images and logo. Replace these with your actual assets:
- Logo: Update in [Navbar.jsx](src/components/Navbar.jsx)
- Hero image/dashboard mockup: Customize in [Hero.jsx](src/components/Hero.jsx)
- Background patterns: Modify in component styles

## 📞 Support

For questions or issues:
- Check FAQ section on the website
- Review documentation in `.env.example`
- Check Resend documentation for email setup
- Refer to Framer Motion docs for animation customization

## 📄 License

This project is ready for commercial use. Customize it for your TaskTrek brand.

## 🎓 Academic Integrity

This website positions TaskTrek ethically as:
- Academic support and tutoring
- Project guidance and consultation
- Editing and proofreading services
- Educational assistance

**Not for**: Cheating, assignment submission, or unethical academic support.

---

**Built with ❤️ for ethical academic support worldwide**
