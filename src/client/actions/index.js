// Type
export const FETCH_USERS = 'fetch_users';

// Action Creator - UPDATE: with axiosInstance no reference api instead of axios
export const fetchUsers = () => async (dispatch, getState, api) => {
	const res = await api.get('/users'); // /api is appended on here

	// Dispatch comes from redux thunk
	dispatch({
		type: FETCH_USERS,
		payload: res
	});
};

export const FETCH_CURRENT_USER = 'fetch_current_user';
export const fetchCurrentUser = () => async (dispatch, getState, api) => {
	const res = await api.get('/current_user');

	dispatch({
		type: FETCH_CURRENT_USER,
		payload: res
	});
};