module.exports = {
  mode:"jit",
  purge: [
    '.public/**/*.html',
    './src/**/*.html',
    './src/**/*.vue'
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
    
    },
  },
  variants: {
    extend: {

    },
  },
  plugins: [
   require('./plugins_tailwind/title.plugin'),
    require('@tailwindcss/forms')
    
  ],
}
