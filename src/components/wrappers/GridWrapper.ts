import styled from "styled-components";
import { Box } from "./Box";

interface GridProps {
    gap?: string;
    col?: number;
    colExact?: number;
    align?: string;
    justify?: string;
}

export const GridWrapper = styled(Box) <GridProps>`
    display: "grid";
    gap: ${({ gap }) => gap || ""} ;
    grid-template-columns: ${({ col, colExact }) => colExact || (col ? `repeat(${col}, minmax(0, 1fr))` : 'repeat(2, minmax(0, 1fr))')};
    grid-gap: ${({ gap }) => (gap ? `${gap}px` : '20px')};
    align-items: ${({ align }) => align || 'start'};
    justify-content: ${({ justify }) => justify || 'start'};
`