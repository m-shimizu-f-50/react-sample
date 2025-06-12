import { Link } from 'react-router-dom';

export const Page404: React.FC = () => {
	return (
		<div>
			<h1>ページが見つかりません。</h1>
			<Link to='/'>ホームに戻る</Link>
		</div>
	);
};
