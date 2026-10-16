/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          blue: '#0066FF',
          blueDark: '#0052CC',
          blueLight: '#EBF3FF',
          blueGlow: 'rgba(0, 102, 255, 0.25)',
          gold: '#F5A623',
          goldDark: '#D98910',
          dark: '#0F172A',
          muted: '#64748B',
          subtle: '#F1F5F9',
          border: 'rgba(0, 102, 255, 0.12)',
        },
        studio: {
          bg: '#F8FAFC',
          card: '#FFFFFF',
          subtle: '#F1F5F9',
          border: 'rgba(15, 23, 42, 0.08)',
          dark: '#0F172A',
          muted: '#64748B',
          blue: '#0066FF',
        }
      },
      fontFamily: {
        sans: ['Geist', 'Plus Jakarta Sans', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
        mono: ['Geist Mono', 'ui-monospace', 'monospace'],
        editorial: ['Geist', 'Plus Jakarta Sans', 'sans-serif'],
      },
      borderRadius: {
        '4xl': '2rem',
        '5xl': '2.5rem',
        '6xl': '3rem',
      },
      animation: {
        'marquee': 'marquee 30s linear infinite',
        'marquee-reverse': 'marquee-reverse 30s linear infinite',
        'float-slow': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        'marquee-reverse': {
          '0%': { transform: 'translateX(-50%)' },
          '100%': { transform: 'translateX(0%)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-8px)' },
        }
      }
    },
  },
  plugins: [],
}
