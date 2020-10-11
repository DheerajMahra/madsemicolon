import React from 'react';
import Logo from '../../assets/logo.png';
/*Atoms*/
import { Div, Heading, SubHeading } from '../atoms';

function Brand() {
	return (
		<Div textAlign="center">
			<img src={Logo} style={{ borderRadius: '50%' }} />
			<Heading>madsemicolon</Heading>
			<SubHeading>
				A space in the web for front end related stuffs 👋
			</SubHeading>
		</Div>
	);
}

export default Brand;
