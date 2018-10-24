const path = require('path');
// Client config for shipping JS code down to the browser

module.exports = {
	// Tell webpack the root file of our server application
	entry: './src/client/client.js', // usually this would be called index.js but this is for clarity

	// Tell webpack where to put the output file that is generated
	output: {
		filename: 'bundle.js',
		path: path.resolve(__dirname, 'public') // Publicly available to anyone who asks for this file
	},

	// Tell webpack to run babel on every file it runs through
	module: {
		rules: [
			{
				test: /\.js?$/, // only apply babel to js files
				loader: 'babel-loader',
				exclude: /node_modules/, // dont run in these directories
				options: {
					presets: [
						'react', // take jsx and turn into normal js function calls
						'stage-0',
						['env', { targets: { browsers: ['last 2 versions'] }}] // master preset
					]
				}
			}
		]
	}

};