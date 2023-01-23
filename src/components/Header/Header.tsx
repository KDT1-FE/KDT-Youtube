import { useState, Dispatch, SetStateAction, useRef } from 'react';
import { useForm } from 'react-hook-form';
import { BiUserCircle } from 'react-icons/bi';
import { MdLogout } from 'react-icons/md';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { HiBars3 } from 'react-icons/hi2';
import User from '../User/User';
import './header.scss';
import { useAuthContext } from 'src/contexts/AuthContextProvider';
import { DeleteBtnIcon, InputCloseBtnIcon, SearchBtnIcon, MicBtnicons, ShowSearchBtnIcon } from './../Icons/icons';

interface show {
  shownav: boolean;
  setShownav: Dispatch<SetStateAction<boolean>>;
}

interface input {
  inputVal: string;
}

export default function Header({ setShownav, shownav }: show) {
  const { user, login, logout } = useAuthContext();
  const navigate = useNavigate();
  const { register, handleSubmit, reset } = useForm({
    defaultValues: {
      inputVal: '',
    },
  });
  const { ref, ...rest } = register('inputVal');

  const [showInput, setShowInput] = useState<boolean>(false);
  const [showDelBtn, setShowDelBtn] = useState<boolean>(false);

  const inputEl = useRef<HTMLInputElement>();

  const onSubmit = (data: input) => {
    navigate(`videos/search/${data.inputVal}`);
    setShowDelBtn(false);
    reset();
  };

  const toggleGnbFn = () => {
    shownav ? setShownav(false) : setShownav(true);
  };
  const toggleInput = () => {
    showInput ? setShowInput(false) : setShowInput(true);
  };

  const toggleDelBtn = () => {
    if (inputEl.current.value !== '') {
      setShowDelBtn(true);
    } else {
      setShowDelBtn(false);
    }
  };

  return (
    <>
      {shownav && <div className="bg-pg"></div>}
      <header className="header">
        <div className="header__start">
          <button
            className="header__gnb-btn"
            onClick={() => {
              toggleGnbFn();
            }}
          >
            menu
            <HiBars3 />
          </button>
          <h1>
            <Link to="/" className="header__home-logo">
              logo
              {!user && <img src="https://i.ibb.co/frTQBs7/yt-logo-rgb-dark.png" alt="youtube-logo-Dark" />}
              {user && <img src="https://ifh.cc/g/bH5qQy.png" alt="youtube-Premium-logo-Dark" />}
            </Link>
          </h1>
        </div>

        <div
          className="search_form"
          style={
            showInput
              ? {
                  display: `flex`,
                }
              : null
          }
        >
          <button
            className="input-close-btn"
            onClick={() => {
              toggleInput();
            }}
          >
            <InputCloseBtnIcon />
          </button>
          <form onSubmit={handleSubmit(onSubmit)} {...rest}>
            <div className="search-input-wrap">
              <input
                type="text"
                placeholder="검색"
                {...rest}
                ref={(e) => {
                  ref(e);
                  inputEl.current = e;
                }}
                onChange={() => {
                  toggleDelBtn();
                }}
              />
              {showDelBtn && (
                <button
                  type="button"
                  className="val-del-btn"
                  onClick={() => {
                    inputEl.current.value = '';
                    toggleDelBtn();
                  }}
                >
                  검색 내용 지우기
                  <DeleteBtnIcon />
                </button>
              )}
            </div>
            <button type="submit" className="search-btn">
              검색
              <SearchBtnIcon />
            </button>
            <button type="button" className="voice-btn">
              음성인식
              <MicBtnicons/>
            </button>
          </form>
        </div>

        <div className="header__top-menu">
          <button
            className="show-search-btn"
            onClick={() => {
              toggleInput();
            }}
          >
            <ShowSearchBtnIcon />
          </button>
          {user && <User user={user} />}
          {!user && (
            <button className="login" onClick={login}>
              <BiUserCircle size="24" style={{ marginRight: '10px' }} />
              로그인
            </button>
          )}
          {user && (
            <button className="logout" onClick={logout}>
              <MdLogout size="24" title="로그아웃" />
            </button>
          )}
        </div>
      </header>
    </>
  );
}
