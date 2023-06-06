/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './blocks/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  presets: [require('rds-tailwind-theme')],
  theme: {
    extend: {
      gridTemplateColumns: {
        'hero-text-image-40': 'auto 40%',
        'hero-text-image-20': 'auto 20%'
      },
      boxShadow: {
        'hero-text-image': '0 8px 8px -12px rgba(0, 0, 0, 0.3)',
      }
    },
  },
  plugins: [],
}
