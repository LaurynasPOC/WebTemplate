import styled from 'styled-components'

interface BoxStyles {
  margin?: string | number;
  padding?: string | number;
  border?: string | number
  borderRadius?: string;
  position?: string;
  boxShadow?: string;
  width?: string | number;
  height?: string | number;
}

export const Box = styled.p<BoxStyles>`
  margin: ${({ margin }) => margin || ""};
  padding: ${({ padding }) => padding || ""};
  border: ${({ border }) => border || ''};
  border-radius: ${({ borderRadius }) => borderRadius || ""};
  position: ${({ position }) => position || ""};
  box-shadow: ${({ boxShadow }) => boxShadow || ""};
  width: ${({ width }) => width || ""};
  height: ${({ height }) => height || ''};
`;