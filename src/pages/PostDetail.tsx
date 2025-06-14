import { useParams, useSearchParams, useNavigate } from 'react-router-dom';

export const PostDetail = () => {
	// 複数のURLパラメーターを取得
	const { category, postId } = useParams<{
		category: string;
		postId: string;
	}>();
	const [searchParams, setSearchParams] = useSearchParams();
	const navigate = useNavigate();

	// クエリパラメーターを取得
	const comment = searchParams.get('comment');
	const highlight = searchParams.get('highlight');
	const showComments = searchParams.get('showComments') === 'true';

	// クエリパラメーターを更新する関数
	const updateComment = (commentId: string) => {
		setSearchParams((prev) => {
			if (commentId) {
				prev.set('comment', commentId);
			} else {
				prev.delete('comment');
			}
			return prev;
		});
	};

	const toggleComments = () => {
		setSearchParams((prev) => {
			if (showComments) {
				prev.delete('showComments');
			} else {
				prev.set('showComments', 'true');
			}
			return prev;
		});
	};

	const highlightText = (text: string) => {
		setSearchParams((prev) => {
			if (text) {
				prev.set('highlight', text);
			} else {
				prev.delete('highlight');
			}
			return prev;
		});
	};

	return (
		<div style={{ padding: '20px', maxWidth: '800px', margin: '0 auto' }}>
			<h1>投稿詳細ページ</h1>

			{/* URLパラメーター情報 */}
			<div
				style={{
					marginBottom: '30px',
					padding: '15px',
					backgroundColor: '#e9ecef',
					borderRadius: '5px',
				}}
			>
				<h3>URLパラメーター情報</h3>
				<div
					style={{
						display: 'grid',
						gridTemplateColumns: '1fr 1fr',
						gap: '10px',
					}}
				>
					<p>
						<strong>カテゴリー:</strong> {category || '未指定'}
					</p>
					<p>
						<strong>投稿ID:</strong> {postId || '未指定'}
					</p>
					<p>
						<strong>コメントID:</strong> {comment || '未選択'}
					</p>
					<p>
						<strong>ハイライト:</strong> {highlight || 'なし'}
					</p>
				</div>
				<p>
					<strong>コメント表示:</strong> {showComments ? 'ON' : 'OFF'}
				</p>
				<p>
					<strong>完全なURL:</strong> {window.location.href}
				</p>
			</div>

			{/* ナビゲーション */}
			<div style={{ marginBottom: '20px' }}>
				<button
					onClick={() => navigate('/')}
					style={{
						marginRight: '10px',
						padding: '8px 16px',
						backgroundColor: '#6c757d',
						color: 'white',
						border: 'none',
						borderRadius: '4px',
						cursor: 'pointer',
					}}
				>
					← ホームに戻る
				</button>
				<button
					onClick={() => navigate(`/posts/${category || 'tech'}`)}
					style={{
						padding: '8px 16px',
						backgroundColor: '#17a2b8',
						color: 'white',
						border: 'none',
						borderRadius: '4px',
						cursor: 'pointer',
					}}
				>
					{category}カテゴリー一覧
				</button>
			</div>

			{/* 投稿コンテンツ */}
			<div
				style={{
					marginBottom: '30px',
					padding: '20px',
					border: '1px solid #ddd',
					borderRadius: '8px',
				}}
			>
				<h2 style={{ color: highlight ? '#ff6b6b' : '#333' }}>
					{category === 'tech'
						? 'テクノロジー投稿'
						: category === 'life'
						? 'ライフスタイル投稿'
						: category === 'food'
						? 'グルメ投稿'
						: 'その他の投稿'}{' '}
					#{postId}
				</h2>
				<p
					style={{
						backgroundColor: highlight ? '#fff3cd' : 'transparent',
						padding: '10px',
					}}
				>
					これは投稿ID {postId} のサンプルコンテンツです。 カテゴリーは「
					{category}」に分類されています。
					{highlight && `「${highlight}」でハイライトされています。`}
				</p>
			</div>

			{/* ハイライト機能 */}
			<div style={{ marginBottom: '20px' }}>
				<h3>テキストハイライト</h3>
				<input
					type='text'
					value={highlight || ''}
					onChange={(e) => highlightText(e.target.value)}
					placeholder='ハイライトするテキストを入力'
					style={{
						padding: '8px',
						width: '300px',
						marginRight: '10px',
						border: '1px solid #ccc',
						borderRadius: '4px',
					}}
				/>
				<button
					onClick={() => highlightText('')}
					style={{
						padding: '8px 16px',
						backgroundColor: '#dc3545',
						color: 'white',
						border: 'none',
						borderRadius: '4px',
						cursor: 'pointer',
					}}
				>
					クリア
				</button>
			</div>

			{/* コメント表示切り替え */}
			<div style={{ marginBottom: '20px' }}>
				<h3>コメント機能</h3>
				<button
					onClick={toggleComments}
					style={{
						padding: '10px 20px',
						backgroundColor: showComments ? '#dc3545' : '#28a745',
						color: 'white',
						border: 'none',
						borderRadius: '4px',
						cursor: 'pointer',
					}}
				>
					{showComments ? 'コメントを非表示' : 'コメントを表示'}
				</button>
			</div>

			{/* コメント一覧 */}
			{showComments && (
				<div
					style={{
						marginBottom: '20px',
						padding: '15px',
						backgroundColor: '#f8f9fa',
						borderRadius: '5px',
					}}
				>
					<h3>コメント一覧</h3>
					{[1, 2, 3, 4, 5].map((id) => (
						<div
							key={id}
							style={{
								padding: '10px',
								margin: '5px 0',
								backgroundColor:
									comment === id.toString() ? '#cce5ff' : 'white',
								border: '1px solid #ddd',
								borderRadius: '4px',
								cursor: 'pointer',
							}}
							onClick={() => updateComment(id.toString())}
						>
							<strong>コメント #{id}</strong>
							{comment === id.toString() && (
								<span style={{ color: '#007bff' }}> ← 選択中</span>
							)}
							<p style={{ margin: '5px 0 0 0', fontSize: '14px' }}>
								これはサンプルコメントです。クリックするとURLパラメーターに追加されます。
							</p>
						</div>
					))}
					<button
						onClick={() => updateComment('')}
						style={{
							marginTop: '10px',
							padding: '8px 16px',
							backgroundColor: '#6c757d',
							color: 'white',
							border: 'none',
							borderRadius: '4px',
							cursor: 'pointer',
						}}
					>
						コメント選択解除
					</button>
				</div>
			)}

			{/* 他の投稿への移動 */}
			<div style={{ marginBottom: '20px' }}>
				<h3>他の投稿へ移動</h3>
				<div
					style={{
						display: 'grid',
						gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
						gap: '10px',
					}}
				>
					<button
						onClick={() =>
							navigate('/posts/tech/101?showComments=true&highlight=React')
						}
						style={{
							padding: '10px',
							backgroundColor: '#007bff',
							color: 'white',
							border: 'none',
							borderRadius: '4px',
							cursor: 'pointer',
						}}
					>
						Tech投稿 #101
					</button>
					<button
						onClick={() =>
							navigate('/posts/life/202?comment=3&highlight=ライフハック')
						}
						style={{
							padding: '10px',
							backgroundColor: '#28a745',
							color: 'white',
							border: 'none',
							borderRadius: '4px',
							cursor: 'pointer',
						}}
					>
						Life投稿 #202
					</button>
					<button
						onClick={() =>
							navigate('/posts/food/303?showComments=true&comment=1')
						}
						style={{
							padding: '10px',
							backgroundColor: '#fd7e14',
							color: 'white',
							border: 'none',
							borderRadius: '4px',
							cursor: 'pointer',
						}}
					>
						Food投稿 #303
					</button>
				</div>
			</div>
		</div>
	);
};
