import React from 'react';
import { ThemeProvider } from 'styled-components';
/*Global style and theme*/
import GlobalStyle from '../GlobalStyle';
import theme from '../theme';
/*Components*/
import { Flex } from '../components/atoms';
import Brand from '../components/molecules/Brand';

function Home() {
	return (
		<>
			<GlobalStyle />	
			<ThemeProvider theme={theme}>
				<Flex
					minHeight="60vh"
					alignItems="center"
					justifyContent="center"
				>
					<Brand />
				</Flex>
			</ThemeProvider>
		</>
	);
}

export default Home;
