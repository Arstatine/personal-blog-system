/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        ['light-primary']: '#61A8A0',
        ['light-secondary']: '#9FD1CC',
        ['light-accent']: '#74C3BA',
        ['light-bg']: '#F2F7F6',
        ['light-text']: '#0A0F0F',
        ['light-hover']: 'rgba(159,209,204,.5)',
        ['dark-primary']: '#579E96',
        ['dark-secondary']: '#2E605B',
        ['dark-accent']: '#3C8B82',
        ['dark-bg']: '#080D0C',
        ['dark-text']: '#F0F5F5',
        ['dark-hover']: 'rgba(46,96,91, .5)',
      },
    },
  },
  plugins: [],
};
