import { useRoutes } from 'react-router-dom';
import type { RouteObject } from 'react-router-dom';

type RenderRouterProps = {
	routes: RouteObject[];
};

export const RenderRouter: React.FC<RenderRouterProps> = ({ routes }) => {
	const element = useRoutes(routes);
	return element;
};
