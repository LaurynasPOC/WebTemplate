import styled from "styled-components";
import { Box } from "./Box";

interface FlexBoxProps {
  justifyContent?: string;
  alignItems?: string;
  flexDirection?: string;
  width?: string | number;
  height?: string | number;
  display?: string;
}

export const FlexWrapper = styled(Box) <FlexBoxProps>`
  display: ${({ display }) => display || 'flex'};
  justify-content: ${({ justifyContent }) => justifyContent || ""};
  align-items: ${({ alignItems }) => alignItems || ""};
  flex-direction: ${({ flexDirection }) => flexDirection || ""};
  width: ${({ width }) => width || ''};
  height: ${({ height }) => height || ''}
`;