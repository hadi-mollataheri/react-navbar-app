/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      backgroundImage: {
        'react-navbar':
          'linear-gradient(90deg, rgb(110, 94, 254) 0%, rgba(73, 63, 252, 1) 100%)',
      },
    },
  },
  plugins: [],
};

