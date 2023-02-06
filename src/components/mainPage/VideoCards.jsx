import React, { useState, useEffect, useCallback } from 'react';
import axios from '../../api/axios';
import { useInView } from 'react-intersection-observer';
import VideoCard from './VideoCard';
import styles from './VideoCards.module.scss';

const VideoCards = () => {
  const [videoData, setVideoData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [listOpen, setListOpen] = useState('');
  const [page, setPage] = useState('');
  const [ref, inView] = useInView();
  const [data, setData] = useState({});

  const getVideo = useCallback(async () => {
    setLoading(true);
    await axios
      .get(
        `/videos?part=snippet,contentDetails,statistics&chart=mostPopular&maxResults=25${page}`,
        // `http://localhost:4000/file`,
      )
      .then((response) => {
        setVideoData((prev) => [...prev, ...response.data.items]);
      });
    const video = await axios.get(
      `/videos?part=snippet,contentDetails,statistics&chart=mostPopular&maxResults=25${page}`,
      //   `http://localhost:4000/file`,
    );
    setData(video.data);
    setLoading(false);
  }, [page]);

  useEffect(() => {
    getVideo();
  }, [getVideo]);

  useEffect(() => {
    if (inView && !loading) {
      setPage(`&pageToken=${data.nextPageToken}`);
    }
  }, [inView, loading]);

  if (videoData === []) {
    return <div></div>;
  }
  return (
    <div>
      <div className={styles.top}>
        {videoData.map((videoCard, index) => (
          <React.Fragment key={videoCard.id}>
            {videoData.length - 5 === index ? (
              <div ref={ref}>
                <VideoCard listOpen={listOpen} setListOpen={setListOpen} videoCard={videoCard} page={page} />
              </div>
            ) : (
              <div>
                <VideoCard listOpen={listOpen} setListOpen={setListOpen} videoCard={videoCard} page={page} />
              </div>
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default VideoCards;
