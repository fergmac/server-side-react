// Entry Point for server side JS

// common JS or require JS syntax
// const express = require('express');

// ese2015 modules 
import 'babel-polyfill'; // Make use of async await syntax
import express from 'express';
import { matchRoutes } from 'react-router-config';
import proxy from 'express-http-proxy';
import Routes from './client/Routes';
import renderer from './helpers/renderer';
import createStore from './helpers/createStore';

const app = express();

// Proxy - any request of /api will be sent to this domain
app.use('/api', proxy('http://react-ssr-api.heokuapp.com', {
	// For O-Auth process with google flow
	proxyReqOptDecorator(opts) {
			opts.headers['x-forwarded-host'] = 'localhost:3000';
			return opts;
	}
}));

// Express needs to treat this directory as static directory available to outside world
app.use(express.static('public'));

app.get('*', (req, res) => {
	const store = createStore(req);

	// Looks at list of routes and the route the user is trying to access
	const promises = matchRoutes(Routes, req.path).map(({route}) => {
		return route.loadData ? route.loadData(store) : null;
	});

	Promise.all(promises).then(() => {
		res.send(renderer(req, store));	
	});
});

app.listen(3000, () => {
	console.log('Lisenting on port 3000');
});