import React from 'react';
import { BiLike, BiDislike } from 'react-icons/bi';
import { RiShareForwardLine } from 'react-icons/ri';
import { CgPlayListAdd } from 'react-icons/cg';
import { RiFlagLine } from 'react-icons/ri';
import './VideoInfo.scss';
import { viewCountConverter } from './../../util/viewCountConverter';
import { uploadedDate } from 'src/util/uploadedDate';

const VideoInfo = ({ videoData }) => {
  return (
    <div className="videoInfo">
      <div className="infoTxts">
        <ul className="tags">
          {videoData.snippet.tags &&
            videoData.snippet.tags.slice(0, 5).map((tag: string, index: number) => <li key={index}>#{tag}</li>)}
        </ul>
        <h2 className="title">{videoData.snippet.localized.title}</h2>
        <p className="etc">
          <span>조회수 {viewCountConverter(videoData.statistics.viewCount)}회 •</span>
          <span> {uploadedDate(videoData.snippet.publishedAt)}</span>
        </p>
      </div>
      <div className="infoBtns">
        {/* 버튼들 */}
        <button>
          <BiLike size={20} />
          <span>{viewCountConverter(videoData.statistics.likeCount)}</span>
        </button>
        <button>
          <BiDislike size={20} />
        </button>
        <button>
          <RiShareForwardLine size={20} />
          <span>SHARE</span>
        </button>
        <button>
          <CgPlayListAdd size={20} />
          <span>SAVE</span>
        </button>
        <button>
          <RiFlagLine size={20} />
        </button>
      </div>
    </div>
  );
};

export default VideoInfo;
