const { colors } = require('tailwindcss/defaultTheme')

module.exports = {
    variants: {},
    plugins: [],
    theme: {
        extend: {
            colors: {
                neutral: colors.gray[100],
                primary: colors.blue[400],
                danger: colors.red[600],
            }
        }
    },
}
