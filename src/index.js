import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from './style/global.style';
import theme from './style/theme';
import App from './App';
import * as serviceWorker from './serviceWorker';

const app = (
	<ThemeProvider theme={theme}>
		<BrowserRouter>
			<GlobalStyle />
			<App />
		</BrowserRouter>
	</ThemeProvider>
);

ReactDOM.render(app, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
