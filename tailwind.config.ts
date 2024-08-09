import type { Config } from 'tailwindcss'

const config: Config = {
  presets: [require('rds-tailwind-theme')],
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components-homepage/**/*.{js,ts,jsx,tsx,mdx}',
    './src/utils/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'cu-waves-red-full':
          // "url('https://cdn.carleton.ca/rds/assets/graphics/cu-waves-red-full.svg')",
          "url('https://cu-production.s3.amazonaws.com/rds/assets/graphics/cu-waves-red-full.svg')",
      },
    },
  },
}
export default config
