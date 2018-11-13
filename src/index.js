// Entry Point for server side JS
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

	// To account for Promise.all failure (jumping to catch, skipping promises that may have been succesful)
	// we wrap route.loadData(store) in new Promise that watches inner promise and resolves no matter what
	const promises = matchRoutes(Routes, req.path).map(({route}) => {
		return route.loadData ? route.loadData(store) : null;
	})
	.map(promise => {
		if (promise) {
			// If is promise, wrap in new promise and always resolve 
			return new Promise((resolve, reject) => {
				promise.then(resolve).catch(resolve);
			});
		}
	});

	// Promise.all: when a promise in the chain fails all subsequent promises are skipped
	// We jump to the catch
	Promise.all(promises).then(() => {
		const context = {};
		const content = renderer(req, store, context)
		if (context.url) {
			return res.redirect(301, context.url);
		}

		if (content.notFound) {
			res.status(404);
		}
		res.send(content);	
	});
});

app.listen(3000, () => {
	console.log('Lisenting on port 3000');
});