import React, { useState, useEffect } from 'react';
import { useMediaQuery } from 'react-responsive';

function useFriendStatus(testRef: any) {
  const [isCount, setCount] = useState(null);
  // const isMobile = useMediaQuery({ query: '(max-width: 767px)' });
  // const isTablet = useMediaQuery({ query: '(min-width: 768px) and (max-width: 1023px)' });
  // const isDesktop = useMediaQuery({ query: '(min-width: 1024px)' });

  useEffect(() => {
    // 타겟 엘리먼트의 너비를 가져온다

    return () => {
      // cleanup
    };
  }, []);

  return isCount;
}
