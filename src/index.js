// common JS or require JS syntax
const express = require('express');
const React = require('React');
const renderToString = require('react-dom/server').renderToString;
const Home = require('./client/components/Home').default;
const app = express();

app.get('/', (req, res) => {
	// Allows us to write jsx on server side
	// on client side we import jsx into on file 
	// then we webpack, which babel turns into regular js code
	const content = renderToString(<Home />);

	res.send(content);	
});

app.listen(3000, () => {
	console.log('Lisenting on port 3000');
});