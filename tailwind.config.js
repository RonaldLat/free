/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
      fontFamily:{
        cuprum: ['Cuprum', "sans-serif"],
        stalemate: ['"Stalemate"', "cursive"],
      }
    }
	},
	plugins: []
};
