const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
	purge: [],
	darkMode: false, // or 'media' or 'class'
	theme: {
		extend: {
			fontFamily: {
				body: "'Montserrat', sans-serif"
			},
			colors: {
				primary: '#41883E',
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
