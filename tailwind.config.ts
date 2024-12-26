import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        maharlika: ['Maharlika', 'serif'],
        garet: ['Garet', 'sans-serif'],
      },
      colors: {
        primary: {
          DEFAULT: '#ae8fc6',
          light: '#c4aed4',
          dark: '#927aa8',
        },
        background: 'var(--background)',
        text: 'var(--text)',
      },
    },
  },
  plugins: [],
}

export default config
