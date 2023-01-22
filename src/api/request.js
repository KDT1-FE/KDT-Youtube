import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://youtube.googleapis.com/youtube/v3',
  params: {
    key: import.meta.env.VITE_YOUTUBE_API_KEY,
  },
});

export const getMostPopularVideos = async () => {
  const response = await instance.get('/videos', {
    params: {
      part: 'snippet',
      chart: 'mostPopular',
      maxResults: '25',
    },
  });
  return response.data.items;
};

export const getRelatedVideos = async (videoId) => {
  const response = await instance.get('/search', {
    params: {
      part: 'snippet',
      maxResults: '11',
      relatedToVideoId: videoId,
      type: 'video',
    },
  });
  return response.data.items;
};

export const getSearchVideos = async (query, nextPageToken) => {
  const response = await instance.get('/search', {
    params: {
      part: 'snippet',
      maxResults: '16',
      q: query,
      type: 'video',
      pageToken: nextPageToken && nextPageToken,
    },
  });
  return response.data;
};

export const getViewCount = async (videoId) => {
  const response = await instance.get('/videos', {
    params: {
      part: 'snippet',
      part: 'contentDetails',
      part: 'player',
      part: 'statistics',
      id: videoId,
    },
  });
  return response.data.items[0].statistics.viewCount;
};

export const getVideoDuration = async (videoId) => {
  const response = await instance.get('/videos', {
    params: {
      part: 'snippet',
      part: 'contentDetails',
      id: videoId,
    },
  });
  return response.data.items[0].contentDetails.duration;
};

export const getChannelImg = async (channelId) => {
  const response = await instance.get('/channels', {
    params: {
      part: 'snippet',
      id: channelId,
    },
  });
  return response.data.items[0].snippet.thumbnails.default.url;
};

export const getChannelData = async (channelId) => {
  const response = await instance.get('/channels', {
    params: {
      part: 'snippet',
      id: channelId,
    },
  });
  return response.data.items[0].snippet;
};

export const getSubscriberInfo = async (channelId) => {
  const response = await instance.get('/channels', {
    params: {
      part: 'statistics',
      id: channelId,
    },
  });
  return response.data.items[0].statistics.subscriberCount;
};

export const getPlayListId = async (channelId) => {
  const response = await instance.get('/playlists', {
    params: {
      part: 'snippet',
      part: 'contentDetails',
      channelId: channelId,
    },
  });
  return response.data.items[0].id;
};

export const getPlayListItems = async (playListId) => {
  const response = await instance
    .get('/playlistItems', {
      params: {
        part: 'snippet',
        playlistId: playListId,
      },
    })
    .catch((error) => console.log(error));
  return response.data.items;
};

export const getComments = async (videoId) => {
  const response = await instance.get('/commentThreads', {
    params: {
      part: 'snippet',
      videoId: videoId,
    },
  });
  // console.log(response.data.items);
  return response.data.items;
};
