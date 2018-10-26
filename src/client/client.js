// Entry Point for client side code base
import React from 'react';
import ReactDom from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { createStore, applyMiddleware } from 'redux'; // Create store and hookup middleware
import thunk from 'redux-thunk'; // Handle async action creators
import { Provider } from 'react-redux'; // Ties store and react side of our app together

import Routes from './Routes';

const store = createStore(reducers, {}, applyMiddleware(thunk));

ReactDom.hydrate(
	<Provider store={store}>
		<BrowserRouter>
			<Routes />
		</BrowserRouter>
	</Provider>,
	document.querySelector('#root')
);
