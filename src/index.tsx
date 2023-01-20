import ReactDOM from 'react-dom/client';
import 'reset-css';
import './index.scss';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App';
import NotFound from './pages/NotFound/NotFound';
import Videos from './pages/Videos/Videos';
import VideoDetail from './pages/VideoDetail/VideoDetail';
import VideoSearch from './pages/VideoSearch/VideoSearch';
import ShowcontextProvider from './contexts/store';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <NotFound />,
    children: [
      { index: true, element: <Videos /> },
      { path: 'videos', element: <Videos /> },
      { path: 'videos/:keyword', element: <Videos /> },
      { path: 'videos/watch/:videoId', element: <VideoDetail /> },
      { path: 'videos/search/:keyword', element: <VideoSearch /> },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <ShowcontextProvider>
    <RouterProvider router={router} />
  </ShowcontextProvider>,
);
