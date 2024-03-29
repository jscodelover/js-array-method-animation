import React, { Suspense, lazy, useState } from 'react';
import { Switch, Route } from 'react-router-dom';
import styled from 'styled-components';
import { ThemeProvider } from 'styled-components';
import Transitions from './components/Transitions';
import Loader from './components/loader';
import SubHeader from './components/subHeader';
import Footer from './components/footer';
import { saveState, loadState } from './utils/common';
import GlobalStyle from './style/global.style';

// const Header = lazy(() => import('./components/header'));
// const Nav = lazy(() => import('./components/nav'));
// const Home = lazy(() => import('./container/Home'));
// const MapMethod = lazy(() => import('./container/Map'));
// const FindMethod = lazy(() => import('./container/Find'));
// const FindIndexMethod = lazy(() => import('./container/FindIndex'));
// const ReduceMethod = lazy(() => import('./container/Reduce'));
// const FilterMethod = lazy(() => import('./container/Filter'));
// const SortMethod = lazy(() => import('./container/Sort'));

import Header from './components/header';
import Nav from './components/nav';
import Home from './container/Home';
import MapMethod from './container/Map';
import FindMethod from './container/Find';
import FindIndexMethod from './container/FindIndex';
import ReduceMethod from './container/Reduce';
import FilterMethod from './container/Filter';
import SortMethod from './container/Sort';

const Perspective = styled.div`
	width: 100vw;
	height: 100vh;
	perspective: 1200px;
`;

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

				<Nav handleMode={handleModeChange} />
				{props.location.pathname === '/' && <Header />}
				<div className="app-container">
					{/* { <SubHeader />} */}
					<Suspense fallback={<Loader />}>
						<Transitions pageKey={props.location.key}>
							<Switch location={props.location}>
								<Route exact path="/" component={Home} />
								<Route path="/map" component={MapMethod} />
								<Route path="/find" component={FindMethod} />
								<Route path="/findindex" component={FindIndexMethod} />
								<Route path="/reduce" component={ReduceMethod} />
								<Route path="/filter" component={FilterMethod} />
								<Route path="/sort" component={SortMethod} />
							</Switch>
						</Transitions>
					</Suspense>
				</div>
				<Footer />
			</>
		</ThemeProvider>
	);
}

export default App;
