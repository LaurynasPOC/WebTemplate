import React from "react";
import styled from "styled-components";
import { SectionWrapper, Container } from "./wrappers";

const HexagonWrapper = styled(SectionWrapper)`
  --hexWidth: 100px;
  --hexHeight: 110px;
  background-color: #000;
  & > div {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    & > div {
      display: inline-flex;
      margin-top: -32px;
      :nth-child(even) {
        margin-left: 3px;
      }
    }
  }
`;

const Hexagon = styled.div`
  margin: 3px;
  width: var(--hexWidth);
  height: var(--hexHeight);
  background-color: #111;
  clip-path: polygon(50% 0, 100% 25%, 100% 75%, 50% 100%, 0 75%, 0 25%);
  animation: animation 4s linear infinite;
  transition: all 0.2s;
  :hover {
    background-color: #0f0;
    transition: 0s;
  }
  ::after {
    content: "";
    position: absolute;
    top: 4px;
    bottom: 4px;
    left: 4px;
    right: 4px;
    background-color: #111;
    clip-path: polygon(50% 0, 100% 25%, 100% 75%, 50% 100%, 0 75%, 0 25%);
  }
  ::before {
    content: "";
    position: absolute;
    width: 50%;
    height: 100%;
    background-color: rgba(255, 255, 255, 0.15);
    z-index: 2;
  }
  @keyframes animation {
    0% {
      filter: hue-rotate(0deg);
    }
    100% {
      filter: hue-rotate(360deg);
    }
  }
`;
interface Props {
  rowCount: number;
  evenHexagonsPerRow: number;
  oddHexagonsPerRow: number;
}

const HexagonBgAnimation: React.FC<Props> = ({
  rowCount,
  evenHexagonsPerRow,
  oddHexagonsPerRow,
}) => {
  const renderRows = () => {
    const rows = [];

    for (let i = 0; i < rowCount; i++) {
      const isEvenRow = i % 2 === 0;
      const hexagonPerRow = isEvenRow ? evenHexagonsPerRow : oddHexagonsPerRow;

      const hexagons = [];

      for (let j = 0; j < hexagonPerRow; j++) {
        hexagons.push(<Hexagon key={`${i}-${j}`} />);
      }

      rows.push(<div key={i}>{hexagons}</div>);
    }

    return rows;
  };

  return (
    <HexagonWrapper>
      <Container>{renderRows()}</Container>
    </HexagonWrapper>
  );
};

export default HexagonBgAnimation;
