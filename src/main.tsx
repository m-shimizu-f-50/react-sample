import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Link } from 'react-router-dom';

import { RenderRouter } from './router/RenderRouter';
import { routes } from './router/Routes';

import { UserProvider } from './providers/UserProvider';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement!);
root.render(
	<StrictMode>
		<BrowserRouter>
			<nav
				style={{
					padding: '20px',
					backgroundColor: '#f8f9fa',
					marginBottom: '20px',
				}}
			>
				<ul
					style={{
						listStyle: 'none',
						padding: 0,
						display: 'flex',
						flexWrap: 'wrap',
						gap: '15px',
					}}
				>
					<li>
						<Link to='/' style={{ textDecoration: 'none', color: '#007bff' }}>
							Home
						</Link>
					</li>
					<li>
						<Link
							to='/todo'
							style={{ textDecoration: 'none', color: '#007bff' }}
						>
							Todo
						</Link>
					</li>
					<li>
						<Link
							to='/dashboard'
							style={{ textDecoration: 'none', color: '#007bff' }}
						>
							Dashboard
						</Link>
					</li>
					<li>
						<Link
							to='/params-guide'
							style={{
								textDecoration: 'none',
								color: '#6f42c1',
								fontWeight: 'bold',
							}}
						>
							URLパラメーターガイド
						</Link>
					</li>
					<li>
						<Link
							to='/atomic-design'
							style={{
								textDecoration: 'none',
								color: '#6f42c1',
								fontWeight: 'bold',
							}}
						>
							Atomic Design
						</Link>
					</li>
					<li>
						<Link
							to='/typescript-sample'
							style={{
								textDecoration: 'none',
								color: '#6f42c1',
								fontWeight: 'bold',
							}}
						>
							TypeScript
						</Link>
					</li>
				</ul>
			</nav>

			<UserProvider>
				<RenderRouter routes={routes} />
			</UserProvider>
		</BrowserRouter>
	</StrictMode>
);

// createRoot(document.getElementById('root')!).render(
// 	<StrictMode>
// 		<App />
// 	</StrictMode>
// );
