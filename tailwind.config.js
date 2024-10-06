/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'cream': '#EFE8C2',
        'dark green': '#6F6A42',
        'black': '#272727',
        'green' : '#224F34'
        
        
      },
    },
  },
  plugins: [],
}

