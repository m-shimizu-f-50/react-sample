import { Link, Outlet } from 'react-router-dom';

export const Dashboard: React.FC = () => {
	return (
		<div>
			<h1>Dashboard画面</h1>
			<nav>
				<Link to='profile'>Profile</Link>
			</nav>
			<hr />
			{/* 子ルートがここにレンダリングされる */}
			<Outlet />
		</div>
	);
};
