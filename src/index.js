import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { createBrowserHistory as createHistory } from 'history';
import defaultTheme from './style/themes';
import App from './App';
import * as serviceWorker from './serviceWorker';

const history = createHistory();
const app = (
	<ThemeProvider theme={defaultTheme}>
		<Router history={history}>
			<Route render={({ location }) => <App location={location} />} />
		</Router>
	</ThemeProvider>
);

ReactDOM.render(app, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
