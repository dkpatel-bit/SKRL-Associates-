/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: '#0A1628',
          50: '#E8EDF5',
          100: '#C5D0E6',
          200: '#9AAECE',
          300: '#6F8CB6',
          400: '#4D71A3',
          500: '#2B5590',
          600: '#1E3D6E',
          700: '#132144',
          800: '#0D1835',
          900: '#0A1628',
        },
        gold: {
          DEFAULT: '#C9A84C',
          50: '#FBF5E6',
          100: '#F5E8C0',
          200: '#EDD896',
          300: '#E5C76C',
          400: '#DFBB52',
          500: '#C9A84C',
          600: '#A88736',
          700: '#876924',
          800: '#664E16',
          900: '#453308',
        },
        sky: {
          DEFAULT: '#3B9EE8',
          light: '#EBF5FD',
        },
        surface: '#F8F9FC',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Playfair Display', 'Georgia', 'serif'],
      },
      boxShadow: {
        'glass': '0 8px 32px 0 rgba(10, 22, 40, 0.12)',
        'gold': '0 4px 24px rgba(201, 168, 76, 0.3)',
        'navy': '0 4px 24px rgba(10, 22, 40, 0.2)',
        'card': '0 2px 20px rgba(10, 22, 40, 0.08)',
        'card-hover': '0 8px 40px rgba(10, 22, 40, 0.16)',
      },
      animation: {
        'fade-up': 'fadeUp 0.6s ease-out forwards',
        'fade-in': 'fadeIn 0.5s ease-out forwards',
        'slide-right': 'slideRight 0.6s ease-out forwards',
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'shimmer': 'shimmer 2s linear infinite',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideRight: {
          '0%': { opacity: '0', transform: 'translateX(-30px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
      },
      backgroundImage: {
        'hero-gradient': 'linear-gradient(135deg, #0A1628 0%, #132144 50%, #1E3D6E 100%)',
        'gold-gradient': 'linear-gradient(135deg, #C9A84C 0%, #E5C76C 100%)',
        'card-gradient': 'linear-gradient(145deg, #ffffff 0%, #f8f9fc 100%)',
      },
    },
  },
  plugins: [],
}
