import React from "react";
import HexagonBgAnimation from "@components/HexagonBgAnimation";

const Home: React.FC = () => {
  return (
    <HexagonBgAnimation
      evenHexagonsPerRow={10}
      oddHexagonsPerRow={9}
      rowCount={10}
    />
  );
};

export default Home;
