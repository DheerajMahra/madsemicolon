import React from 'react';
import Logo from '../../assets/logo.png';
/*Atoms*/
import { Div, Img, Heading, SubHeading } from '../atoms/index';

function Brand() {
	return (
		<Div textAlign="center">
			<Img src={Logo} borderRadius="round" />
			<Heading>madsemicolon</Heading>
			<SubHeading>
				A space in the web for front end related stuffs{' '}
				<span role="img" aria-label="hello-wave">
					👋
				</span>
			</SubHeading>
		</Div>
	);
}

export default Brand;
