/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      vsm: '10px',
      sm: '560px',
      md: '768px',
      w800px: '800px',
      w1080px: '1080px',
      lg: '1200px',
      xl: '1350px',
    },
    extend: {
      dropShadow: {
        '3xl': '3px 4px 11px rgba(98, 98, 98, 0.15)',
        "4xl": '4px 4px 20px rgba(0, 0, 0, 0.10)'
      }
    },
  },
  plugins: [],
}

