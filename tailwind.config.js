/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}', './node_modules/flowbite-svelte/**/*.{html,js,svelte,ts}'],
  	theme: {
		extend: {
			colors: {
				main: "#d7dbe7",
				secondary: "#2e3157",
				accent: "#ffef91",
				lighttext: "#c5cae1",
				darktext: "#0f172a",
				primary: {
					50: '#d7dbe7',
					100: '#c5cae1',
					200: '#c5cae1',
					300: '#d7dbe7',
					400: '#FFBCAD',
					500: '#FE795D',
					600: '#ffef91',
					700: '#2e3157',
					800: '#0f172a',
					900: '#A5371B'
				}
			}
		},
	},
	plugins: [require('flowbite/plugin')],
}

