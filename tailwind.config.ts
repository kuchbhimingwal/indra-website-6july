import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        base: {
          light: '#FAFAF7',
          dark: '#0B0F0D',
        },
        amber: {
          DEFAULT: '#F5A623',
          light: '#FFB627',
          dark: '#D4880F',
        },
        forest: {
          DEFAULT: '#1B4332',
          deep: '#0F5132',
          light: '#2D6A4F',
        },
        slate: {
          body: '#4A4E4D',
        },
      },
      fontFamily: {
        display: ['var(--font-display)', 'sans-serif'],
        body: ['var(--font-body)', 'sans-serif'],
      },
      borderRadius: {
        card: '14px',
        pill: '999px',
      },
      backgroundImage: {
        'sun-teal': 'linear-gradient(120deg, #FFB627 0%, #F5A623 30%, #1B4332 100%)',
        'sky-sun': 'linear-gradient(160deg, #0B0F0D 0%, #0F5132 55%, #F5A623 130%)',
        'grid-lines':
          'linear-gradient(rgba(245,166,35,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(245,166,35,0.08) 1px, transparent 1px)',
      },
      animation: {
        'blob-slow': 'blob-move 18s ease-in-out infinite',
        'grid-pan': 'grid-pan 40s linear infinite',
        'pulse-soft': 'pulse-soft 2.4s ease-in-out infinite',
      },
      keyframes: {
        'blob-move': {
          '0%, 100%': { transform: 'translate(0px, 0px) scale(1)' },
          '33%': { transform: 'translate(30px, -40px) scale(1.08)' },
          '66%': { transform: 'translate(-20px, 20px) scale(0.96)' },
        },
        'grid-pan': {
          '0%': { backgroundPosition: '0px 0px' },
          '100%': { backgroundPosition: '80px 80px' },
        },
        'pulse-soft': {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.6' },
        },
      },
    },
  },
  plugins: [],
};

export default config;
