import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Link } from 'react-router-dom';

import { RenderRouter } from './router/RenderRouter';
import { routes } from './router/Routes';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement!);
root.render(
	<StrictMode>
		<BrowserRouter>
			<nav>
				<ul>
					<li>
						<Link to='/'>Home</Link>
					</li>
					<li>
						<Link to='/todo'>Todo</Link>
					</li>
					<li>
						<Link to='/dashboard'>Dashboard</Link>
					</li>
					<li>
						<Link to='/dashboard/profile'>Profile</Link>
					</li>
				</ul>
			</nav>
			<RenderRouter routes={routes} />
		</BrowserRouter>
	</StrictMode>
);

// createRoot(document.getElementById('root')!).render(
// 	<StrictMode>
// 		<App />
// 	</StrictMode>
// );
