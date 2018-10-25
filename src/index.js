// common JS or require JS syntax
// const express = require('express');
// const React = require('React');
// const renderToString = require('react-dom/server').renderToString;
// const Home = require('./client/components/Home').default; // have to use when using commonJS and export default

// Entry Point for server side JS

// ese2015 modules 
import express from 'express';
import React from 'react';
import { renderToString } from 'react-dom/server';
import Home from './client/components/Home';

const app = express();

// Express needs to treat this directory as static directory available to outside world
app.use(express.static('public'));

app.get('/', (req, res) => {
	// Allows us to write jsx on server side
	// on client side we import jsx into on file 
	// then we webpack, which babel turns into regular js code
	const content = renderToString(<Home />); // boot up location on server side like client component render

	// Load JS bundle from server
	const html = `
		<html>
			<head></head>
			<body>
				<div id="root">${content}</div>
				<script src="bundle.js"></script>
			</body>
		</html>
	`;	

	res.send(html);	
});

app.listen(3000, () => {
	console.log('Lisenting on port 3000');
});