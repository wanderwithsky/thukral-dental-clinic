/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: {
          DEFAULT: '#F5F2EC', // Warm Beige
          secondary: '#FAFAF8', // Off White / Ivory
        },
        primary: {
          DEFAULT: '#4A3B32', // Dark Brown
          hover: '#3A2E26', // Deep/Richer Brown
        },
        text: {
          DEFAULT: '#1A1A1A', // Near Black
          muted: '#6B625B', // Muted brown / warm gray
        },
        border: {
          DEFAULT: '#E5DFD5', // Subtle warm gray/beige
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        serif: ['Playfair Display', 'serif'],
      },
      keyframes: {
        'fade-in-up': {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'spin-slow': {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
        'float': {
          '0%, 100%': { transform: 'translateY(0) rotate(0)' },
          '50%': { transform: 'translateY(-10px) rotate(2deg)' },
        },
        'editorial-reveal': {
          '0%': { opacity: '0', transform: 'translateY(18px) scale(0.96)' },
          '100%': { opacity: '1', transform: 'translateY(0) scale(1)' },
        }
      },
      animation: {
        'fade-in-up': 'fade-in-up 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'spin-slow': 'spin-slow 15s linear infinite',
        'float': 'float 4s ease-in-out infinite',
        'editorial-reveal': 'editorial-reveal 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards',
      }
    },
  },
  plugins: [],
}
