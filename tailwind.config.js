module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}


// module.exports = {
//   purge: [],
//   theme: {
//     extend: {
//       margin: {
//         '-full': '-100%',
//         full: '100%',
//         '-cat': '-100%',
//       },
//     },
//   },
//   variants: {},
//   plugins: [],
// }