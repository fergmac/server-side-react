// Entry Point for client side code base
import 'babel-polyfill'; // Make use of async await syntax
import React from 'react';
import ReactDom from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { createStore, applyMiddleware } from 'redux'; // Create store and hookup middleware
import thunk from 'redux-thunk'; // Handle async action creators
import { Provider } from 'react-redux'; // Ties store and react side of our app together
import { renderRoutes } from 'react-router-config';

import Routes from './Routes';
import reducers from './reducers';

const store = createStore(
	reducers, 
	window.INITIAL_STATE, 
	applyMiddleware(thunk)
);

ReactDom.hydrate(
	<Provider store={store}>
		<BrowserRouter>
			<div>{renderRoutes(Routes)}</div>
		</BrowserRouter>
	</Provider>,
	document.querySelector('#root')
);
