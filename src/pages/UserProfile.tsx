import { useParams, useSearchParams, useNavigate } from 'react-router-dom';

export const UserProfile = () => {
	// URLパラメーターを取得
	const { userId } = useParams<{ userId: string }>();
	const [searchParams, setSearchParams] = useSearchParams();
	const navigate = useNavigate();

	// クエリパラメーターを取得
	const tab = searchParams.get('tab') || 'general';
	const sort = searchParams.get('sort') || 'name';

	// パラメーターを更新する関数
	const updateTab = (newTab: string) => {
		setSearchParams((prev) => {
			prev.set('tab', newTab);
			return prev;
		});
	};

	const updateSort = (newSort: string) => {
		setSearchParams((prev) => {
			prev.set('sort', newSort);
			return prev;
		});
	};

	return (
		<div style={{ padding: '20px' }}>
			<h1>ユーザープロフィール</h1>

			{/* URLパラメーター表示 */}
			<div
				style={{
					marginBottom: '20px',
					padding: '10px',
					backgroundColor: '#f0f0f0',
				}}
			>
				<h3>URLパラメーター情報</h3>
				<p>
					<strong>ユーザーID:</strong> {userId || '未指定'}
				</p>
				<p>
					<strong>現在のタブ:</strong> {tab}
				</p>
				<p>
					<strong>ソート順:</strong> {sort}
				</p>
				<p>
					<strong>現在のURL:</strong>{' '}
					{window.location.pathname + window.location.search}
				</p>
			</div>

			{/* タブ切り替え */}
			<div style={{ marginBottom: '20px' }}>
				<h3>タブ切り替え（クエリパラメーター）</h3>
				<button
					onClick={() => updateTab('general')}
					style={{
						marginRight: '10px',
						backgroundColor: tab === 'general' ? '#007bff' : '#6c757d',
						color: 'white',
						border: 'none',
						padding: '8px 16px',
						cursor: 'pointer',
					}}
				>
					基本情報
				</button>
				<button
					onClick={() => updateTab('settings')}
					style={{
						marginRight: '10px',
						backgroundColor: tab === 'settings' ? '#007bff' : '#6c757d',
						color: 'white',
						border: 'none',
						padding: '8px 16px',
						cursor: 'pointer',
					}}
				>
					設定
				</button>
				<button
					onClick={() => updateTab('history')}
					style={{
						backgroundColor: tab === 'history' ? '#007bff' : '#6c757d',
						color: 'white',
						border: 'none',
						padding: '8px 16px',
						cursor: 'pointer',
					}}
				>
					履歴
				</button>
			</div>

			{/* ソート切り替え */}
			<div style={{ marginBottom: '20px' }}>
				<h3>ソート順（クエリパラメーター）</h3>
				<select
					value={sort}
					onChange={(e) => updateSort(e.target.value)}
					style={{ padding: '8px', fontSize: '16px' }}
				>
					<option value='name'>名前順</option>
					<option value='date'>日付順</option>
					<option value='popular'>人気順</option>
				</select>
			</div>

			{/* 別のユーザーに移動 */}
			<div style={{ marginBottom: '20px' }}>
				<h3>別のユーザーに移動</h3>
				<button
					onClick={() => navigate('/user/123?tab=general&sort=name')}
					style={{
						marginRight: '10px',
						backgroundColor: '#28a745',
						color: 'white',
						border: 'none',
						padding: '8px 16px',
						cursor: 'pointer',
					}}
				>
					ユーザー123
				</button>
				<button
					onClick={() => navigate('/user/456?tab=settings&sort=date')}
					style={{
						marginRight: '10px',
						backgroundColor: '#28a745',
						color: 'white',
						border: 'none',
						padding: '8px 16px',
						cursor: 'pointer',
					}}
				>
					ユーザー456
				</button>
				<button
					onClick={() => navigate('/user/789?tab=history&sort=popular')}
					style={{
						backgroundColor: '#28a745',
						color: 'white',
						border: 'none',
						padding: '8px 16px',
						cursor: 'pointer',
					}}
				>
					ユーザー789
				</button>
			</div>

			{/* タブ内容表示 */}
			<div
				style={{
					padding: '20px',
					border: '1px solid #ccc',
					borderRadius: '5px',
				}}
			>
				{tab === 'general' && (
					<div>
						<h3>基本情報</h3>
						<p>ユーザーID {userId} の基本情報を表示しています。</p>
						<p>ソート順: {sort}</p>
					</div>
				)}
				{tab === 'settings' && (
					<div>
						<h3>設定</h3>
						<p>ユーザーID {userId} の設定画面です。</p>
						<p>ソート順: {sort}</p>
					</div>
				)}
				{tab === 'history' && (
					<div>
						<h3>履歴</h3>
						<p>ユーザーID {userId} の履歴一覧です。</p>
						<p>ソート順: {sort}</p>
					</div>
				)}
			</div>
		</div>
	);
};
