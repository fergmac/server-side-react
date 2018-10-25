const path = require('path');
// Client config for shipping JS code down to the browser
const merge = require('webpack-merge');
const baseConfig = require('./webpack.base.js');

config = {
	// Tell webpack the root file of our server application
	entry: './src/client/client.js', // usually this would be called index.js but this is for clarity

	// Tell webpack where to put the output file that is generated
	output: {
		filename: 'bundle.js',
		path: path.resolve(__dirname, 'public') // Publicly available to anyone who asks for this file
	}
};

module.exports = merge(baseConfig, config);