import { useEffect, useState } from 'react';
import { getChannelInfo, getVideoDetail } from 'src/api/requests';
import { uploadedDate } from 'src/util/uploadedDate';
import { viewCountConverter } from 'src/util/viewCountConverter';

function VideoSearchInfo({ videoId, channelId }) {
  const [videoData, setVideoData] = useState();
  const [channelData, setChannelData] = useState();

  useEffect(() => {
      const getData = async () => {
        const videoDataRes = await getVideoDetail(videoId);
        setVideoData(videoDataRes);

        const channelDataRes = await getChannelInfo(channelId);
        setChannelData(channelDataRes.snippet.thumbnails.default.url);
      };
      getData();
  },[videoId , channelId]);

  console.log(videoData);

  return (
    <>
      {videoData && channelData ? (
        <div className="search-video-info">
          <p className="search-video-title">{videoData.snippet.title}</p>
          <p className="search-video-view">
            조회수 {viewCountConverter(videoData.statistics.viewCount)}회<span style={{ margin: '0 5px' }}>·</span>
            {uploadedDate(videoData.snippet.publishedAt)}
          </p>
          <p className="search-channel-title">
            <span>
              <img src={channelData} alt={videoData.snippet.channelTitle + '-thumbnail'} />
            </span>
            <span>{videoData.snippet.channelTitle}</span>
          </p>
          <div>
            <p className="search-video-description">{videoData.snippet.description}</p>
          </div>
        </div>
      ) : null}
    </>
  );
}

export default VideoSearchInfo;