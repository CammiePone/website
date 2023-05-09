/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
		colors: {
			main: "#d7dbe7",
			secondary: "#2e3157",
			accent: "#ffef91",
			lighttext: "#c5cae1",
			darktext: "#0f172a"
		}
	},
  },
  plugins: [],
}

