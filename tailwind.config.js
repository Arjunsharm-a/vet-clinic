/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#eaf3fb',
          100: '#d4e7f7',
          200: '#a9cff0',
          300: '#7eb7e8',
          400: '#539fe1',
          500: '#2887da',
          600: '#206cb0',
          700: '#185186',
          800: '#10365c',
          900: '#081b32',
        },
        secondary: {
          50: '#f2faed',
          100: '#e5f5db',
          200: '#cbeab7',
          300: '#b1df93',
          400: '#97d46f',
          500: '#7dc94b',
          600: '#64a13c',
          700: '#4b792d',
          800: '#32511e',
          900: '#19290f',
        },
        accent: {
          50: '#fff4e6',
          100: '#ffe9cc',
          200: '#ffd399',
          300: '#ffbe66',
          400: '#ffa833',
          500: '#ff9200',
          600: '#cc7500',
          700: '#995800',
          800: '#663a00',
          900: '#331d00',
        },
        neutral: {
          50: '#f7f5f2',
          100: '#ede9e3',
          200: '#dbd3c7',
          300: '#c8bdab',
          400: '#b6a78f',
          500: '#a49273',
          600: '#83755c',
          700: '#625744',
          800: '#413a2d',
          900: '#211d17',
        },
      },
      fontFamily: {
        heading: ['Nunito', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
      },
      borderRadius: {
        'xl': '1rem',
        '2xl': '1.5rem',
        '3xl': '2rem',
      },
      boxShadow: {
        card: '0 4px 24px 0 rgba(186, 148, 112, 0.12)',
        cta: '0 6px 32px 0 rgba(255, 146, 0, 0.25)',
      },
    },
  },
  plugins: [],
};
