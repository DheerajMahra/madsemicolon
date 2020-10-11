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

export const Img = styled.img`
	${border}
`;

export const Icon = styled('i')`
	font-size: ${({ theme }) => theme.fontSizes[8]};
	color: ${({ theme }) => theme.colors.logo};
	margin-left: ${({ theme }) => theme.space[4]};
	margin-right: ${({ theme }) => theme.space[4]};
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
