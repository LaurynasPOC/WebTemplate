import styled from "styled-components";
import { Box } from "./Box";
import { tablet } from "../../styles/breakpoints";

interface ContentStyleProps {
  backgroundColor?: string | number;
  margin?: string | number;
  padding?: string | number;
  maxWidth?: string | number;
  height?: string | number;
}
export const ContentWrapper = styled(Box) <ContentStyleProps>`
  margin: ${({ margin }) => margin || '0 auto'};
  padding: ${({ padding }) => padding || ''};
  max-width: ${({ maxWidth }) => maxWidth || '70%'};
  height: ${({ height }) => height || ""};
  background-color: ${({ backgroundColor }) => backgroundColor || ""};
  @media ${tablet} {
    max-width: ${({ maxWidth }) => maxWidth || '90%'};
  }
`;