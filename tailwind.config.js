/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        dark: {
          DEFAULT: '#050505',
          50: '#171718',
          100: '#131315',
          200: '#0E0E10',
          300: '#080809',
          900: '#050505',
        },
        offwhite: '#F5F3EE',
        lime: {
          DEFAULT: '#CCFF00',
          hover: '#b5e600',
        },
        coral: '#FF3366',
        muted: '#8E8E93',
      },
      fontFamily: {
        display: ['Syne', 'sans-serif'],
        editorial: ['Instrument Serif', 'serif'],
        sans: ['Inter', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      animation: {
        'spin-slow': 'spin 20s linear infinite',
        'marquee': 'marquee 25s linear infinite',
        'marquee-reverse': 'marquee-reverse 25s linear infinite',
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
      },
    },
  },
  plugins: [],
}
