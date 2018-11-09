// common JS or require JS syntax
// const React = require('React');
// const renderToString = require('react-dom/server').renderToString;
// const Home = require('./client/components/Home').default; // have to use when using commonJS and export default

// es2015 modules
import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { renderRoutes } from 'react-router-config';
import serialize from 'serialize-javascript';
import Routes from '../client/Routes';
import { Helmet } from 'react-helmet';

export default (req, store, context) => {
	// Allows us to write jsx on server side
	// on client side we import jsx into on file 
	// then we webpack, which babel turns into regular js code
	const content = renderToString(
		<Provider store={store}>
			<StaticRouter location={req.path} context={context}>
				<div>{renderRoutes(Routes)}</div>
			</StaticRouter>
		</Provider>
		); // boot up location on server side like client component render

		// renderStatic returns object of all tags
		const helmet = Helmet.renderStatic();

	// Load JS bundle from server
	return `
		<html>
			<head>
				${helmet.title.toString()}
				${helmet.meta.toString()}
				<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css">
			</head>
			<body>
				<div id="root">${content}</div>
				<script>
					window.INITIAL_STATE = ${serialize(store.getState())}
				</script>
				<script src="bundle.js"></script>
			</body>
		</html>
	`;
};