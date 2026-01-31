# Golam Kibria - Portfolio Website

A modern, premium single-page portfolio website built with React, featuring a bold purple design theme, smooth animations, and responsive layout.

## 🚀 Features

- **Modern Design**: Purple-based color psychology with radial gradients
- **Smooth Animations**: Expressive transitions using CSS transforms (~200ms)
- **Fully Responsive**: Optimized for all devices (340px to 1320px+)
- **Performance Focused**: Lazy loading with React Suspense
- **Interactive Components**: 
  - Sticky navbar with active section highlighting
  - Mobile hamburger menu with slide-in animation
  - Swiper carousel for blog posts
  - Contact form with validation
  - Scroll to top button

## 📋 Prerequisites

Before you begin, ensure you have the following installed:
- [Node.js](https://nodejs.org/) (v16 or higher)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

## 🛠️ Installation

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Configure Firebase** (Optional - for backend features)
   - Create a Firebase project at [Firebase Console](https://console.firebase.google.com/)
   - Copy your Firebase configuration
   - Update `src/config/firebase.js` with your credentials
   - Update `.firebaserc` with your project ID

## 🎨 Development

Start the development server:
```bash
npm run dev
```

The site will be available at `http://localhost:3000`

## 🏗️ Build

Create a production build:
```bash
npm run build
```

Preview the production build:
```bash
npm run preview
```

## 🚀 Deployment

### Firebase Hosting

1. Install Firebase CLI:
   ```bash
   npm install -g firebase-tools
   ```

2. Login to Firebase:
   ```bash
   firebase login
   ```

3. Initialize Firebase (if not already done):
   ```bash
   firebase init hosting
   ```

4. Build and deploy:
   ```bash
   npm run build
   firebase deploy
   ```

## 📁 Project Structure

```
gk-portfolio/
├── public/
│   └── images/          # Profile and blog images
├── src/
│   ├── components/      # React components
│   │   ├── Navbar.jsx
│   │   ├── Hero.jsx
│   │   ├── Profile.jsx
│   │   ├── Blog.jsx
│   │   ├── BlogCard.jsx
│   │   ├── Contact.jsx
│   │   ├── Footer.jsx
│   │   └── ScrollToTop.jsx
│   ├── config/          # Configuration files
│   │   └── firebase.js
│   ├── data/            # Static data
│   │   └── blogData.js
│   ├── utils/           # Utility functions
│   │   └── smoothScroll.js
│   ├── App.jsx          # Main app component
│   ├── main.jsx         # Entry point
│   └── index.css        # Global styles
├── index.html
├── package.json
├── vite.config.js
├── tailwind.config.js
└── README.md
```

## 🎨 Customization

### Update Personal Information

1. **Profile Images**: Replace images in `public/images/`
   - `profile-hero.jpg` - Hero section image
   - `profile-about.jpg` - About section image

2. **Personal Details**: Update in respective components
   - Name and bio: `src/components/Hero.jsx`
   - About text: `src/components/Profile.jsx`
   - Contact info: `src/components/Contact.jsx`

3. **Social Links**: Update URLs in:
   - `src/components/Profile.jsx`
   - `src/components/Contact.jsx`
   - `src/components/Footer.jsx`

4. **Blog Posts**: Modify `src/data/blogData.js`

### Color Scheme

The purple color palette is defined in `tailwind.config.js`. You can customize:
- Primary colors (purple shades)
- Secondary colors (pink/magenta shades)
- Gradient definitions in `src/index.css`

## 🛠️ Tech Stack

- **Framework**: React 18
- **Build Tool**: Vite
- **Styling**: Tailwind CSS + DaisyUI
- **Carousel**: Swiper.js
- **Icons**: React Icons
- **Backend**: Firebase (Firestore + Hosting)
- **Font**: Work Sans (Google Fonts)

## 📱 Responsive Breakpoints

- Mobile: 340px - 767px (1 blog slide)
- Tablet: 768px - 1023px (2 blog slides)
- Desktop: 1024px - 1279px (3 blog slides)
- Large Desktop: 1280px+ (4 blog slides)

## ⚡ Performance Features

- Lazy loading with React Suspense
- Optimized images
- CSS-only animations (no JavaScript)
- Smooth scrolling with easing
- Minimal bundle size

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 👤 Author

**Golam Kibria**
- Portfolio: [Your Portfolio URL]
- Email: hello@golamkibria.com
- GitHub: [@yourusername](https://github.com/yourusername)
- LinkedIn: [Your LinkedIn](https://linkedin.com/in/yourprofile)

## 🙏 Acknowledgments

- Design inspiration from modern UI/UX trends
- Icons from React Icons
- Fonts from Google Fonts
- Carousel by Swiper.js

---

Made with ❤️ by Golam Kibria
