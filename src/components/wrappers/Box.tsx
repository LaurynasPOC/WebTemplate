import styled from 'styled-components';

interface BoxProps {
	margin?: string;
	padding?: string;
	border?: string;
	textAlign?: string;
	borderRadius?: string;
	width?: string;
	height?: string;
	maxWidth?: string;
	gridRow?: string | number;
	position?: string;
}

export const Box = styled.div<BoxProps>`
	margin: ${({ margin }) => margin || ''};
	padding: ${({ padding }) => padding || ''};
	border: ${({ border }) => border || ''};
	text-align: ${({ textAlign }) => textAlign || ''};
	border-radius: ${({ borderRadius }) => borderRadius || ''};
	position: ${({ position }) => position || ''};
	width: ${({ width }) => width || ''};
	height: ${({ height }) => height || ''};
	max-width: ${({ maxWidth }) => maxWidth || ''};
	grid-row: ${({ gridRow }) => gridRow || ''};
`;
