# Valentín Mecchia Portfolio

A modern, high-performance portfolio website built with React, TypeScript, and Framer Motion. Migrated from Framer export to a fully customizable React application.

![Portfolio Screenshot](https://github.com/user-attachments/assets/cddb7707-0e36-444c-bfbf-e32e29a69085)

## 🚀 Features

- ⚡️ **Blazing Fast** - Built with Vite for optimal performance
- 🎨 **Beautiful Animations** - Powered by Framer Motion
- 📱 **Fully Responsive** - Mobile-first design with custom breakpoints
- 🔍 **SEO Optimized** - React Helmet for comprehensive metadata
- 🎯 **TypeScript** - Strict type checking for reliability
- 🎭 **Code Splitting** - Lazy-loaded routes for faster initial load
- 🌗 **Dark Mode** - Sleek dark theme with custom scrollbars

## 🛠️ Tech Stack

- **Framework**: React 18
- **Language**: TypeScript (strict mode)
- **Bundler**: Vite
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Routing**: React Router DOM v6
- **SEO**: React Helmet Async

## 📦 Project Structure

```
src/
├── components/
│   ├── layout/         # Header, Footer, Layout
│   ├── common/         # Reusable components (Button, Card, Icons)
│   └── sections/       # Page sections (Hero, etc.)
├── pages/              # Route pages (Home, About, Blog, Contact)
├── animations/         # Framer Motion variants and transitions
├── styles/             # Global styles and fonts
├── hooks/              # Custom React hooks
├── types/              # TypeScript type definitions
├── App.tsx            # Main app component with routing
└── main.tsx           # Application entry point
```

## 🎯 Custom Breakpoints

The project uses custom responsive breakpoints matching the original Framer design:

- **Mobile**: 0 - 809px
- **Tablet**: 810px - 1199px
- **Desktop**: 1200px+

## 🎨 Font System

Five custom fonts are integrated:

- **Figtree** (400, 500, 600, 700, 900) - Primary font
- **Figtree Variable** (300-900) - Variable font version
- **Fragment Mono** (400) - Monospace font
- **Inter** (400, 600, 700) - UI font
- **Satoshi** (500) - Display font

All fonts include optimized loading with placeholders to prevent layout shift.

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ and npm

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/ValentinMecchia/Valentin-Mecchia-Portfolio.git
   cd Valentin-Mecchia-Portfolio
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open [http://localhost:5173](http://localhost:5173) in your browser

## 📜 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint
- `npm run type-check` - Check TypeScript types

## 🏗️ Building for Production

```bash
npm run build
```

The optimized build will be in the `dist/` directory, with:
- Code splitting for React and animation vendors
- Lazy-loaded route chunks
- Optimized CSS with Tailwind purging
- Minified JavaScript and CSS

## 📊 Build Output

Typical production build (~312KB total):

- `react-vendor.js` - 161KB (React, React DOM, React Router)
- `animation-vendor.js` - 102KB (Framer Motion)
- Route chunks - 0.5-2.6KB each
- Main bundle - 22KB
- Styles - 18KB

## 🎭 Animation System

The project includes a comprehensive animation system:

- **Page Transitions** - Smooth transitions between routes
- **Appear Animations** - Fade in, scale, spring animations
- **Scroll Animations** - Trigger animations on scroll
- **Hover Effects** - Interactive button and card animations

## 🔍 SEO Features

- Dynamic meta tags with React Helmet
- Open Graph tags for social sharing
- Twitter Card support
- Favicon with light/dark mode variants
- Semantic HTML structure

## 📱 Responsive Design

The site is fully responsive with:
- Mobile-optimized header with hamburger menu
- Flexible grid layouts
- Responsive typography
- Touch-friendly interactive elements

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

This project is open source and available under the MIT License.

## 👨‍💻 Author

**Valentín Mecchia**
- Portfolio: [Your Portfolio URL]
- GitHub: [@ValentinMecchia](https://github.com/ValentinMecchia)

---

**Design Credits**: Visioned and Crafted by [Kanishk Dubey](https://x.com/xlauncherx7)

**Icons**: [Flaticon](https://www.flaticon.com/)
