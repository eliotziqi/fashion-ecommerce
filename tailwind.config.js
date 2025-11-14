/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f5f5f0',
          100: '#e8e8e0',
          200: '#d1d1c0',
          300: '#b3b39a',
          400: '#9a9a7a',
          500: '#808060',
          600: '#66664d',
          700: '#4d4d3a',
          800: '#333326',
          900: '#1a1a13',
        },
        accent: {
          50: '#e6f0f5',
          100: '#b3d1e0',
          200: '#80b2cb',
          300: '#4d93b6',
          400: '#1a74a1',
          500: '#00558c',
          600: '#004470',
          700: '#003354',
          800: '#002238',
          900: '#00111c',
        },
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

