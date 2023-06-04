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
        'hero-lg': 'auto 650px',
        'hero-md': 'auto 550px',
        'hero-sm': 'auto 400px',
      },
    },
  },
  plugins: [],
}
