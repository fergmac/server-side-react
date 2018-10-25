// Entry Point for client side code base
import React from 'react';
import ReactDom from 'react-dom';
import { BrowswerRouter } from 'react-router-dom';
import Routes from './Routes';

ReactDom.hydrate(
	<BrowswerRouter>
		<Routes />
	</BrowswerRouter>,
	document.querySelector('#root')
);
