// Entry Point for server side JS

// common JS or require JS syntax
// const express = require('express');

// ese2015 modules 
import express from 'express';
import renderer from './helpers/renderer';

const app = express();

// Express needs to treat this directory as static directory available to outside world
app.use(express.static('public'));

app.get('*', (req, res) => {
	res.send(renderer(req));	
});

app.listen(3000, () => {
	console.log('Lisenting on port 3000');
});