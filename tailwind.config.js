/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        quicksand: ['Quicksand', 'sans-serif'],
      },
      colors: {
        primary: '#00FFA3',
        secondary: '#46d683',
        tertiary: '#0e5347',
        background: {
          dark: '#1b1d27',
          light: '#f5f6fa',
        },
        text: {
          primary: {
            dark: '#ffffff',
            light: '#1b1d27',
          },
          secondary: {
            dark: '#95a1ac',
            light: '#4a4f5a',
          },
        },
        accent: {
          1: '#4d90ca',
          2: '#39d2c0',
          3: '#dff8a0',
          4: '#224282',
        },
      },
      animation: {
        'fade-in': 'fadeIn 1s ease-out',
        'slide-up': 'slideUp 0.5s ease-out',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
      },
    },
  },
  plugins: [],
};