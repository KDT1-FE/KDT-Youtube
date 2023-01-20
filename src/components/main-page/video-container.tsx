import React, { useEffect, useState } from 'react';
import Videos from './videos';
import { search, videoInfo, channelInfo, relatedToVideo, commentThreads } from '../../api/axios';
import { searchResult } from './search';

type Props = {};

const videoContainer = (props: Props) => {
  const [searchData, setSearchData] = useState([]);

  // 페이지 로드시 검색결과를 받아온다 , 자동 추천 없으므로 임의
  useEffect(() => {
    // 렌더링 시작
    console.time('rendering');
    const searchResult = async () => {
      let toggle = false;
      const response: any = await search(`리액트/popular`).catch((err) => {
        toggle = err ? true : false;
      });
      if (toggle) {
        console.log('error');
        setSearchData([]);
      } else {
        console.log('success');
        setSearchData(response.data.items);
        console.timeEnd('rendering');
      }
    };
    searchResult();
  }, []);

  return <Videos rowArray={searchData} />;
};

export default videoContainer;
