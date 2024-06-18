/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	darkMode: 'class',
	theme: {
		extend: {
			fontFamily: {
				'headers': ['system-ui'],
				'sans': ['IBM Plex Sans'],
			},
			letterSpacing: {
				tighter: '-0.025rem',
			},
		},
	},
	plugins: [],
}
