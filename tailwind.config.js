module.exports = {
  darkMode: 'class',
  content: [
    "./index.html",
    "./node_modules/flowbite/**/*.js"
  ],
  theme: {
    extend: {
      colors: {
        book: {
          "night":           "#14151A",
          "white":           "#FFFFFF",
          "robin-egg-blue":  "#4ECDC4",
          "tiffany-blue":    "#70D7D0",
          "light-red":       "#FF6B6B",
          "naples-yellow":   "#FFE66D",
        }
      }
    },
    fontFamily: {
        // Setting EB Garamond as the default serif font
        serif: ['"EB Garamond"', 'serif'],
        sans: [
        'Helvetica Neue', 
        'ui-sans-serif', 
        'system-ui', 
        '-apple-system', 
        'system-ui', 
        'Segoe UI', 
        'Roboto', 
        'Arial', 
        'Noto Sans', 
        'sans-serif', 
        'Apple Color Emoji', 
        'Segoe UI Emoji', 
        'Segoe UI Symbol', 
        'Noto Color Emoji'
      ],
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}