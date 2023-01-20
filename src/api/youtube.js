import axios from './axios';

// 검색 api
export const searchByKeyword = async (keyword) => {
  const response = await axios.get('/search', {
    params: {
      part: 'snippet',
      maxResults: 25,
      q: keyword,
    },
  });
  return response.data.items;
};

// 채널정보 api
export const channelImage = async (id) => {
  const response = await axios.get('/channels', {
    params: {
      part: 'snippet',
      id,
    },
  });
  return response.data.items[0].snippet.thumbnails.default.url;
};

// 조회수 api
export const getViewCount = async (videoId) => {
  const response = await axios.get('/videos', {
    params: {
      part: 'snippet',
      part: 'contentDetails',
      part: 'player',
      part: 'statistics',
      id: videoId,
    },
  });
  return response.data.items[0].statistics;
};
