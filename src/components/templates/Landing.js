import React from 'react';
/*Atoms*/
import { Flex } from '../atoms/index';
/*Molecules*/
import Brand from '../molecules/Brand';
import Slider from '../molecules/Slider';

function Landing() {
	return (
		<>
			<Flex
				minHeight="60vh"
				alignItems="center"
				justifyContent="center"
				borderTop=".4rem solid #f17017"
			>
				<Brand />
			</Flex>
			<Slider />
		</>
	);
}

export default Landing;
