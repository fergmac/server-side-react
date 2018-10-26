import axios from 'axios';

// Type
export const FETCH_USERS = 'fetch_users';

// Action Creator
export const fetchUsers = () => async dispatch => {
	const res = await axios.get('https://react-ssr-api.herokuapp.com/users');

	// Dispatch comes from redux thunk
	dispatch({
		type: FETCH_USERS,
		payload: res
	});
};