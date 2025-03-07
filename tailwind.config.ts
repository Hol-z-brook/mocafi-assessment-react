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
        primary: {
          900: 'rgb(25, 72, 102)', // Main app bar color
          800: 'rgb(30, 86, 122)',
          700: 'rgb(35, 100, 142)',
          600: 'rgb(40, 114, 162)',
          500: 'rgb(45, 128, 182)',
        },
        cta: 'rgb(248, 141, 42)', // Primary CTA button color
      },
    },
  },
  plugins: [],
};

export default config; 