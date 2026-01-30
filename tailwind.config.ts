/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        purple: {
          DEFAULT: '#7C3AED', // Purple
        },
        emerald: {
          DEFAULT: '#10B981', // Emerald
        },
        neon: {
          DEFAULT: '#D946EF', // Neon Accent
        },
      },
      backgroundColor: {
        'dark-bg': '#1E1E2E', // Dark background
      },
      textColor: {
        'dark-text': '#EDE9FE', // Light text for dark mode
      },
    },
  },
  variants: {},
  plugins: [],
};