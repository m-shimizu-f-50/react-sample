import {
	useParams,
	useSearchParams,
	useNavigate,
	useLocation,
} from 'react-router-dom';

export const ParamsDemo = () => {
	const params = useParams();
	const [searchParams] = useSearchParams();
	const navigate = useNavigate();
	const location = useLocation();

	return (
		<div style={{ padding: '20px', maxWidth: '1000px', margin: '0 auto' }}>
			<h1>URLパラメーター実装ガイド</h1>

			{/* 基本的な情報 */}
			<div
				style={{
					marginBottom: '30px',
					padding: '20px',
					backgroundColor: '#f8f9fa',
					borderRadius: '8px',
				}}
			>
				<h2>React Router v6でのURLパラメーター</h2>
				<p>
					React Router
					v6では以下の3つの主要なHookを使用してURLパラメーターを操作できます：
				</p>
				<ul>
					<li>
						<strong>useParams()</strong> - 動的ルートパラメーター (/user/:id)
					</li>
					<li>
						<strong>useSearchParams()</strong> - クエリパラメーター
						(?tab=general&sort=name)
					</li>
					<li>
						<strong>useNavigate()</strong> - プログラマティックナビゲーション
					</li>
				</ul>
			</div>

			{/* コード例 */}
			<div style={{ marginBottom: '30px' }}>
				<h2>実装例</h2>

				<h3>1. 動的ルートパラメーター</h3>
				<pre
					style={{
						backgroundColor: '#f4f4f4',
						padding: '15px',
						borderRadius: '5px',
						overflow: 'auto',
					}}
				>
					{`// ルート設定
{
  path: '/user/:userId',
  element: <UserProfile />
}

// コンポーネント内
import { useParams } from 'react-router-dom';

const UserProfile = () => {
  const { userId } = useParams<{ userId: string }>();
  
  return <div>ユーザーID: {userId}</div>;
};`}
				</pre>

				<h3>2. クエリパラメーター</h3>
				<pre
					style={{
						backgroundColor: '#f4f4f4',
						padding: '15px',
						borderRadius: '5px',
						overflow: 'auto',
					}}
				>
					{`import { useSearchParams } from 'react-router-dom';

const SearchPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  
  const query = searchParams.get('q');
  const page = searchParams.get('page') || '1';
  
  const updateQuery = (newQuery: string) => {
    setSearchParams(prev => {
      prev.set('q', newQuery);
      return prev;
    });
  };
  
  return (
    <div>
      <input 
        value={query || ''}
        onChange={(e) => updateQuery(e.target.value)}
      />
      <p>検索クエリ: {query}</p>
      <p>ページ: {page}</p>
    </div>
  );
};`}
				</pre>

				<h3>3. プログラマティックナビゲーション</h3>
				<pre
					style={{
						backgroundColor: '#f4f4f4',
						padding: '15px',
						borderRadius: '5px',
						overflow: 'auto',
					}}
				>
					{`import { useNavigate } from 'react-router-dom';

const Navigation = () => {
  const navigate = useNavigate();
  
  const goToUser = (userId: string) => {
    navigate(\`/user/\${userId}?tab=profile&active=true\`);
  };
  
  return (
    <button onClick={() => goToUser('123')}>
      ユーザー123へ移動
    </button>
  );
};`}
				</pre>
			</div>

			{/* 現在のURL情報 */}
			<div
				style={{
					marginBottom: '30px',
					padding: '20px',
					border: '2px solid #007bff',
					borderRadius: '8px',
				}}
			>
				<h2>現在のURL情報</h2>
				<div
					style={{
						display: 'grid',
						gridTemplateColumns: '1fr 2fr',
						gap: '10px',
						fontSize: '14px',
					}}
				>
					<strong>完全なURL:</strong>
					<span>{window.location.href}</span>

					<strong>パスネーム:</strong>
					<span>{location.pathname}</span>

					<strong>クエリ文字列:</strong>
					<span>{location.search || 'なし'}</span>

					<strong>ハッシュ:</strong>
					<span>{location.hash || 'なし'}</span>

					<strong>すべてのパラメーター:</strong>
					<span>{JSON.stringify(params, null, 2)}</span>

					<strong>すべてのクエリパラメーター:</strong>
					<span>
						{JSON.stringify(Object.fromEntries(searchParams), null, 2)}
					</span>
				</div>
			</div>

			{/* 実践的な使用例 */}
			<div style={{ marginBottom: '30px' }}>
				<h2>実践的な使用例</h2>

				<div
					style={{
						display: 'grid',
						gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
						gap: '20px',
					}}
				>
					{/* ユーザープロフィール */}
					<div
						style={{
							padding: '15px',
							border: '1px solid #ddd',
							borderRadius: '8px',
						}}
					>
						<h3>ユーザープロフィール</h3>
						<p>
							URL: <code>/user/:userId</code>
						</p>
						<p>
							クエリ: <code>?tab=general&sort=name</code>
						</p>
						<button
							onClick={() => navigate('/user/123?tab=general&sort=name')}
							style={{
								padding: '8px 16px',
								backgroundColor: '#28a745',
								color: 'white',
								border: 'none',
								borderRadius: '4px',
								cursor: 'pointer',
							}}
						>
							サンプルを見る
						</button>
					</div>

					{/* 投稿詳細 */}
					<div
						style={{
							padding: '15px',
							border: '1px solid #ddd',
							borderRadius: '8px',
						}}
					>
						<h3>投稿詳細</h3>
						<p>
							URL: <code>/posts/:category/:postId</code>
						</p>
						<p>
							クエリ: <code>?showComments=true&highlight=React</code>
						</p>
						<button
							onClick={() =>
								navigate('/posts/tech/101?showComments=true&highlight=React')
							}
							style={{
								padding: '8px 16px',
								backgroundColor: '#007bff',
								color: 'white',
								border: 'none',
								borderRadius: '4px',
								cursor: 'pointer',
							}}
						>
							サンプルを見る
						</button>
					</div>

					{/* 検索ページ */}
					<div
						style={{
							padding: '15px',
							border: '1px solid #ddd',
							borderRadius: '8px',
						}}
					>
						<h3>検索機能</h3>
						<p>
							URL: <code>/search</code>
						</p>
						<p>
							クエリ: <code>?q=検索語&filter=all&page=1</code>
						</p>
						<button
							onClick={() => navigate('/search?q=React&filter=tech&page=1')}
							style={{
								padding: '8px 16px',
								backgroundColor: '#fd7e14',
								color: 'white',
								border: 'none',
								borderRadius: '4px',
								cursor: 'pointer',
							}}
						>
							サンプルを見る
						</button>
					</div>
				</div>
			</div>

			{/* ベストプラクティス */}
			<div
				style={{
					marginBottom: '30px',
					padding: '20px',
					backgroundColor: '#fff3cd',
					borderRadius: '8px',
				}}
			>
				<h2>ベストプラクティス</h2>
				<ul>
					<li>
						<strong>TypeScript型定義:</strong> useParams&lt;
						{`{ userId: string }`}&gt;() でパラメーターに型を指定
					</li>
					<li>
						<strong>デフォルト値:</strong> searchParams.get('tab') || 'general'
						でデフォルト値を設定
					</li>
					<li>
						<strong>パラメーター更新:</strong>{' '}
						setSearchParams()を使用してURLを更新
					</li>
					<li>
						<strong>SEO対応:</strong> 重要な状態はURLパラメーターに含める
					</li>
					<li>
						<strong>共有可能性:</strong> URLだけで同じ状態を再現できるように設計
					</li>
					<li>
						<strong>バリデーション:</strong>{' '}
						パラメーターの値を適切にバリデーション
					</li>
				</ul>
			</div>

			{/* 注意点 */}
			<div
				style={{
					padding: '20px',
					backgroundColor: '#f8d7da',
					borderRadius: '8px',
				}}
			>
				<h2>注意点</h2>
				<ul>
					<li>
						<strong>URL長制限:</strong>{' '}
						ブラウザのURL長制限（通常2048文字）に注意
					</li>
					<li>
						<strong>エンコーディング:</strong>{' '}
						日本語や特殊文字は適切にエンコード
					</li>
					<li>
						<strong>パフォーマンス:</strong>{' '}
						パラメーター変更時の不要な再レンダリングを避ける
					</li>
					<li>
						<strong>履歴管理:</strong> navigate()のreplaceオプションを適切に使用
					</li>
					<li>
						<strong>セキュリティ:</strong> URLパラメーターは公開情報として扱う
					</li>
				</ul>
			</div>
		</div>
	);
};
