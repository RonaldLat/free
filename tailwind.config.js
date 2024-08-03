const defaultTheme = require('tailwindcss/defaultTheme')
/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
      fontFamily:{
        jersey: ['"Jersey 20"', ...defaultTheme.fontFamily.sans]
      }
    }
	},
	plugins: []
};
