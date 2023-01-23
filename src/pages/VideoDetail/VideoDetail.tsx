import React, { useEffect, useState } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import { getComment, getVideoDetail } from 'src/api/requests';
import { getRelationVideo, getChannelInfo } from './../../api/requests';
import './VideoDetail.scss';
import VideoInfo from 'src/components/VideoInfo/VideoInfo';
import ChannelInfo from 'src/components/ChannelInfo/ChannelInfo';
import VideoComments from './../../components/VideoComments/VideoComments';
import RelatedVideos from 'src/components/RelatedVideos/RelatedVideos';

export default function VideoDetail() {
  // 비디오 아이디, 채널 아이디
  const { videoId } = useParams<string>();
  const { state } = useLocation();
  const channelId: string = state.channelId;

  const [videoLoading, setVideoLoading] = useState(true);
  const [channelLoading, setChannelLoading] = useState(true);
  const [commentLoading, setCommentLoading] = useState(true);
  const [relatedLoading, setRelatedLoading] = useState(true);
  const [relatedDetailLoading, setRelatedDetailLoading] = useState(true);

  // 일일할당량때문에 localStorage 에 없을 경우 저장
  useEffect(() => {
    if (!JSON.parse(localStorage.getItem('VideoDetail'))) {
      getVideoDetail(videoId).then((data) => {
        localStorage.setItem('VideoDetail', JSON.stringify(data));
        setVideoLoading(false);
      });
    } else {
      setVideoLoading(false);
    }

    if (!JSON.parse(localStorage.getItem('ChannelInfo'))) {
      getChannelInfo(channelId).then((data) => {
        localStorage.setItem('ChannelInfo', JSON.stringify(data));
        setChannelLoading(false);
      });
    } else {
      setChannelLoading(false);
    }

    if (!JSON.parse(localStorage.getItem('Comment'))) {
      getComment(videoId).then((data) => {
        localStorage.setItem('Comment', JSON.stringify(data));
        setCommentLoading(false);
      });
    } else {
      setCommentLoading(false);
    }

    if (!JSON.parse(localStorage.getItem('RelationVideo'))) {
      getRelationVideo(videoId).then((data) => {
        localStorage.setItem('RelationVideo', JSON.stringify(data));
        setRelatedLoading(false);
      });
    } else {
      setRelatedLoading(false);
    }
  }, [channelId, videoId]);

  // 로컬에 있는 데이터로 쓰기
  const videoData = JSON.parse(localStorage.getItem('VideoDetail'));
  const channelInfo = JSON.parse(localStorage.getItem('ChannelInfo'));
  const commentData = JSON.parse(localStorage.getItem('Comment'));
  const relationVideos = JSON.parse(localStorage.getItem('RelationVideo'));

  const commentCount = videoData && videoData.statistics.commentCount;
  const relatedId = relationVideos && relationVideos.map((video) => video.id.videoId);

  useEffect(() => {
    if (relatedId) {
      Promise.all(
        relatedId.map(async (id: string) => {
          if (!JSON.parse(localStorage.getItem(id))) {
            await getVideoDetail(id).then((data) => {
              const res = { duration: data.contentDetails.duration, viewcount: data.statistics.viewCount };
              localStorage.setItem(id, JSON.stringify(res));
            });
          }
        }),
      ).then(() => {
        setRelatedDetailLoading(false);
      });
    }
  }, [relatedId]);

  return (
    <>
      {videoLoading || channelLoading || commentLoading || relatedLoading || relatedDetailLoading ? (
        <h1>Loading...</h1>
      ) : (
        <section className="videoDetail">
          <div className="wrap">
            <div className="videoDetailLeft">
              {/* 비디오 */}
              <div id="videoWrap">
                <iframe title="video" id="player" src={`//www.youtube.com/embed/${videoId}`} allowFullScreen></iframe>
              </div>

              {/* 비디오 정보 */}
              <VideoInfo videoData={videoData} />

              {/* 채널 정보 */}
              <ChannelInfo channelInfo={channelInfo} />

              {/* 댓글 */}
              <VideoComments commentData={commentData} commentCount={commentCount} />
            </div>

            {/* 관련 동영상 */}
            <div className="videoDetailRight">
              <RelatedVideos relationVideos={relationVideos} />
            </div>
          </div>
        </section>
      )}
    </>
  );
}
