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

const iconList = {
  list1: [
    { icon: <RiHome5Fill />, title: '홈' },
    { icon: <BsCollectionPlay />, title: '구독' },
    { icon: <MdOutlineVideoLibrary />, title: '보관함' },
  ],
  list2: [
    { icon: <MdOutlineRestore />, title: '시청기록' },
    { icon: <AiOutlinePlaySquare />, title: '내 동영상' },
    { icon: <MdOutlineQueryBuilder />, title: '나중에 볼 동영상' },
    { icon: <MdKeyboardArrowDown />, title: '더보기' },
  ],
  list3: [
    { icon: <HiOutlineFire />, title: '인기 급상승' },
    { icon: <IoMusicalNoteOutline />, title: '음악' },
    { icon: <BiMovie />, title: '영화' },
    { icon: <MdOutlineRecordVoiceOver />, title: '실시간' },
    { icon: <IoGameControllerOutline />, title: '게임' },
    { icon: <CiTrophy />, title: '스포츠' },
    { icon: <BsLightbulb />, title: '학습' },
  ],
  list4: [
    { icon: <img src={youtube} alt="" />, title: 'YouTube Premium' },
    { icon: <img src={youtube_music} alt="" />, title: 'YouTube Music' },
    { icon: <img src={youtube_kids} alt="" />, title: 'YouTube Kids' },
    { icon: <img src={youtube_tv} alt="" />, title: 'YouTube TV' },
  ],
  list5: [
    { icon: <AiOutlineSetting />, title: '설정' },
    { icon: <BsFlag />, title: '신고 기록' },
    { icon: <IoHelpCircleOutline />, title: '고객센터' },
    { icon: <BsInfoSquare />, title: '의견 보내기' },
  ],
};

const linkList = [
  { title: '정보' },
  { title: '보도자료' },
  { title: '저작권' },
  { title: '문의하기' },
  { title: '크리에이터' },
  { title: '광고 개발자' },
  { title: '약관' },
  { title: '개인정보처리방침' },
  { title: '정책 및 안전' },
  { title: 'YouTube 작동의 원리' },
  { title: '새로운 기능 테스트하기' },
];

export default function SidebarLarge() {
  return (
    <nav className={styles.largeNav}>
      <ol>
        {iconList.list1.map((list) => (
          <button key={list.title} className={list.title === '홈' ? styles.homeIcon : null}>
            <span className={styles.icon}>{list.icon}</span>
            {list.title}
          </button>
        ))}
      </ol>
      <ol>
        {iconList.list2.map((list) => (
          <button key={list.title}>
            <span className={styles.icon}>{list.icon}</span>
            {list.title}
          </button>
        ))}
      </ol>
      <ol>
        <strong className={styles.olTitle}>탐색</strong>
        {iconList.list3.map((list) => (
          <button key={list.title}>
            <span className={styles.icon}>{list.icon}</span>
            {list.title}
          </button>
        ))}
      </ol>
      <ol>
        <strong className={styles.olTitle}>YouTube 더보기</strong>
        {iconList.list4.map((list) => (
          <button key={list.title}>
            <span className={styles.img}>{list.icon}</span>
            {list.title}
          </button>
        ))}
      </ol>
      <ol>
        {iconList.list5.map((list) => (
          <button key={list.title}>
            <span className={styles.icon}>{list.icon}</span>
            {list.title}
          </button>
        ))}
      </ol>
      <ul className={styles.navLink}>
        {linkList.map((list) => (
          <a key={list.title} href="#!">
            {list.title}
          </a>
        ))}
      </ul>

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
