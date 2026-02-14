module.exports = {
  content: ["./index.html"],
  theme: {
    extend: {
      colors: {
        brand: {
          dark: '#002A14',
          primary: '#00843D',
          accent: '#00C853',
          gold: '#D4AF37',
          surface: '#F8FAFC',
        }
      },
      fontFamily: {
        display: ['Outfit', 'sans-serif'],
        body: ['DM Sans', 'sans-serif'],
      },
      animation: {
        'fade-up': 'fadeUp 0.7s ease-out forwards',
        'fade-up-delay': 'fadeUp 0.7s 0.15s ease-out forwards',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4,0,0.6,1) infinite',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: 0, transform: 'translateY(24px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' }
        }
      }
    }
  },
  plugins: [],
}
