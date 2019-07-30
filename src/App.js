import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Header from './components/header';
import Nav from './components/nav';
import Home from './container/Home';

function App() {
	return (
		<React.Fragment>
			<Nav />
			<Header />
			<Switch>
				<Route path='/' component={Home} />
			</Switch>
		</React.Fragment>
	);
}

export default App;
