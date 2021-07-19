module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    fontFamily: {
      'sans': ['Helvetica', 'Arial', 'sans-serif'],
      'nunito': ['nunito', 'sans-serif']
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/forms')
  ],
  corePlugins: {
   userSelect: false,
  }
}
