import type { RouteObject } from 'react-router-dom';
import { Home } from '../Home';
import { Dashboard } from '../pages/Dashboard';
import { Profile } from '../pages/Profile';
import { UserProfile } from '../pages/UserProfile';
import { PostDetail } from '../pages/PostDetail';
import { ParamsDemo } from '../pages/ParamsDemo';
import { AtomicDesign } from '../pages/AtomicDesign';
import Todo from '../Todo';
import { Page404 } from '../pages/Page404';

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
	// URLパラメーターを使用したルート
	{
		path: '/user/:userId',
		element: <UserProfile />,
	},
	// 複数のURLパラメーターを使用したルート
	{
		path: '/posts/:category/:postId',
		element: <PostDetail />,
	},
	// URLパラメーター実装ガイド
	{
		path: '/params-guide',
		element: <ParamsDemo />,
	},
	// Atomic Designのページ
	{
		path: '/atomic-design',
		element: <AtomicDesign />,
	},
	// 404 Not Found
	{
		path: '*',
		element: <Page404 />,
	},
];
