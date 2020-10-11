const theme = {
	fontSizes: [
		'1.2rem',
		'1.4rem',
		'1.6rem',
		'1.8rem',
		'2rem',
		'2.4rem',
		'3.2rem',
		'4.8rem',
		'6rem'
	],
	fontWeights: [100, 200, 300, 400, 500, 600, 700, 800, 900],
	space: [0, '.4rem', '.8rem', '1.6rem', '3.2rem', '6.4rem'],
	radii: [
		'.2rem',
		'.4rem',
		'.6rem',
		'.8rem',
		'1rem',
		'1.6rem',
		'3.2rem',
		'6.4rem',
		'50%'
	],
	colors: {
		text: ['#d6d7d8', '#929598'],
		bg: ['#20272b', '#3b4042'],
		orange: ' #f17017',
		logo: '#9295981f'
	}
};

//aliases
theme.radii.round = theme.radii[8];

export default theme;
