import React, { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { viewCountConverter } from 'src/util/viewCountConverter';
import './RelatedVideos.scss';
import { getVideoDetail } from 'src/api/requests';
import { uploadedDate } from './../../util/uploadedDate';

interface IRes {
  duration: string;
  viewcount: string;
}

const RelatedVideos = ({ relationVideos }) => {
  const navigate = useNavigate();
  const ytDurationFormat = require('youtube-duration-format');

  const handleClick = (id: string, channelId: string) => {
    navigate(`/videos/watch/${id}`, { state: { channelId: channelId } });
  };

  const VideoCard = ({ video }) => {
    useEffect(() => {
      if (!JSON.parse(localStorage.getItem(video.id.videoId))) {
        getVideoDetail(video.id.videoId).then((data) => {
          const res: IRes = { duration: data.contentDetails.duration, viewcount: data.statistics.viewCount };
          localStorage.setItem(video.id.videoId, JSON.stringify(res));
        });
      }
    }, [video.id.videoId]);

    const videoData: IRes = JSON.parse(localStorage.getItem(video.id.videoId));

    return (
      <li key={video.id.videoId} onClick={() => handleClick(video.id.videoId, video.snippet.channelId)}>
        {/* link 연결 추가 */}
        <div className="videoWrap">
          <div className="thumbnail">
            <img src={video.snippet.thumbnails.medium.url} alt={video.snippet.title} />
            <div className="duration">{<span>{ytDurationFormat(videoData.duration)}</span>}</div>
          </div>

          {/* 텍스트 부분 */}
          <div className="txts">
            <h3 className="title">{video.snippet.title}</h3>
            <div className="etcs">
              <Link to={`/channel/${video.snippet.channelId}`}>
                <span>{video.snippet.channelTitle}</span>
              </Link>
              <div className="etc">
                <span>조회수 {viewCountConverter(videoData.viewcount)}회</span>&nbsp;<span> • </span>&nbsp;
                <span>{uploadedDate(video.snippet.publishedAt)}</span>
              </div>
            </div>
          </div>
        </div>
      </li>
    );
  };

  return (
    <ul className="relatedVideos">
      {relationVideos.map((video) => (
        <VideoCard key={video.id.videoId} video={video} />
      ))}
    </ul>
  );
};

export default RelatedVideos;
