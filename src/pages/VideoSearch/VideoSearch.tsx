import { useEffect, useState, useContext } from 'react';
import { useParams, Link } from 'react-router-dom';
import { getSearchData } from 'src/api/requests';
import { ShowContext } from 'src/contexts/store';
import './VideoSearch.scss';
import VideoSearchInfo from './VideoSearchInfo/VideoSearchInfo';
import VideoSearchThum from './VideoSearchThum/VideoSearchThum';

function VideoSearch() {
  const [shownav] = useContext(ShowContext);
  const [data, setData] = useState<any>([]);
  const { keyword } = useParams();

  useEffect(() => {
    const getData = async () => {
      const res = await getSearchData(keyword);
      setData(res.data.items);
    };
    getData();
  }, [keyword]);

  return (
    <div className="search-container" nav-check={shownav ? 'show' : 'none'}>
      <div className="search-wrap">
        {data.map((item: any, index: number) => {
          return (
            <Link to={`/videos/watch/${item.id.videoId}`} key={index} state={{ channelId: item.snippet.channelId }}>
              <div className="search-video-list">
                <VideoSearchThum videoId={item.id.videoId} />
                <VideoSearchInfo videoId={item.id.videoId} channelId={item.snippet.channelId} />
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}

export default VideoSearch;
