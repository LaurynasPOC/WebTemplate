import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom'
import { GlobalStyle } from "./styles/globalStyles";
import { ContentWrapper } from './components/wrappers/ContentWrapper'
import NavBar from "./components/NavBar/NavBar";
import TopSection from "./pages/TopSection";

function App() {
  return (
    <>
      <Router>
        <GlobalStyle />
        <NavBar />
        <TopSection />
      </Router>
    </>

  );
}

export default App;
