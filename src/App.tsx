import React from 'react';
import { GlobalStyle } from '@styles/globalStyles';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Navbar from '@components/navigation/Navbar';
import Home from '@pages/Home';

const App = () => {
	return (
		<>
			<GlobalStyle />
			<Router>
				<Navbar />
				<Routes>
					<Route path='/' element={<Home />} />
				</Routes>
			</Router>
		</>
	);
};

export default App;
