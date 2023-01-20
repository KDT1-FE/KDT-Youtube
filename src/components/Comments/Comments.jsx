import React from 'react';
import { VideoComment } from '../../api/FakeYoutubeApi';
import styles from './Comments.module.scss';
import { format, register } from 'timeago.js';
import koLocale from 'timeago.js/lib/lang/ko';
import { useQuery } from '@tanstack/react-query';
import CommentCard from '../CommentCard/CommentCard';

register('ko', koLocale);
const Comments = ({ videoId: id }) => {
  // console.log('id', id);
  const { isLoading, data: comments } = useQuery(['comments', id], () => VideoComment(id));

  if (isLoading) return;

  const { items } = comments;

  return (
    <div className={styles.CommentContainer}>
      <p>{items.length} Comments</p>
      <div className={styles.CommentBox}>
        {items.map((comment, index) => (
          <CommentCard key={index} comment={comment} />
        ))}
      </div>
    </div>
  );
};

export default Comments;
