import { useEffect, useState } from 'react';
import './VideoCard.scss';
import { FiMoreVertical } from 'react-icons/fi';
import axios from 'axios';
import { viewCountConverter } from 'src/util/viewCountConverter';
import { uploadedDate } from 'src/util/uploadedDate';
import { Link } from 'react-router-dom';

export default function VideoCard() {
  const ytDurationFormat = require('youtube-duration-format');
  const [datas, setDatas] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const res = (await axios.get('./videos/popular.json')).data.items;
      console.log('res', res);
      setDatas(res);
    };
    getData();
  }, []);

  console.log('datas', datas);

  return (
    <>
      {datas.map((data) => (
        <li className="videoCard" key={data.id}>
          <Link to={`/videos/watch/${data.id}`} state={{ channelId: data.snippet.channelId }}>
            <div className="videoPreview">
              <img src={data.snippet.thumbnails.medium.url} alt={data.snippet.title} />
              <span className="videoDuration">{ytDurationFormat(data.contentDetails.duration)}</span>
            </div>
            <div className="videoInfoContainer">
              <div className="avatarContainer">
                <img src={data.snippet.thumbnails.medium.url} alt={data.snippet.title} />
              </div>
              <div className="videoTextContainer">
                <h3>{data.snippet.title}</h3>
                <div className="videoInfo">
                  <div className="channelName">{data.snippet.channelTitle}</div>
                  <div className="metaTag">
                    <span>조회수 {viewCountConverter(data.statistics.likeCount)}회</span>
                    <span className="dot_separator"> • </span>
                    <span>{uploadedDate(data.snippet.publishedAt)}</span>
                  </div>
                </div>
              </div>
              <div className="dotContainer">
                <FiMoreVertical />
              </div>
            </div>
          </Link>
        </li>
      ))}
    </>
  );
}
