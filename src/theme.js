import { extendTheme, theme as base } from '@chakra-ui/react';

const theme = extendTheme({
	fonts: {
		heading: `Montserrat, ${base.fonts.heading}`,
		body: `Inter, ${base.fonts.body}`,
	},
	colors: {
		wtw: {
			200: '#4afc1c',
		}
	},
	components: {
		Input: {
			variants: {
				outline: {
					field: {
						backgroundColor: '#4afc1c',
						borderRadius: 0,
						_focus: {
							backgroundColor: 'red',
						}
					},
				},
			},
		},
	}
});

export default theme;