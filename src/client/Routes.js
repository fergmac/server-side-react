import App from './App';
import HomePage from './pages/HomePage';
import NotFoundPage from './pages/NotFoundePage';
import UsersListPage, { loadData } from './pages/UsersListPage';
import AdminsListPage from './pages/AdminsListPage';

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
// Not showing a path for NotFoundPage, react will show this page if no other route matches
export default [
	{
		...App,
		routes: [
			{
				...HomePage,
				path: '/',
				exact: true
			},
			{
				...AdminsListPage,
				path: '/admins',
			},
			{
				...UsersListPage,
				path: '/users',
			},
			{
				...NotFoundPage
			}
		]
	}
];