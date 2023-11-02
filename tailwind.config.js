/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  // darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        Pacifico: ['Pacifico', 'sans-serif'],
        'young-serif': ['Young Serif', 'serif'],
        roboto: ['Roboto', 'sans-serif'],
      },
      animation: {
        vibrate: 'vibrate 0.5s ease infinite',
        rotate: 'spin 50s infinite linear',
      },
      keyframes: {
        vibrate: {
          '0%': { transform: 'rotate(10deg)' },
          '25%': { transform: 'rotate(-10deg)' },
          '50%': { transform: 'rotate(0)' },
          '75%': { transform: 'rotate(10deg)' },
          '100%': { transform: 'rotate(0)' },
        },
      },
    },
  },
  plugins: [],
}
