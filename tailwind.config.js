/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          500: '#3B82F6', // Customize this with your brand color
          600: '#2563EB',
          700: '#1D4ED8',
        },
      },
    },
  },
  plugins: [],
}
