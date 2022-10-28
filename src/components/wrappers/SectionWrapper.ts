import styled from "styled-components";
import { mobile, tablet } from "../../styles/breakpoints";

interface SectionWrapperStyles {
  minHeight?: string;
  backgroundColor?: string | number;
  position?: string;
  padding?: string | number;
}

export const SectionWrapper = styled.section<SectionWrapperStyles>`
  position: ${({ position }) => position || 'relative'};
  padding: ${({ padding }) => padding || ''};
  background-color: ${({ backgroundColor }) => backgroundColor || ""};
@media ${tablet} {
  padding: ${({ padding }) => padding || '3rem'};
}
@media ${mobile} {
  padding: ${({ padding }) => padding || '2rem'};
}
`;