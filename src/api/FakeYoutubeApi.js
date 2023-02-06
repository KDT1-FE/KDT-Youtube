import axios from 'axios';

export async function search() {
  return axios.get(`/data/search.json`).then((res) => res.data.items);
}

// 채널정보
export async function channels() {
  return axios.get(`/data/channel.json`).then((res) => res.data.items[0].snippet.thumbnails.default.url);
}

// 조회수,좋아요 정보
export async function videoInfo() {
  return axios.get(`/data/hyewonTest.json`).then((res) => res.data.items[0].statistics);
}

// 동영상 재생 정보
export async function contentDetails() {
  return axios.get(`/data/hyewonTest.json`).then((res) => res.data.items[0].contentDetails);
}

export async function VideoComment() {
  return axios.get(`/data/VideoComment.json`).then((res) => res.data);
}
export async function videoDataInfo() {
  return axios.get(`/data/hyewonTest.json`).then((res) => res.data.items[0]);
}

export async function relatedVideo() {
  return axios.get(`/data/relatedVideoList.json`).then((res) => res.data.items);
}

// export async function videoDetailInfo() {
//   return axios.get(`/data/videoInfo.json`).then((res) => res.data.items);
// }
// export async function videoInfoData(videoId) {
//   return axios.get(`/data/videoInfo.json`).then((res) => {
//     res.data.items.map((item) => {
//       if(item.id === videoId){
//         return
//       }
//     })
//   })
// }
