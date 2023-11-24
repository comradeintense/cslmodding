/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');
export default {
	content: [
		'./pages/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx}',
		'./components/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx}',
		'./app/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx}',
		'./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx}',
	],
	theme: {
		screens: {
			sm: '580px',
			md: '768px',
			lg: '992px',
			xl: '1200px',
			'2xl': '1440px',
		},
		container: {
			center: true,
			padding: {
				DEFAULT: '1.5rem',
				sm: '1.5rem',
				md: '2rem',
				lg: '3rem',
				xl: '3.625rem',
				'2xl': '5rem',
			},
		},
		extend: {
			fontFamily: {
				sans: ['Open Sans', ...defaultTheme.fontFamily.sans],
			},
			colors: {
				darkbg: '#212326',
				lightbg: '#282B2F',
				title: '#C0D1DC',
				subtitle: '#B2B7BB',
				hoverlink: '#45a3e6',
			},
		},
	},
	plugins: [],
};
