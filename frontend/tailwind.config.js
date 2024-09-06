import { transformer } from 'zod';

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{

      },
      container:{
        center: true,
        padding:{
          DEFAULT: '1rem',
          sm: '2rem',
          lg: '4rem',
          xl: '5rem',
          "2xl": '6rem',
        },
      },
      animation: {
        'float-out': 'float-out 1s linear infinite',
        'bounce': 'bounce 0.6s infinite',
        'flip': 'flip 2s infinite steps(2, end)',
        'rotate': 'rotate 1s infinite linear',
      },
      keyframes: {
        'float-out':{
          to: {transform: 'rotate(360deg)'}
        },
        'bounce': {
          '35%, 65%' : {transform: 'scale(var(--scale))'}
        },
        'flip': {
          to: { transform: 'rotate(360deg)' },
        },
        'rotate': {
          to: {transform: 'rotate(90deg)'}
        }
      }
    },
  },
  plugins: [],
}