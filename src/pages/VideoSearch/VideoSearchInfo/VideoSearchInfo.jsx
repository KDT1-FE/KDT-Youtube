import { useEffect, useState } from 'react';
import { getChannelInfo, getVideoDetail } from 'src/api/requests';
import { uploadedDate } from 'src/util/uploadedDate';
import { viewCountConverter } from 'src/util/viewCountConverter';

function VideoSearchInfo({ videoId, channelId }) {
  const [videoData, setVideoData] = useState();
  const [cheenelData, setCheenelData] = useState();

  useEffect(() => {
    if (!videoData) {
      const getData = async () => {
        const videoDataRes = await getVideoDetail(videoId);
        setVideoData(videoDataRes);
        const channelDataRes = await getChannelInfo(channelId);
        setCheenelData(channelDataRes.snippet.thumbnails.default.url);
      };
      getData();
    }
  });

  return (
    <>
      {videoData && cheenelData ? (
        <div className="search-video-info">
          <p className="search-video-title">{videoData.snippet.title}</p>
          <p className="search-video-view">
            조회수 {viewCountConverter(videoData.statistics.viewCount)}회<span style={{ margin: '0 5px' }}>·</span>
            {uploadedDate(videoData.snippet.publishedAt)}
          </p>
          <p className="search-channel-title">
            <span>
              <img src={cheenelData} alt="" />
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

// {
//     "kind": "youtube#video",
//     "etag": "03kXNo80Le1bk73HnmEPwxBGhlA",
//     "id": "p92FMSKof4o",
//     "snippet": {
//         "publishedAt": "2023-01-10T09:00:20Z",
//         "channelId": "UCff5yzhaE5liFwrEXFESSQg",
//         "title": "이제 당분간 볼 수 없다고..? 방탄의 레전드 연말시상식 무대를 본 현역 댄서들 반응 (MIC Drop, Dionysus , IDOL)",
//         "description": "현역 프로 댄서분들과 함께 \n방탄소년단(BTS)의 레전드 연말무대를 리액션&리뷰해봤습니다!\n\n--------------------------------------------------\n\n리액션 영상 출처 : \n\nhttps://www.youtube.com/watch?v=k-0v1fNVdas\nBTS (방탄소년단) Intro: Persona + 상남자(Boy In Luv) + 작은 것들을 위한 시(Boy With Luv) + 소우주 + Dionysus @ 2019 MMA\n\nhttps://www.youtube.com/watch?v=LfgXdDaryBE\n[믿고보는MMA] ※소름주의※ 방탄소년단(BTS) - IDOL Full.ver \n\nhttps://www.youtube.com/watch?v=floMqK_yHf8\n[BANGTAN BOMB] 'MIC Drop' Special Stage (BTS focus) @MAMA - BTS (방탄소년단)\n\n\n\n\n-------------------------------------------------\n\n☞영상이 재미있으셨다면 구독 좋아요 누르는 센스!\n\n☞추천하는 영상이나 도전해봤으면 하는 것들이 있으면 '댓글'로 남겨주세요!\n\n☞전문가 패널을 모집합니다! (K-POP 분야의 댄서, 작곡가, 프로듀서 등)\n\n☞밝고 표현력이 풍부한 10대, 30대, 50대 패널을 모집하고 있습니다!\n\n\n※헤이데이 스튜디오 출연 및 문의: heyday.korea01@gmail.com\n\n#BTS #reaction #연말시상식 #kpopreaction #kpopreview",
//         "thumbnails": {
//             "default": {
//                 "url": "https://i.ytimg.com/vi/p92FMSKof4o/default.jpg",
//                 "width": 120,
//                 "height": 90
//             },
//             "medium": {
//                 "url": "https://i.ytimg.com/vi/p92FMSKof4o/mqdefault.jpg",
//                 "width": 320,
//                 "height": 180
//             },
//             "high": {
//                 "url": "https://i.ytimg.com/vi/p92FMSKof4o/hqdefault.jpg",
//                 "width": 480,
//                 "height": 360
//             },
//             "standard": {
//                 "url": "https://i.ytimg.com/vi/p92FMSKof4o/sddefault.jpg",
//                 "width": 640,
//                 "height": 480
//             },
//             "maxres": {
//                 "url": "https://i.ytimg.com/vi/p92FMSKof4o/maxresdefault.jpg",
//                 "width": 1280,
//                 "height": 720
//             }
//         },
//         "channelTitle": "헤이데이 Heyday",
//         "categoryId": "24",
//         "liveBroadcastContent": "none",
//         "defaultLanguage": "ko",
//         "localized": {
//             "title": "이제 당분간 볼 수 없다고..? 방탄의 레전드 연말시상식 무대를 본 현역 댄서들 반응 (MIC Drop, Dionysus , IDOL)",
//             "description": "현역 프로 댄서분들과 함께 \n방탄소년단(BTS)의 레전드 연말무대를 리액션&리뷰해봤습니다!\n\n--------------------------------------------------\n\n리액션 영상 출처 : \n\nhttps://www.youtube.com/watch?v=k-0v1fNVdas\nBTS (방탄소년단) Intro: Persona + 상남자(Boy In Luv) + 작은 것들을 위한 시(Boy With Luv) + 소우주 + Dionysus @ 2019 MMA\n\nhttps://www.youtube.com/watch?v=LfgXdDaryBE\n[믿고보는MMA] ※소름주의※ 방탄소년단(BTS) - IDOL Full.ver \n\nhttps://www.youtube.com/watch?v=floMqK_yHf8\n[BANGTAN BOMB] 'MIC Drop' Special Stage (BTS focus) @MAMA - BTS (방탄소년단)\n\n\n\n\n-------------------------------------------------\n\n☞영상이 재미있으셨다면 구독 좋아요 누르는 센스!\n\n☞추천하는 영상이나 도전해봤으면 하는 것들이 있으면 '댓글'로 남겨주세요!\n\n☞전문가 패널을 모집합니다! (K-POP 분야의 댄서, 작곡가, 프로듀서 등)\n\n☞밝고 표현력이 풍부한 10대, 30대, 50대 패널을 모집하고 있습니다!\n\n\n※헤이데이 스튜디오 출연 및 문의: heyday.korea01@gmail.com\n\n#BTS #reaction #연말시상식 #kpopreaction #kpopreview"
//         },
//         "defaultAudioLanguage": "ko"
//     },
//     "contentDetails": {
//         "duration": "PT11M33S",
//         "dimension": "2d",
//         "definition": "hd",
//         "caption": "false",
//         "licensedContent": true,
//         "contentRating": {},
//         "projection": "rectangular"
//     },
//     "statistics": {
//         "viewCount": "135384",
//         "likeCount": "5759",
//         "favoriteCount": "0",
//         "commentCount": "106"
//     },
//     "player": {
//         "embedHtml": "<iframe width=\"480\" height=\"270\" src=\"//www.youtube.com/embed/p92FMSKof4o\" frameborder=\"0\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share\" allowfullscreen></iframe>"
//     }
// }
