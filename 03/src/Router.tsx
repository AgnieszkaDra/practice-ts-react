import { createBrowserRouter } from 'react-router-dom';
import { Home } from './pages';
import Main from './pages/Main/Main';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
    children: [
			{ index: true, element: <Main /> },
    ]
  },
]);

export default router;