import React, { useEffect, useState } from 'react';
import Comment from './Comment';
import { commentThreads } from '../../../api/axios';

type Props = {};

const videoId = 'CIrR0-nkPfI';

const Commentlist = (Props: Props) => {
  const [commentList, setCommentList] = useState([]);

  const data = {
    part: 'replies,snippet',
    maxResults: 3,
    order: 'relevance',
  };

  useEffect(() => {
    const viewComments = async () => {
      setCommentList([]);
      try {
        const res = await commentThreads(videoId, data);
        setCommentList(res.data.items);
        console.log(res.data.items);
      } catch (error) {
        if (error instanceof Error) alert('조회 실패:' + error.message);
        else alert('조회실패');
      }
    };
    viewComments();
  }, []);

  return (
    <div>
      {Array.from(commentList).map((comment, index) => (
        <Comment key={index} comment={comment} />
      ))}
    </div>
  );
};

export default Commentlist;
