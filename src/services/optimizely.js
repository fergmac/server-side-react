const axios = require('axios');
const optimizely = require('@optimizely/optimizely-sdk');
const uuidv4 = require('uuid/v4');

class OptimizelyService {

	constructor() {
		this.client = {};
		this.datafile = null;
		this.optimizelyUser = null;
		this.getDataFile()
		.then(() => this.getClient());
	}

	getClient() {
		this.client = optimizely.createInstance({ datafile: this.datafile, skipJSONValidation: true });
	}

	// TODO: Add webhook for visits to update url
	updateDataFile() {
		this.getDataFile()
		.then(() => this.getClient());
	}

	async getDataFile() {
		// TODO: make data file dynamic
		const res = await axios.get('https://cdn.optimizely.com/datafiles/MspCQ3UTqvTiQXj4gYYQiN.json');
		this.datafile = res.data;
		
		return Promise.resolve();
	}

	track(goalKey, extraAttributes = {}) {
		return this.client.track(goalKey, this.optimizelyUser, this.getAttributes(extraAttributes));
	}

	activate(experimentKey, extraAttributes = {}) {
		return this.client.activate(experimentKey, this.optimizelyUser, this.getAttributes(extraAttributes));
	}

	getAttributes(extraAttributes) {
		// TODO: bring in NPM for checking device
		return {
			DEVICE: 'DESKTOP',
			...extraAttributes
		}
	}

	static setOptimizelyUser(req) {
		return req.cookies['optimizely_user'] = req.cookies['optimizely_user'] ? req.cookies['optimizely_user'] : uuidv4();
	}

	static initialize() {

		let optimizelyClient = new OptimizelyService();

		return (req, res, next) => {

			optimizelyClient.optimizelyUser = this.setOptimizelyUser(req);

			req.optimizely = optimizelyClient;

			next();

		}
	}
}

module.exports = OptimizelyService;