import React from 'react';
import { useQuery } from '@tanstack/react-query';
import VideoCard from '../../components/VideoCard/VideoCard';
import { useParams } from 'react-router-dom';
import { search } from '../../api/FakeYoutubeApi';
import NoResultImage from '../../assets/images/no-result.png';
import styles from './VideoSearch.module.scss';
// import { searchByKeyword } from '../../api/youtube';

export default function VideoSearch() {
  const { keyword } = useParams();
  const { data: videos } = useQuery(
    ['videos', keyword],
    () => search(keyword),
    { enabled: !!keyword }, // keyword가 존재할 경우 이 쿼리가 실행
  );

  return (
    <section className={styles.searchPage}>
      {!keyword && (
        <div className={styles.noResult}>
          <img className={styles.img} src={NoResultImage} alt="No result" />
          <div className={styles.info}>
            <h1 className={styles.title}>검색결과가 없습니다</h1>
            <p>다른 검색어를 시도해 보거나 검색 필터를 삭제하세요.</p>
          </div>
        </div>
      )}
      {videos && (
        <ul className={styles.videos}>
          {videos.map((video) => (
            <VideoCard key={video.id.videoId} video={video} />
          ))}
        </ul>
      )}
    </section>
  );
}
