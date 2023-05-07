import React from 'react';
import Tooltip from '@components/Tooltip';
import HexagonBgAnimation from '@components/HexagonBgAnimation';

const Home: React.FC = () => {
	return (
		<HexagonBgAnimation hexagonPerRow={10} rowCount={10}/>
	);
};

export default Home;
