import { Colors, theme } from "../../styles/theme";
import styled from 'styled-components'

interface TextBaseStyles {
  margin?: string | number;
  padding?: string | number;
  fontSize?: string;
  fontWeight?: number;
  color?: Colors;
  textAlign?: string;
  textDecoration?: string;
  textTransform?: string;
}

export const TextBase = styled.p<TextBaseStyles>`
  margin: ${({ margin }) => margin || ""};
  padding: ${({ padding }) => padding || ""};
  font-size: ${({ fontSize }) => fontSize || ""};
  font-weight: ${({ fontWeight }) => fontWeight || 400};
  color: ${({ color }) => color || theme.colors.white};
  text-align: ${({ textAlign }) => textAlign || ""};
  text-decoration: ${({ textDecoration }) => textDecoration || ""};
  text-transform: ${({ textTransform }) => textTransform || ""};
`;