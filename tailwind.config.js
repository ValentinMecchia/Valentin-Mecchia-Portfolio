/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'mobile': { 'max': '809px' },
        'tablet': { 'min': '810px', 'max': '1199px' },
        'desktop': { 'min': '1200px' },
      },
      fontFamily: {
        'figtree': ['Figtree', 'Figtree Placeholder', 'sans-serif'],
        'figtree-var': ['Figtree Variable', 'sans-serif'],
        'fragment': ['Fragment Mono', 'monospace'],
        'inter': ['Inter', 'sans-serif'],
        'satoshi': ['Satoshi', 'sans-serif'],
      },
      colors: {
        // Token colors from the original HTML
        'primary': 'rgb(255, 255, 255)',
        'primary-75': 'rgba(255, 255, 255, 0.75)',
        'border': 'rgb(34, 34, 34)',
      },
    },
  },
  plugins: [],
}
