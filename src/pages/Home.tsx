import React from 'react';
import Tooltip from '@components/Tooltip';

const Home: React.FC = () => {
	return (
		<div>
			IT'S Alive!!!
			<div style={{ margin: '100px' }}>
				<Tooltip tooltipText='Thissda'>Tooltop</Tooltip>
			</div>
		</div>
	);
};

export default Home;
