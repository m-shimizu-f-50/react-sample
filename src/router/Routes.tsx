import type { RouteObject } from 'react-router-dom';
import { Home } from '../Home';
import { Dashboard } from '../pages/Dashboard';
import { Profile } from '../pages/Profile';
import Todo from '../Todo';

export const routes: RouteObject[] = [
	{
		path: '/',
		element: <Home />,
	},
	{
		path: '/todo',
		element: <Todo />,
	},
	{
		path: '/dashboard',
		element: <Dashboard />,
		children: [
			{
				path: 'profile',
				element: <Profile />,
			},
		],
	},
];
