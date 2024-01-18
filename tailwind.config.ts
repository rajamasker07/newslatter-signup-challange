import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      screens: {
        'sm': { max: '640px' },
        'md': { max: '768px', min: '641px' },
        'lg': { max: '1024px', min: '769px' },
        'xl': { max: '1280px', min: '1025px' },
        '2xl': { min: '1281px' }
      }
    },
  },
  plugins: [],
};
export default config;
