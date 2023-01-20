import axios from 'axios';

export const instance = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
  params: {
    key: import.meta.env.VITE_API_KEY,
  },
});

/**
 * 검색 결과 10개 반환
 * @param keyword 검색어
 * @param data 상세 옵션
 * @returns
 */
export const search = (keyword: string, data: object = {}) => {
  const sending = {
    part: 'snippet',
    maxResults: 10,
    q: keyword,
  };
  return instance.get(`/search`, { params: { ...sending, ...data } });
};

/**
 * 영상 아이디로 영상 정보 반환
 * @param videoId
 * @param data
 * @returns
 */
export const videoInfo = (videoId: string, data: object = {}) => {
  const sending = {
    part: 'snippet,contentDetails,player,statistics',
    id: videoId,
  };
  return instance.get(`/videos`, { params: { ...sending, ...data } });
};

/**
 * 채널 아이디로 채널 정보 반환
 * @param channelId
 * @param data
 * @returns
 */
export const channelInfo = (channelId: string, data: object = {}) => {
  const sending = {
    part: 'snippet,statistics,contentDetails',
    id: channelId,
  };
  return instance.get(`/channels`, { params: { ...sending, ...data } });
};

/**
 * 관련 영상 10개 반환(기본값)
 * @param videoId
 * @param data
 * @returns
 */
export const relatedToVideo = (videoId: string, data: object = {}) => {
  const sending = {
    part: 'snippet',
    relatedToVideoId: videoId,
    maxResults: 10,
    type: 'video',
  };
  return instance.get(`/search`, { params: { ...sending, ...data } });
};

/**
 * 댓글창
 * @param videoId
 * @param data
 * @returns
 */
export const commentThreads = (videoId: string, data: object = {}) => {
  const sending = {
    part: 'snippet',
    videoId: videoId,
    maxResults: 10,
  };
  return instance.get(`/commentThreads`, { params: { ...sending, ...data } });
};
