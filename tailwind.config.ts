import type { Config } from 'tailwindcss';

export default {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ['var(--font-montserrat)'],
      },
      keyframes: {
        blink: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0' },
        },
      },
      animation: {
        'blink-slow': 'blink 2s ease-in-out infinite',
      },
    },
  },
  safelist: [
    {
      pattern: /^text-(xs|sm|base|lg|xl|2xl|3xl|4xl|5xl)/,
      variants: ['sm', 'md', 'lg', 'xl'],
    },
  ],
  plugins: [require('@tailwindcss/typography'), require('tailwindcss-animate')],
} satisfies Config;
