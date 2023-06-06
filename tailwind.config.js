/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {},
		colors: {
			light: '#FEFBF6',
			primary: '#7F5283',
			secondary: '#A6D1E6',
			dark: '#3D3C42'
		},
		fontFamily: {
			sans: ['Questrial', 'Inter', 'sans-serif'],
			questrial: ['Questrial', 'sans-serif'],
			cookie: ['Cookie', 'cursive']
		}
	},
	plugins: []
};
