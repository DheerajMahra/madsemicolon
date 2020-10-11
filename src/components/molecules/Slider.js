import React from 'react';
import Marquee from 'react-marquee-master';
/*Atoms*/
import { Icon } from '../atoms/index';

const logos = [
	'jquery-plain',
	'javascript-plain',
	'react-original',
	'sass-original',
	'bootstrap-plain',
	'nodejs-plain',
	'chrome-plain',
	'css3-plain',
	'github-plain',
	'visualstudio-plain',
	'webpack-plain',
	'html5-plain',
	'd3js-plain',
	'angularjs-plain'
];

function Slider() {
	const logoMarkup = logos.map(el => <Icon className={`devicon-${el}`}></Icon>);

	return <Marquee marqueeItems={logoMarkup} direction="left" delay="20" />;
}

export default Slider;
