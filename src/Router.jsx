import { createBrowserRouter } from 'react-router-dom';
import App from './App';
import NotFound from './pages/NotFound';
import Videos from './pages/Videos';
import VideoDetail from './pages/VideoDetail/VideoDetail';
import VideoSearch from './pages/VideoSearch/VideoSearch';

//라우터 구조
//<App>
//	/ 👉 <Videos>
//	/watch 👉 <Videos>
//	/watch/id 👉 <VideoDetail></VideoDetail> : 비디오 상세페이지
//  /results 👉 <VideoSearch>
//	/results/query 👉 <VideoSearch> : 검색페이지

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <NotFound />,
    children: [
      { index: true, element: <Videos /> },
      { path: 'watch', element: <Videos /> },
      { path: 'watch/:videoId', element: <VideoDetail /> },
      { path: 'results', element: <VideoSearch /> },
      { path: 'results/:keyword', element: <VideoSearch /> },
    ],
  },
]);

export default router;
