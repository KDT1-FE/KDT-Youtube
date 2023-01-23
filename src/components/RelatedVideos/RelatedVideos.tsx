import { Link, useNavigate } from 'react-router-dom';
// import { viewCountConverter } from 'src/util/viewCountConverter';
import './RelatedVideos.scss';
import { uploadedDate } from './../../util/uploadedDate';

const RelatedVideos = ({ relationVideos }) => {
  return (
    <ul className="relatedVideos">
      {relationVideos.map((video) => (
        <VideoCard key={video.id.videoId} video={video} />
      ))}
    </ul>
  );
};

export default RelatedVideos;

const VideoCard = ({ video }) => {
  const navigate = useNavigate();
  // const ytDurationFormat = require('youtube-duration-format');

  // const videoData = JSON.parse(localStorage.getItem(video.id.videoId));

  const handleClick = (id: string, channelId: string) => {
    navigate(`/videos/watch/${id}`, { state: { channelId: channelId } });
  };

  return (
    <li key={video.id.videoId} onClick={() => handleClick(video.id.videoId, video.snippet.channelId)}>
      {/* link 연결 추가 */}
      <div className="videoWrap">
        <div className="thumbnail">
          <img src={video.snippet.thumbnails.medium.url} alt={video.snippet.title} />
          {/* <div className="duration">{<span>{ytDurationFormat(videoData.duration)}</span>}</div> */}
        </div>

        {/* 텍스트 부분 */}
        <div className="txts">
          <h3 className="title">{video.snippet.title}</h3>
          <div className="etcs">
            <Link to={`/channel/${video.snippet.channelId}`}>
              <span>{video.snippet.channelTitle}</span>
            </Link>
            <div className="etc">
              {/* <span>조회수 {viewCountConverter(videoData.viewcount)}회</span>&nbsp;<span> • </span>&nbsp; */}
              <span>{uploadedDate(video.snippet.publishedAt)}</span>
            </div>
          </div>
        </div>
      </div>
    </li>
  );
};
