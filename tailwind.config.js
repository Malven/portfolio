module.exports = {
	mode: 'jit',
	purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
	darkMode: false, // or 'media' or 'class'
	theme: {
		extend: {
			colors: {
				'gray-bg': 'rgb(238, 238, 238)'
			}
		}
	},
	variants: {
		extend: {}
	},
	plugins: []
};
