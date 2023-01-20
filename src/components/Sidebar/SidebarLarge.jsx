import React from 'react';
import styles from './Sidebar.module.scss';

// icons
import { RiHome5Fill } from 'react-icons/ri';
import { BsCollectionPlay, BsLightbulb, BsFlag, BsInfoSquare } from 'react-icons/bs';
import {
  MdOutlineRestore,
  MdOutlineQueryBuilder,
  MdOutlineVideoLibrary,
  MdKeyboardArrowDown,
  MdOutlineRecordVoiceOver,
} from 'react-icons/md';
import { AiOutlinePlaySquare, AiOutlineSetting } from 'react-icons/ai';
import { HiOutlineFire } from 'react-icons/hi2';
import { IoMusicalNoteOutline, IoGameControllerOutline, IoHelpCircleOutline } from 'react-icons/io5';
import { BiMovie } from 'react-icons/bi';
import { CiTrophy } from 'react-icons/ci';
import youtube from './assets/youtube.png';
import youtube_kids from './assets/youtube_kids.png';
import youtube_music from './assets/youtube_music.svg';
import youtube_tv from './assets/youtube_tv.png';

export default function SidebarLarge() {
  return (
    <nav className={styles.largeNav}>
      <ul>
        <button className={styles.homeBtn}>
          <RiHome5Fill className={styles.sidebarIcon} size="22" />홈
        </button>
        <button>
          <BsCollectionPlay className={styles.sidebarIcon} size="22" />
          구독
        </button>
        <button>
          <MdOutlineVideoLibrary className={styles.sidebarIcon} size="22" />
          보관함
        </button>
      </ul>
      <ul>
        <button>
          <MdOutlineRestore className={styles.sidebarIcon} size="22" />
          시청기록
        </button>
        <button>
          <AiOutlinePlaySquare className={styles.sidebarIcon} size="22" />내 동영상
        </button>
        <button>
          <MdOutlineQueryBuilder className={styles.sidebarIcon} size="22" />
          나중에 볼 동영상
        </button>
        <button>
          <MdKeyboardArrowDown className={styles.sidebarIcon} size="22" />
          더보기
        </button>
      </ul>
      <ul>
        <strong className={styles.sidebarUlTitle}>탐색</strong>
        <button>
          <HiOutlineFire className={styles.sidebarIcon} size="22" />
          인기 급상승
        </button>
        <button>
          <IoMusicalNoteOutline className={styles.sidebarIcon} size="22" />
          음악
        </button>
        <button>
          <BiMovie className={styles.sidebarIcon} size="22" />
          영화
        </button>
        <button>
          <MdOutlineRecordVoiceOver className={styles.sidebarIcon} size="22" />
          실시간
        </button>
        <button>
          <IoGameControllerOutline className={styles.sidebarIcon} size="22" />
          게임
        </button>
        <button>
          <CiTrophy className={styles.sidebarIcon} size="22" />
          스포츠
        </button>
        <button>
          <BsLightbulb className={styles.sidebarIcon} size="22" />
          학습
        </button>
      </ul>
      <ul className={styles.sidebarViewmore}>
        <strong className={styles.sidebarUlTitle}>YouTube 더보기</strong>
        <button>
          <img src={youtube} alt="" />
          YouTube Premium
        </button>
        <button>
          <img src={youtube_music} alt="" />
          YouTube Music
        </button>
        <button>
          <img src={youtube_kids} alt="" />
          YouTube Kids
        </button>
        <button>
          <img src={youtube_tv} alt="" />
          YouTube TV
        </button>
      </ul>
      <ul>
        <button>
          <AiOutlineSetting className={styles.sidebarIcon} size="22" />
          설정
        </button>
        <button>
          <BsFlag className={styles.sidebarIcon} size="22" />
          신고 기록
        </button>
        <button>
          <IoHelpCircleOutline className={styles.sidebarIcon} size="22" />
          고객센터
        </button>
        <button>
          <BsInfoSquare className={styles.sidebarIcon} size="22" />
          의견 보내기
        </button>
      </ul>
      <div className={styles.navAnchor}>
        <div>
          <a href="#!">정보</a>
          <a href="#!">보도자료</a>
          <a href="#!">저작권</a>
          <a href="#!">문의하기</a>
          <a href="#!">크리에이터</a>
          <a href="#!">광고 개발자</a>
        </div>
        <div>
          <a href="#!">약관</a>
          <a href="#!">개인정보처리방침</a>
          <a href="#!">정책 및 안전</a>
          <a href="#!">YouTube 작동의 원리</a>
          <a href="#!">새로운 기능 테스트하기</a>
        </div>
      </div>
      <footer>
        © 2023 Google LLC, Sundar Pichai, 1600 Amphitheatre Parkway, Mountain View CA 94043, USA, 0807-882-594 (무료),
        yt-support-solutions-kr@google.com, 호스팅: Google LLC, <a href="#!">사업자정보</a>,{' '}
        <a href="#!">불법촬영물 신고</a> <br />
        크리에이터들이 유튜브 상에 게시, 태그 또는 추천한 상품들은 판매자들의 약관에 따라 판매됩니다. 유튜브는 이러한
        제품들을 판매하지 않으며, 그에 대한 책임을 지지 않습니다.
      </footer>
    </nav>
  );
}
