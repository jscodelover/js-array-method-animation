import React, { Suspense, lazy } from 'react';
import { Switch, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from './style/global.style';

const Header = lazy(() => import('./components/header'));
const Nav = lazy(() => import('./components/nav'));
const Home = lazy(() => import('./container/Home'));

function App() {
	return (
		<ThemeProvider theme={{ mode: 'dark' }}>
			<>
				<GlobalStyle />
				<Suspense fallback={<h1>Loading...</h1>}>
					<Nav />
					<Header />
					<Switch>
						<Route path='/' render={() => <Home />} />
					</Switch>
				</Suspense>
			</>
		</ThemeProvider>
	);
}

export default App;
