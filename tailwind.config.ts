import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        blush: { DEFAULT: '#F8E1E7', 50: '#FDF5F7', 100: '#FBE8ED', 200: '#F8E1E7', 300: '#F2C4CF', 400: '#E89AAE' },
        ivory: { DEFAULT: '#FFF8F0', 50: '#FFFDF8', 100: '#FFF8F0', 200: '#FFF3E5' },
        champagne: { DEFAULT: '#D4AF37', 100: '#F5E9C8', 200: '#EDDA9E', 300: '#E4C96E', 400: '#D4AF37', 500: '#B8941F', 600: '#9A7A14' },
        maroon: { DEFAULT: '#7B1E3A', 300: '#B44168', 400: '#9B2A50', 500: '#7B1E3A', 600: '#5E1529' },
        sage: { DEFAULT: '#A8B5A0', 300: '#A8B5A0', 400: '#8A9B82' },
        emerald: { DEFAULT: '#0F5132' },
        midnight: { DEFAULT: '#0A0A1A', 100: '#14142B', 200: '#1A1A2E' },
      },
      fontFamily: {
        script: ['var(--font-great-vibes)', 'cursive'],
        display: ['var(--font-playfair)', 'Georgia', 'serif'],
        body: ['var(--font-cormorant)', 'Garamond', 'serif'],
        accent: ['var(--font-cinzel)', 'serif'],
      },
      animation: {
        'shimmer': 'shimmer 3s ease-in-out infinite',
        'float': 'float 6s ease-in-out infinite',
        'float-slow': 'float 10s ease-in-out infinite',
        'pulse-glow': 'pulse-glow 2.5s ease-in-out infinite',
        'spin-slow': 'spin 25s linear infinite',
        'spin-slower': 'spin 60s linear infinite',
        'bounce-gentle': 'bounce-gentle 2.5s ease-in-out infinite',
        'heart-beat': 'heart-beat 1.5s ease-in-out infinite',
        'draw-line': 'draw-line 2s ease-out forwards',
        'grain': 'grain 8s steps(10) infinite',
      },
      keyframes: {
        shimmer: {
          '0%': { backgroundPosition: '-200% center' },
          '100%': { backgroundPosition: '200% center' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0) rotate(0deg)' },
          '33%': { transform: 'translateY(-12px) rotate(1deg)' },
          '66%': { transform: 'translateY(-20px) rotate(-1deg)' },
        },
        'pulse-glow': {
          '0%, 100%': { boxShadow: '0 0 20px rgba(212,175,55,0.2)' },
          '50%': { boxShadow: '0 0 50px rgba(212,175,55,0.5), 0 0 80px rgba(212,175,55,0.15)' },
        },
        'bounce-gentle': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        'heart-beat': {
          '0%, 100%': { transform: 'scale(1)' },
          '15%': { transform: 'scale(1.15)' },
          '30%': { transform: 'scale(1)' },
          '45%': { transform: 'scale(1.1)' },
          '60%': { transform: 'scale(1)' },
        },
        'draw-line': {
          '0%': { width: '0%', opacity: '0' },
          '100%': { width: '100%', opacity: '1' },
        },
        grain: {
          '0%, 100%': { transform: 'translate(0, 0)' },
          '10%': { transform: 'translate(-5%, -10%)' },
          '20%': { transform: 'translate(-15%, 5%)' },
          '30%': { transform: 'translate(7%, -25%)' },
          '40%': { transform: 'translate(-5%, 25%)' },
          '50%': { transform: 'translate(-15%, 10%)' },
          '60%': { transform: 'translate(15%, 0%)' },
          '70%': { transform: 'translate(0%, 15%)' },
          '80%': { transform: 'translate(3%, 35%)' },
          '90%': { transform: 'translate(-10%, 10%)' },
        },
      },
      backgroundImage: {
        'gold-gradient': 'linear-gradient(135deg, #B8860B, #D4AF37, #FFD700, #D4AF37, #B8860B)',
        'gold-shimmer': 'linear-gradient(90deg, transparent 0%, rgba(212,175,55,0.4) 50%, transparent 100%)',
        'dark-gradient': 'linear-gradient(180deg, #0A0A1A 0%, #14142B 50%, #0A0A1A 100%)',
        'mesh-1': 'radial-gradient(at 40% 20%, rgba(212,175,55,0.08) 0%, transparent 50%), radial-gradient(at 80% 80%, rgba(123,30,58,0.06) 0%, transparent 50%), radial-gradient(at 10% 70%, rgba(248,225,231,0.08) 0%, transparent 50%)',
      },
      boxShadow: {
        'gold': '0 4px 25px rgba(212,175,55,0.25)',
        'gold-lg': '0 8px 50px rgba(212,175,55,0.35)',
        'gold-glow': '0 0 40px rgba(212,175,55,0.4), 0 0 80px rgba(212,175,55,0.15)',
        'card': '0 8px 40px rgba(0,0,0,0.08)',
        'card-dark': '0 8px 40px rgba(0,0,0,0.4)',
        'depth': '0 2px 4px rgba(0,0,0,0.05), 0 8px 16px rgba(0,0,0,0.05), 0 16px 32px rgba(0,0,0,0.05)',
      },
    },
  },
  plugins: [],
};

export default config;
