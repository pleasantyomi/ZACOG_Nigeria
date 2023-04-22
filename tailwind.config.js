/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.html',
    './src/**/*.js',
    './public/**/*.html',
    './public/**/*.js',

  ],
  theme: {
    extend: {
      backgroundImage: {
        'bg1': "url('assets/Background.webp')",
        'bg2': "url('assets/Bg2.png')",
        'bg3': "url('assets/IMG_9386.jpeg')",
        'bg4': "url('assets/worship.webp')",
        'bg5': "url('assets/cross.webp')",
        'bg6': "url('assets/dove.webp')",
        'bg7': "url('assets/pray.webp')",
        'bg8': "url('assets/bishop.webp')",


      }
    },
  },
  plugins: [
  ],
}
