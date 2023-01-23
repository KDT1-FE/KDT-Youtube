import { useEffect, useState } from 'react';
import { getVideoDetail } from 'src/api/requests';

function VideoSearchThum({ videoId }) {
  const ytDurationFormat = require('youtube-duration-format');
  const [videoData, setVideoData] = useState();

  useEffect(() => {
    const getData = async () => {
      const videoDataRes = await getVideoDetail(videoId);
      setVideoData(videoDataRes);
    };

    getData();
  }, [videoId]);

  return (
    <>
      {videoData && (
        <div className="search-thumbnails">
          <img src={videoData.snippet.thumbnails.high.url} alt={videoData.snippet.title + '-thumbnail'} />
          <p>{ytDurationFormat(videoData.contentDetails.duration)}</p>
        </div>
      )}
    </>
  );
}

export default VideoSearchThum;
