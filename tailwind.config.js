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
        'bg1': "url('assets/Bg1.png')",
        'bg2': "url('assets/Bg2.png')",
        'bg3': "url('assets/IMG_9386.jpeg')",
        'bg4': "url('assets/dancing-concert-while-singer-is-performing-surrounded-with-lights.jpg')",
        'bg5': "url('assets/cross.jpg')",
        'bg6': "url('assets/dove.jpg')",
        'bg7': "url('assets/pray.jpg')",
        'bg8': "url('assets/IMG_9475.JPG')",


      }
    },
  },
  plugins: [
  ],
}
