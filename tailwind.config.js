/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {},
    maxWidth: {
      '1/2': '50%',
    },
    fontFamily: {
      notosanslight: ['NotoSansLight', 'sans-serif'],
      notosansregular: ['NotoSansLight', 'sans-serif'],
      notosansmedium: ['NotoSansMedium', 'sans-serif'],
      notosansbold: ['NotoSansBold', 'sans-serif'],
    },
  },
  plugins: [],
}
