/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        // Add your custom colors here
        ['light-primary']: '#3498db',
        ['light-secondary']: '#2ecc71',
        ['light-accent']: '#e74c3c',
        ['light-bg']: '#f8f9fa',
        ['dark-primary']: '#6a7be4',
        ['dark-secondary']: '#9cf3b2',
        ['dark-accent']: '#ff7e67',
        ['dark-bg']: '#2c2c2c',
      },
    },
  },
  plugins: [],
};
