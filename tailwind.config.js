/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './data/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'bg-primary': '#F2EFE7',
        'bg-secondary': '#E4DDD3',
        'accent-main': '#8B004A',
        'accent-light': '#00A19B',
        'text-main': '#1A1A1A',
      },
      fontFamily: {
        sans: ['var(--font-outfit)', 'sans-serif'],
      },
      borderRadius: {
        '4xl': '2rem',
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
}
