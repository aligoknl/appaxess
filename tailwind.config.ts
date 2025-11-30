import type { Config } from 'tailwindcss'

export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        ax: {
          primary: {
            950: '#030b1d',
            900: '#0A1E40',
            800: '#0F2B66',
            700: '#15378C',
            600: '#1942A9',
            500: '#2C5BCC',
            400: '#4072E1',
            300: '#6D90FF',
            200: '#AFC4FF',
            100: '#E0E9FF',
          },
          accent: {
            200: '#FFF6BF',
            300: '#FFE680',
            400: '#FFD54F',
            500: '#FFC107',
            600: '#FFB300',
          },
          gray: {
            900: '#0F172A',
            800: '#1E293B',
            700: '#334155',
            600: '#475569',
            500: '#64748B',
            400: '#94A3B8',
            300: '#CBD5E1',
            200: '#E2E8F0',
            100: '#F8FAFC',
          },
        },
      },
    },
  },
  plugins: [],
} satisfies Config
