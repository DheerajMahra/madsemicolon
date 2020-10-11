import React from 'react';

export function onRenderBody({ setHeadComponents }) {
	setHeadComponents([
		<link
			rel="stylesheet"
			href="https://cdn.rawgit.com/konpa/devicon/df6431e323547add1b4cf45992913f15286456d3/devicon.min.css"
		/>
	]);
}
