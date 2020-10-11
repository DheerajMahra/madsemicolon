import React from 'react';
import { ThemeProvider } from 'styled-components';
/*Global style and theme*/
import GlobalStyle from '../GlobalStyle';
import theme from '../theme';

function Home() {
	return (
		<div>
			<GlobalStyle />
			<ThemeProvider theme={theme}></ThemeProvider>
		</div>
	);
}

export default Home;
