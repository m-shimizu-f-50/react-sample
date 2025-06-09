import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { Todo } from './Todo';
import { Home } from './Home';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement!);
root.render(
	<StrictMode>
		<BrowserRouter>
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/todo' element={<Todo />} />
			</Routes>
		</BrowserRouter>
	</StrictMode>
);

// createRoot(document.getElementById('root')!).render(
// 	<StrictMode>
// 		<App />
// 	</StrictMode>
// );
