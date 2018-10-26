import React from 'react';
import HomePage from './pages/HomePage';
import UsersListPage, { loadData } from './pages/UsersListPage';

// Original react router solution
// export default () => {
// 	return (
// 		<div>
// 			<Route exact path="/" component={Home} />
// 			<Route path="/users" component={UsersList} />
// 		</div>
// 	);
// };

// Refactor solution for server side, routes as array of objects
export default [
	{
		...HomePage,
		path: '/',
		exact: true
	},
	{
		...UsersListPage,
		path: '/Users',
	}
];