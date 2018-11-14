import OptimizelyService from '../services/optimizely';
const optimizely = new OptimizelyService();

module.exports = (router) => {
	router.get('/', (req, res) => {
		
		const variation = req.optimizely.activate('express-playground');

		res.send(variation);
	});

	router.get('/update_data_file', () => {
		optimizely.client.updateDataFile();
	});

	// router.get('*', (req, res) => {
	// 	const store = createStore(req);

	// 	// Looks at list of routes and the route the user is trying to access

	// 	// To account for Promise.all failure (jumping to catch, skipping promises that may have been succesful)
	// 	// we wrap route.loadData(store) in new Promise that watches inner promise and resolves no matter what
	// 	const promises = matchRoutes(Routes, req.path).map(({route}) => {
	// 		return route.loadData ? route.loadData(store) : null;
	// 	})
	// 	.map(promise => {
	// 		if (promise) {
	// 			// If is promise, wrap in new promise and always resolve 
	// 			return new Promise((resolve, reject) => {
	// 				promise.then(resolve).catch(resolve);
	// 			});
	// 		}
	// 	});

	// 	// Promise.all: when a promise in the chain fails all subsequent promises are skipped
	// 	// We jump to the catch
	// 	Promise.all(promises).then(() => {
	// 		const context = {};
	// 		const content = renderer(req, store, context)
	// 		if (context.url) {
	// 			return res.redirect(301, context.url);
	// 		}

	// 		if (content.notFound) {
	// 			res.status(404);
	// 		}
	// 		res.send(content);	
	// 	});
	// });

}