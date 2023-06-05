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
        'hero-txtimg-40': 'auto 40%',
        'hero-txtimg-20': 'auto 20%'
      },
    },
  },
  plugins: [],
}
