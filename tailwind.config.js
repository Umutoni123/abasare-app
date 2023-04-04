/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: theme =>({
        'image': 'url("/src/img/bg.jpg")'
      })
    },
  },
  plugins: [],
}

