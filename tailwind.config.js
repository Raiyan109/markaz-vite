/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // darkBrown: '#6f1d1b',
        // lightBrown: '#996F51',
        // darkBlue: '#072768',
        // lightBlue: '#5079B2',
        // offWhite: '#F7EFE8'
        primary: '#fff',
        secondary: '#432818',
        accent: '#ae766a'
      }
    },
  },
  plugins: [],
}