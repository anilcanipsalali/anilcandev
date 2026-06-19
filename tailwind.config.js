/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: 'class',
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      light: {
        background: 'var(--theme-light-background)',
        foreground: 'var(--theme-light-foreground)',
        yellow: 'var(--theme-light-yellow)',
        green: 'var(--theme-light-green)',
        gray: 'var(--theme-light-gray)',
        blue: 'var(--theme-light-blue)',
        red: 'var(--theme-light-red)',
      },
      dark: {
        background: 'var(--theme-dark-background)',
        foreground: 'var(--theme-dark-foreground)',
        yellow: 'var(--theme-dark-yellow)',
        green: 'var(--theme-dark-green)',
        gray: 'var(--theme-dark-gray)',
        blue: 'var(--theme-dark-blue)',
        red: 'var(--theme-dark-red)',
      }
    },
    extend: {},
  },
  plugins: [],
};
