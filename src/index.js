const plugin = require('tailwindcss/plugin')

const shapes = plugin(function ({ matchUtilities, theme }) {
  matchUtilities(
    {
      sq: (value) => ({
        width: value,
        height: value,
      }),
      circle: (value) => ({
        width: value,
        height: value,
        borderRadius: '9999px',
      }),
    },
    { values: theme('spacing') }
  )
})

module.exports = shapes
