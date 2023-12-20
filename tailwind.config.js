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
        customRed: 'rgba(228, 32, 45, 0.6)',
        customBorder: '#DDDDDD',
        customIcon: '#443850',
        customBg: '#E4202D',
        customDark: '#C2601F',
        bodyBg: '#FFFFFF',
        ducatiRed: '#E4202D',
        inputBg: 'rgb(227, 218, 218)',
        signInMobile: '#fb8622',
      },
    },
  },
  plugins: [],
};
