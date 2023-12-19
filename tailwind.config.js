/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        'dancing-script': ['Dancing Script', 'cursive'],
        roboto: ['Roboto', 'sans-serif'],
        helvetica: ['Helvetica', 'sans-serif'],
      },
      colors: {
        customYellow: 'rgba(228, 32, 45, 0.6)',
        customBorder: '#DDDDDD',
        customIcon: '#443850',
        customBg: '#E4202D',
        customDark: '#C2601F',
        bodyBg: '#FFFFFF',
        harleyOrange: '#E4202D',
        inputBg: 'rgb(44, 44, 44)',
        signInMobile: '#fb8622',
      },
    },
  },
  plugins: [],
};
