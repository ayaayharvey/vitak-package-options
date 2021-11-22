const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
	purge: [],
	darkMode: false, // or 'media' or 'class'
	theme: {
		screens: {
			sm: '640px',
			md: '768px',
			lg: '1024px',
			xl: '1280px',
			'2xl': '1536px'
		},
		extend: {
			fontFamily: {
				body: "'Montserrat', sans-serif"
			},
			colors: {
				primary: '#41883E',
				theme: {
					green: '#41883E',
					orange: '#E1591A'
				},
				gray: {
					light: '#FAFAFA'
				},
				color: {
					default: '#363636'
				},
				icon: {
					light: '#f5dacd',
					dark: '#E1591A'
				}
			}
		}
	},
	variants: {
		extend: {}
	},
	plugins: [require('tailwindcss'), require('autoprefixer')]
};
