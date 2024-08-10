import type { Config } from 'tailwindcss'

const config: Config = {
  presets: [require('rds-tailwind-theme')],
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
    './src/**/**/*.{js,ts,jsx,tsx,mdx}',
    './src/**/**/**/*.{js,ts,jsx,tsx,mdx}',
    './src/**/**/**/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'cu-waves-red-full':
          "url('https://cu-production.s3.amazonaws.com/rds/assets/graphics/cu-waves-red-full.svg')",
        'cu-waves-black-full':
          "url('https://cu-production.s3.amazonaws.com/rds/assets/graphics/cu-waves-black-full.svg')",
      },
    },
  },
}
export default config
