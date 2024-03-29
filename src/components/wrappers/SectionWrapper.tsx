import styled from 'styled-components';
import { desktop, mobile } from '@styles/breakpoints';

interface SectionProps {
	backgroundColor?: string;
}

export const SectionWrapper = styled.section<SectionProps>`
	position: 'relative';
	padding: 100px 20px;
	background-color: ${({ backgroundColor }) => backgroundColor || ''};
	@media ${desktop} {
		padding: 80px 20px;
	}
	@media ${mobile} {
		padding: 50px 15px;
	}
`;
