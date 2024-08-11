import type { Config } from 'tailwindcss'

const config: Config = {
  presets: [require('rds-tailwind-theme')],
  content: [
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/layouts/**/*.{js,ts,jsx,tsx,mdx}',
    './src/utils/*.{js,ts,jsx,tsx,mdx}',
  ],
  // theme: {
  //   extend: {
  //     backgroundImage: {
  //       'cu-waves-red-hard-edge':
  //         "url('https://cu-production.s3.amazonaws.com/rds/assets/graphics/cu-waves-red-hard-edge.svg')",
  //       'cu-waves-black-hard-edge':
  //         "url('https://cu-production.s3.amazonaws.com/rds/assets/graphics/cu-waves-black-hard-edge.svg')",
  //     },
  //   },
  // },
}
export default config
