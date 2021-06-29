const plugin = require('tailwindcss/plugin')

module.exports =

  plugin.withOptions(() => {
      return function ({
        addBase,
        theme
      }) {
        addBase({
          'h1': {
            fontSize: theme('fontSize.2xl'),
            marginBottom: '2.5rem'
          },
          'h2': {
            fontSize: theme('fontSize.xl'),
            marginBottom: '2rem'
          },
          'h3': {
            fontSize: theme('fontSize.lg'),
            marginBottom: '1rem'
          },
        })
      }
    }

  )