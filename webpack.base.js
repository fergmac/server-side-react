module.exports = {
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