import { Dispatch, SetStateAction } from 'react';
import { Link } from 'react-router-dom';
import { useAuthContext } from 'src/contexts/AuthContextProvider';
import './Sidebar.scss';
import { BsYoutube } from 'react-icons/bs';
import '../../index.scss';
import { 
  ToggleGnbBtnIcon,
  HomeBtnIcon,
  QuestBtnIcon,
  ShortsBtnIcon,
  SubscribeBtnIcon,
  OriginalsBtnIcon,
  YouTubeMusicIcon,
  StorageBoxBtnIcon,
  RecordBtnIcon,
  MyVideoBtnIcon,
  LaterVideoBtnIcon,
  OfflineVideoBtnIcon,
  PlaylistBtnIcon,
  LikeVideoIcon,
  MovieBtnIcon,
  GameBtnIcon,
  LearningBtnIcon,
  SportsBtnIcon,
  CreatorStudioIcon,
  YouTubeMusicBtnIcon,
  KidsBtnIcon,
  YouTubeTvIcon,
  SettingIcon,
  ReportRecordIcon,
  ServiceIcon,
  CommentsIcon,
} from '../Icons/icons';

interface show {
  shownav: boolean;
  setShownav: Dispatch<SetStateAction<boolean>>;
}

function Sidebar({ setShownav, shownav }: show) {
  const toggleGnbFn = () => {
    shownav ? setShownav(false) : setShownav(true);
  };

  const { user } = useAuthContext();

  return (
    <>
      <nav
        className="contents__gnb"
        style={
          shownav
            ? {
                transform: `translateX(0)`,
              }
            : null
        }
      >
        <div className="contents__gnb-header">
          <button
            className="header__gnb-btn"
            onClick={() => {
              toggleGnbFn();
            }}
          >
            menu
            <ToggleGnbBtnIcon/>
          </button>
          <Link to="/" className="header__home-logo">
            logo
            {!user && <img src="https://i.ibb.co/frTQBs7/yt-logo-rgb-dark.png" alt="youtube-logo-Dark" />}
            {user && <img src="https://ifh.cc/g/bH5qQy.png" alt="youtube-Premium-logo-Dark" />}
          </Link>
        </div>
        <ul>
          <li>
            <ul>
              <li className="check">
                <a href="/">
                  <HomeBtnIcon />
                  <span>홈</span>
                </a>
              </li>
              {user && (
                <li>
                  <a href="/">
                    <QuestBtnIcon/>
                    <span>탐색</span>
                  </a>
                </li>
              )}
              <li>
                <a href="/">
                  <ShortsBtnIcon />
                  <span>Shorts</span>
                </a>
              </li>
              <li>
                <a href="/">
                  <SubscribeBtnIcon />
                  <span>구독</span>
                </a>
              </li>
              {user && (
                <>
                  <li>
                    <a href="/">
                      <OriginalsBtnIcon />
                      <span>Originals</span>
                    </a>
                  </li>
                  <li>
                    <a href="/">
                      <YouTubeMusicIcon />
                      <span>YouTube Music</span>
                    </a>
                  </li>
                </>
              )}
            </ul>
            <ul>
              <li>
                <a href="/">
                  <StorageBoxBtnIcon />
                  <span>보관함</span>
                </a>
              </li>
              <li>
                <a href="/">
                  <RecordBtnIcon />
                  <span>시청 기록</span>
                </a>
              </li>
              <li>
                <a href="/">
                  <MyVideoBtnIcon />
                  <span>내 동영상</span>
                </a>
              </li>
              <li>
                <a href="/">
                  <LaterVideoBtnIcon />
                  <span>나중에 볼 동영상</span>
                </a>
              </li>
              {user && (
                <>
                  {' '}
                  <li>
                    <a href="/">
                      <OfflineVideoBtnIcon />
                      <span>오프라인 저장 동영상</span>
                    </a>
                  </li>
                  <li>
                    <a href="/">
                      <PlaylistBtnIcon />
                      <span>playlist</span>
                    </a>
                  </li>
                </>
              )}
              <li>
                <a href="/">
                  <LikeVideoIcon />
                  <span>좋아요 표시한 동영상</span>
                </a>
              </li>
            </ul>
          </li>
          <li>
            <ul>
              <p>탐색</p>
              <li>
                <a href="/">
                  <MovieBtnIcon />
                  <span>영화</span>
                </a>
              </li>
              <li>
                <a href="/">
                  <GameBtnIcon />
                  <span>게임</span>
                </a>
              </li>
              <li>
                <a href="/">
                  <LearningBtnIcon />
                  <span>학습</span>
                </a>
              </li>
              <li>
                <a href="/">
                  <SportsBtnIcon />
                  <span>스포츠</span>
                </a>
              </li>
            </ul>
          </li>
          <li>
            <ul>
              <p>
                <span>YOUTUBE</span> 더보기
              </p>
              {!user && (
                <li>
                  <a href="/">
                    <BsYoutube style={{ color: '#ff0000' }} />
                    YouTube Premium
                  </a>
                </li>
              )}
              <li>
                <a href="/">
                  <CreatorStudioIcon />
                  <span>크리에이터 스튜디오</span>
                </a>
              </li>
              <li>
                <a href="/">
                  <YouTubeMusicBtnIcon />
                  <span>YouTube Music</span>
                </a>
              </li>
              <li>
                <a href="/">
                  <KidsBtnIcon />
                  <span>YouTube Kids</span>
                </a>
              </li>
              <li>
                <a href="/">
                  <YouTubeTvIcon />
                  <span>YouTube TV</span>
                </a>
              </li>
            </ul>
          </li>
          <li>
            <ul>
              <li>
                <a href="/">
                  <SettingIcon />
                  <span>설정</span>
                </a>
              </li>
              <li>
                <a href="/">
                  <ReportRecordIcon />
                  <span>신고 기록</span>
                </a>
              </li>
              <li>
                <a href="/">
                  <ServiceIcon />
                  <span>고객센터</span>
                </a>
              </li>
              <li>
                <a href="/">
                  <CommentsIcon />
                  <span>의견 보내기</span>
                </a>
              </li>
            </ul>
          </li>
          <ul className="footer">
            <li>
              <a href="/">정보</a>
              <a href="/">보도자료</a>
              <a href="/">저작권</a>
              <a href="/">문의하기</a>
              <a href="/">크리에이터</a>
              <a href="/">광고</a>
              <a href="/">개발자</a>
            </li>
            <li>
              <a href="/">약관</a>
              <a href="/">개인정보처리방침</a>
              <a href="/">정책 및 안전</a>
              <a href="/">YouTube 작동의 원리</a>
              <a href="/">새로운 기능 테스트하기</a>
            </li>
            <li>
              <p>
                © 2023 Google LLC, Sundar Pichai, 1600 Amphitheatre Parkway, Mountain View CA 94043, USA, 0807-882-594
                (무료), yt-support-solutions-kr@google.com, 호스팅: Google LLC,
                <a href="/">사업자정보,</a>
                <a href="/">불법촬영물 신고</a>
              </p>
              <p>
                크리에이터들이 유튜브 상에 게시, 태그 또는 추천한 상품들은 판매자들의 약관에 따라 판매됩니다. 유튜브는
                이러한 제품들을 판매하지 않으며, 그에 대한 책임을 지지 않습니다.
              </p>
            </li>
          </ul>
        </ul>
      </nav>
      {shownav ? null : (
        <nav className="contents__mini-gnb">
          <ul>
            <li>
              <a href="/">
                <HomeBtnIcon />
                <span>홈</span>
              </a>
            </li>
            {user && (
              <li>
                <a href="/">
                  <QuestBtnIcon/>
                  <span>탐색</span>
                </a>
              </li>
            )}
            <li>
              <a href="/">
                <SportsBtnIcon />
                <span>Shorts</span>
              </a>
            </li>
            <li>
              <a href="/">
                <SubscribeBtnIcon />
                <span>구독</span>
              </a>
            </li>
            {user && (
              <>
                <li>
                  <a href="/">
                    <OriginalsBtnIcon />
                    <span>Originals</span>
                  </a>
                </li>
                <li>
                  <a href="/">
                    <YouTubeMusicBtnIcon />
                    <span>YouTube Music</span>
                  </a>
                </li>
              </>
            )}
            <li>
              <a href="/">
                <StorageBoxBtnIcon />
                <span>보관함</span>
              </a>
            </li>
            {user && (
              <li>
                <a href="/">
                  <OfflineVideoBtnIcon />
                  <span>오프라인 저장 동영상</span>
                </a>
              </li>
            )}
          </ul>
        </nav>
      )}
    </>
  );
}

export default Sidebar;
