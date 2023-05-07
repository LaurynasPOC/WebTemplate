import React from 'react'
import styled from 'styled-components'
import { SectionWrapper, Container } from './wrappers'

const HexagonContainer = styled(SectionWrapper)`
    --hexWidth: 100px;
    --hexHeight: 110px;
    background-color: #000;
    & > div > div {
        display: inline-flex;
        margin-top: -32px;
        margin-left: -50px;
        :nth-child(even) {
            margin-left: 3px;
        }
    }
`

const Hexagon = styled.div`
    margin: 3px;
    width: var(--hexWidth);
    height: var(--hexHeight);
    background-color: #111;
    clip-path: polygon(50% 0, 100% 25%, 100% 75%, 50% 100%, 0 75%,0 25%);
    animation: animation 4s linear infinite;
    transition: all 0.2s;
    :hover {
        background-color: #0f0;
        transition: 0s;
    }
    ::after {
        content: '';
        position: absolute;
        top:4px;
        bottom: 4px;
        left: 4px;
        right: 4px;
        background-color: #111;
        clip-path: polygon(50% 0, 100% 25%, 100% 75%, 50% 100%, 0 75%,0 25%);
    }
    ::before {
        content: '';
        position: absolute;
        width: 50%;
        height: 100%;
        background-color: rgba(255,255,255, 0.15);
        z-index: 2;
    }
    @keyframes animation {
        0% {
            filter: hue-rotate(0deg)
        }
        100% {
            filter: hue-rotate(360deg);
        }
    }
`
interface Props {
    rowCount: number,
    hexagonPerRow: number,
}

const HexagonBgAnimation: React.FC<Props>= ({ rowCount, hexagonPerRow }) => {
  const renderRows = () => {
    const rows = [];

    for (let i = 0; i < rowCount; i++) {
      const hexagons = [];

      for (let j = 0; j < hexagonPerRow; j++) {
        hexagons.push(<Hexagon key={`${i}-${j}`} />);
      }

      rows.push(
        <div key={i}>
          {hexagons}
        </div>
      );
    }

    return rows;
  };

  return (
    <HexagonContainer>
      <Container>
        {renderRows()}
      </Container>
    </HexagonContainer>
  );
};

export default HexagonBgAnimation;
