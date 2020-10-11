import React from 'react';
import { ThemeProvider } from 'styled-components';
/*Global style and theme*/
import GlobalStyle from '../GlobalStyle';
import theme from '../theme';
/*Templates*/
import Landing from '../components/templates/Landing';

function Home() {
	return (
		<>
			<ThemeProvider theme={theme}>
				<GlobalStyle />
				<Landing />
			</ThemeProvider>
		</>
	);
}

export default Home;
