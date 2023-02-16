import styled from 'styled-components';

interface SectionProps {
	backgroundColor?: string;
}

export const SectionWrapper = styled.section<SectionProps>`
	height: 100%;
	position: 'relative';
	padding: 0 20px;
	background-color: ${({ backgroundColor }) => backgroundColor || ''};
`;
