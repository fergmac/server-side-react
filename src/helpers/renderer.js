// common JS or require JS syntax
// const React = require('React');
// const renderToString = require('react-dom/server').renderToString;
// const Home = require('./client/components/Home').default; // have to use when using commonJS and export default

// es2015 modules
import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import Routes from '../client/Routes';

export default (req) => {
	// Allows us to write jsx on server side
	// on client side we import jsx into on file 
	// then we webpack, which babel turns into regular js code
	const content = renderToString(
			<StaticRouter location={req.path} context={{}}>
				<Routes />
			</StaticRouter>
		); // boot up location on server side like client component render

	// Load JS bundle from server
	return `
		<html>
			<head></head>
			<body>
				<div id="root">${content}</div>
				<script src="bundle.js"></script>
			</body>
		</html>
	`;
};