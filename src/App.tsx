import React from 'react';
import { GlobalStyle } from '@styles/globalStyles';
import Tooltip from '@components/Tooltip';

const App = () => {
	return (
		<>
			<GlobalStyle />
			IT'S Alive!!!
			<div style={{ margin: '100px' }}>
				<Tooltip tooltipText='Thissda'>Tooltop</Tooltip>
			</div>
		</>
	);
};

export default App;
