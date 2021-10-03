import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { createBrowserHistory as createHistory } from 'history';
import defaultTheme from './style/themes';
import App from './App';

const history = createHistory();
const app = (
	<ThemeProvider theme={defaultTheme}>
		<Router history={history}>
			<Route render={({ location }) => <App location={location} />} />
		</Router>
	</ThemeProvider>
);

ReactDOM.render(app, document.getElementById('root'));
