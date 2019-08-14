import React, { Suspense, lazy, useState } from 'react';
import { Switch, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from './style/global.style';
import Loader from './components/loader';
import SubHeader from './components/subHeader';
import { saveState, loadState } from './utils/common';

const Header = lazy(() => import('./components/header'));
const Nav = lazy(() => import('./components/nav'));
const Home = lazy(() => import('./container/Home'));
const MapMethod = lazy(() => import('./container/Map'));

function App(props) {
	const [theme, handleMode] = useState(
		loadState('mode') !== undefined ? loadState('mode') : true
	);
	function handleModeChange() {
		if (theme) {
			handleMode(false);
			saveState('mode', false);
		} else {
			handleMode(true);
			saveState('mode', true);
		}
	}
	const mode = theme ? 'light' : 'dark';
	return (
		<ThemeProvider theme={{ mode: mode }}>
			<>
				<GlobalStyle />
				<Suspense fallback={<Loader />}>
					<Nav handleMode={handleModeChange} />
					<Header />
					<div className='app-container'>
						<SubHeader />
						<Switch>
							<Route exact path='/' component={Home} />
							<Route path='/map' component={MapMethod} />
						</Switch>
					</div>
				</Suspense>
			</>
		</ThemeProvider>
	);
}

export default App;
