import React from 'react';

// context is passed down as a prop as staticContext  will not exist on the browser so we have to set
// default value of an empty object
const NotFoundPage = ({ staticContext = {} }) => {
	staticContext.notFound = true;
	return <h1>Ooops, page not found.</h1>;
}

export default {
	component: NotFoundPage
};