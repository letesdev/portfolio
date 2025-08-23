/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	darkMode: 'class',
	theme: {
		extend: {
			fontFamily: {
				'headers': ['system-ui'],
				'sans': ['IBM Plex Sans'],
				'monospace': ['Syne Mono']
			},
			letterSpacing: {
				tighter: '-0.025rem',
			},
			boxShadow: {
				'inset-custom': 'inset 3px 0px 0 0 #242424',
			},
		},
	},
	plugins: [],
}
