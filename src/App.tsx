import React from "react";
import { GlobalStyle } from "./styles/globalStyles";
import { ContentWrapper } from './components/wrappers/ContentWrapper'
import { Container } from './components/wrappers/Container'

function App() {
  return (
    <>
      <GlobalStyle />
      <ContentWrapper>
        lol
      </ContentWrapper>
    </>
  );
}

export default App;
