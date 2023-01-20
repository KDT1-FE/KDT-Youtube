/* 
검색어로 인한 비디오 데이터: 
/search?part=snippet&maxResults=10&q={검색어}
특정 비디오 데이터 : /videos?part=snippet&part=contentDetails&part=player&part=statistics&id={videoId}
특정 채널 정보 데이터: 
/channels?part=snippet&part=statistics&part=contentDetails&id={channelId}
댓글 데이터: 
/commentThreads?part=snippet&videoId={videoId}
관련 비디오 데이터: 
/search?part=snippet&maxResults=10&relatedToVideoId=${videoId}&type=video 
*/
import axios from './axios';

// 검색어로 인한 비디오 데이터
export const getSearchData = async (title: string) => {
  try {
    const response = await axios.get(`/search?part=snippet&maxResults=10&q=${title}`);
    return response;
  } catch (error: any) {
    console.error(error.message);
  }
};

// 특정 비디오 데이터
export const getVideoDetail = async (videoId: string) => {
  try {
    const response = await axios.get(
      `/videos?part=snippet&part=contentDetails&part=player&part=statistics&id=${videoId}`,
    );
    const data = response.data.items[0];
    console.log('res');
    return data;
  } catch (error: any) {
    console.error(error.message);
  }
};

// 특정 채널 정보 데이터
export const getChannelInfo = async (channelId: string) => {
  try {
    const response = await axios.get(`/channels?part=snippet&part=statistics&part=contentDetails&id=${channelId}`);
    const data = response.data.items[0];
    return data;
  } catch (error: any) {
    console.error(error.message);
  }
};

// 댓글 데이터
export const getComment = async (videoId: string) => {
  try {
    const response = await axios.get(`/commentThreads?part=snippet&videoId=${videoId}`);
    const data = response.data.items;
    return data;
  } catch (error: any) {
    console.error(error.message);
  }
};

// 관련 비디오 데이터
export const getRelationVideo = async (videoId: string) => {
  try {
    const response = await axios.get(`/search?part=snippet&maxResults=10&relatedToVideoId=${videoId}&type=video`);
    const data = response.data.items;
    return data;
  } catch (error: any) {
    console.error(error.message);
  }
};
