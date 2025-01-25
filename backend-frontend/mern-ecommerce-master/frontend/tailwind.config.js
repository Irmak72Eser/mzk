

/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./src/**/*.{js,jsx,ts,tsx}",
	],
	theme: {
		extend: {
			colors:{
				'primary': '#FFFFFF', /* egricayir.com'daki ana renk (koyu gri) */
				'secondary': '#EB7B01',  /* egricayir.com'daki ikincil renk (açık gri) */
				'text': '#EB7B01',
				'navbarText': '#555',
				'navbarBackground': '#F5C96A'
			}
		},
	},
	plugins: [],
}