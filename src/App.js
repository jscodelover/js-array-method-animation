import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Header from './components/header';
import Nav from './components/nav';

function App() {
	return (
		<React.Fragment>
			<Nav />
			<Header />
			<div style={{ height: '100vh' }}>sdnj</div>
		</React.Fragment>
	);
}

export default App;
