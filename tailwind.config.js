/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    colors: {
      'grayText': '#607B96',
      'blueText': '#1E2D3D',
      'textGray': '#E5E9F0',
      'white': '#FFFFFF',
      'black': '#000000',
    },
    extend: {
      backgroundImage: {
        'hero': "url('../public/group-bg.png')",
      }
    },
  },
  plugins: [],
}
