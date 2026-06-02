# TaskTrek Website - Quick Start Guide

## 🎉 Project Successfully Created!

Your premium TaskTrek website is now fully scaffolded and ready to go. Here's how to get started:

## 📦 Step 1: Install Dependencies

```bash
npm install
```

This will install all required packages including:
- React and React DOM
- Vite (build tool)
- Tailwind CSS
- Framer Motion (animations)
- Lucide React (icons)
- React Hot Toast (notifications)

## 🔧 Step 2: Configure Environment Variables

1. Copy the example file:
   ```bash
   cp .env.example .env.local
   ```

2. Update `.env.local` with:
   ```
   VITE_API_URL=http://localhost:3000
   RESEND_API_KEY=your_actual_resend_api_key_here
   ```

## 🚀 Step 3: Start Development Server

```bash
npm run dev
```

Your website will automatically open at `http://localhost:3000`

### Run Local Email API (development)

This project includes a small Express dev API for local testing of the contact form.

Run it in a separate terminal:

```bash
npm run dev:api
```

The API listens on `http://localhost:3001` and Vite proxies `/api` to this server during development.

## 📧 Step 4: Set Up Email Service

### Get Your Resend API Key:
1. Go to [resend.dev](https://resend.dev)
2. Sign up and verify your email
3. Go to API Keys in your dashboard
4. Copy your API key
5. Paste it into `.env.local` as `RESEND_API_KEY`

### Update Business Email:
Edit `api/send.js` and change:
```javascript
const BUSINESS_EMAIL = 'support@tasktrek.com'
// to
const BUSINESS_EMAIL = 'tasktrek25@gmail.com'
```

## 🎨 Step 5: Customize Your Brand

### Logo
- Replace the "T" logo placeholder in [src/components/Navbar.jsx](src/components/Navbar.jsx)
- Add your logo image to `public/` folder
- Update the logo component

### Colors
- Edit [tailwind.config.js](tailwind.config.js) to change the color scheme
- Current colors: Deep navy, Royal blue, Cyan accents
- All components automatically update with theme colors

### Content
- **Hero Section**: Edit [src/components/Hero.jsx](src/components/Hero.jsx)
- **Services**: Edit [src/components/Services.jsx](src/components/Services.jsx)
- **FAQ**: Edit [src/components/FAQ.jsx](src/components/FAQ.jsx)
- **Footer**: Edit [src/components/Footer.jsx](src/components/Footer.jsx)

### Contact Email
- Update in `api/send.js` where form submissions are sent

## 🏗️ Build for Production

```bash
npm run build
```

This creates an optimized build in the `dist/` folder

## 🌐 Deploy to Vercel

### Quick Deploy:
1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Click "New Project"
4. Import your GitHub repository
5. Add environment variable:
   ```
   RESEND_API_KEY = your_resend_api_key
   ```
6. Deploy!

### Custom Domain:
- After deployment, add your custom domain in Vercel project settings
- Update DNS records as shown in Vercel

## 📁 Project Structure Explanation

```
src/
├── components/          # All React components
│   ├── Navbar.jsx      # Navigation bar with theme toggle
│   ├── Hero.jsx        # Hero section with CTA
│   ├── Problem.jsx     # Challenges section
│   ├── About.jsx       # Story with timeline
│   ├── Services.jsx    # Service cards
│   ├── WhyChoose.jsx   # Benefits section
│   ├── Process.jsx     # 3-step process
│   ├── Testimonials.jsx # Student reviews
│   ├── FAQ.jsx         # FAQ accordion
│   ├── Contact.jsx     # Contact form
│   └── Footer.jsx      # Footer with links
├── App.jsx             # Main app component
├── main.jsx            # Entry point
├── index.css           # Global styles
└── config.js           # Configuration constants

api/
└── send.js             # Vercel serverless function for emails

public/                 # Static assets (add your logo here)
```

## 🎯 Key Features Already Implemented

✅ **Dark/Light Mode** - Toggle in navbar, persists in localStorage
✅ **Framer Motion Animations** - Smooth entrance animations on all sections
✅ **Responsive Design** - Perfect on mobile, tablet, desktop
✅ **Form Validation** - Client and server-side
✅ **Email Integration** - Resend + Vercel serverless
✅ **Toast Notifications** - User feedback with react-hot-toast
✅ **SEO Optimized** - Meta tags, semantic HTML, page title
✅ **Glassmorphism UI** - Modern glass effect cards
✅ **Lucide Icons** - Beautiful icons throughout
✅ **Production Ready** - Optimized builds, error handling

## 🔌 Form Integration

The contact form automatically:
- Validates inputs (client & server)
- Sends email to your business email
- Sends confirmation email to student
- Shows success/error messages
- Clears after successful submission

## 🛠️ Common Customizations

### Change Hero Headline
Edit `src/components/Hero.jsx`, find and change:
```jsx
<h1>Your Academic Journey, Made Easier</h1>
```

### Add More Services
Edit `src/components/Services.jsx` and `src/config.js` to add services to the list

### Modify Colors
Edit `tailwind.config.js` - colors are in the `extend.colors` section

### Update Navigation Links
Edit `src/components/Navbar.jsx` - the `navLinks` array

## 📚 Useful Resources

- [React Documentation](https://react.dev)
- [Vite Documentation](https://vitejs.dev)
- [Tailwind CSS Documentation](https://tailwindcss.com)
- [Framer Motion Documentation](https://www.framer.com/motion)
- [Lucide Icons](https://lucide.dev)
- [Resend Documentation](https://resend.com/docs)

## 🐛 Troubleshooting

### "Cannot find module" errors
```bash
npm install
```

### Port 3000 already in use
```bash
npm run dev -- --port 3001
```

### Email not sending
1. Check `RESEND_API_KEY` is correctly set in `.env.local`
2. Verify Resend account is set up
3. Check `BUSINESS_EMAIL` is correct in `api/send.js`
4. Check browser console and server logs for errors

### Dark mode not working
Clear browser cache or check localStorage in DevTools

## 📞 Support

For issues or questions:
1. Check the README.md for detailed documentation
2. Review component files for inline comments
3. Check Vercel logs for serverless function errors
4. Verify Resend API key is valid

---

## Next Steps

1. ✅ Install dependencies: `npm install`
2. ✅ Set up `.env.local` with your Resend API key
3. ✅ Start dev server: `npm run dev`
4. ✅ Customize content and branding
5. ✅ Test the contact form
6. ✅ Deploy to Vercel

**You're all set! Happy building! 🚀**
