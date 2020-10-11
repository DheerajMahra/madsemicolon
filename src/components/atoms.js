import styled from 'styled-components';

import {
	compose,
	layout,
	space,
	typography,
	color,
	border,
	position,
	flexbox
} from 'styled-system';

export const Div = styled('div')(
	compose(layout, space, typography, color, border, position, flexbox)
);

export const Flex = styled(Div)`
	display: flex;
`;

export const Heading = styled.h1`
	font-size: ${({ theme }) => theme.fontSizes[6]};
	font-weight: ${({ theme }) => theme.fontWeights[2]};
	color: ${({ theme }) => theme.colors.text[0]};
`;

export const SubHeading = styled.h3`
	font-size: ${({ theme }) => theme.fontSizes[4]};
	font-weight: ${({ theme }) => theme.fontWeights[3]};
	color: ${({ theme }) => theme.colors.text[1]};
`;
