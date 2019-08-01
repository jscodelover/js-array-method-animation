import React, { Suspense, lazy } from 'react';
import { Switch, Route } from 'react-router-dom';

const Header = lazy(() => import('./components/header'));
const Nav = lazy(() => import('./components/nav'));
const Home = lazy(() => import('./container/Home'));

function App() {
	return (
		<Suspense fallback={<h1>Loading...</h1>}>
			<Nav />
			<Header />
			<Switch>
				<Route path='/' render={() => <Home />} />
			</Switch>
		</Suspense>
	);
}

export default App;
