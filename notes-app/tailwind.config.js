/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          light: '#4a90e2',
          dark: '#2c3e50'
        },
        background: {
          light: '#f4f6f7',
          dark: '#121212'
        }
      },
      transition: {
        'smooth': 'all 0.3s ease-in-out'
      }
    },
  },
  plugins: [],
}
