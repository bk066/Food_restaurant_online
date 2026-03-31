/** @type {import('tailwindcss').Config} */
export default {
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {
        colors: {
          primary: '#6366F1',
          secondary: '#0EA5E9',
          accent: '#22C55E',
          dark: '#0B0F19',
        }
      },
    },
    plugins: [],
  }