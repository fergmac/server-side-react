import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducers from '../client/reducers';
import axios from 'axios';
// axios api argument process only works with our api, otherwise use original axios library
export default (req) => {
	const axiosInstance = axios.create({
		baseURL: 'http://react-ssr-api.herokuapp.com',
		headers: { cookie: req.get('cookie')  || '' } // if users has cookie or empty string to avoid undefined
	});
	const store = createStore(
		reducers, 
		{}, 
		applyMiddleware(thunk.withExtraArgument(axiosInstance))
	);

	return store;
}