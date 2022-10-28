import styled from "styled-components/macro";


interface ButtonStyles {
      color?: number | string;
      backgroundColor?: string;
      boxShadow?: string | number;
      borderRadius?: string;
      margin?: string | number;
      padding?: string | number;
      border?: string;
      fontSize?: string;
      fontWeight?: number;
      width?: string;
      height?: string;
}

export const Button = styled.button < ButtonStyles > `
  width: ${({ width }) => width || "343px"};
  height: ${({ height }) => height || "56px"};
  margin: ${({ margin }) => margin || "auto 0"};
  color: ${({ color }) => color || ''};
  background-color: ${({ backgroundColor }) => backgroundColor || ''};
  box-shadow: ${({ boxShadow }) => boxShadow || ""};
  border-radius: ${({ borderRadius }) => borderRadius || ""};
  padding: ${({ padding }) => padding || ""};
  border: ${({ border }) => border || "none"};
  font-size: ${({ fontSize }) => fontSize || ""};
  font-weight: ${({ fontWeight }) => fontWeight || ""};
`;