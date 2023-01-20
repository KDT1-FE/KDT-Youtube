import React from 'react';
import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Left from './Left';
import Middle from './Middle';
import Right from './Right';
import styles from './header.module.scss';
import { useRecoilState } from 'recoil';

type Props = {};

const Header = () => {
  const [text, setText] = useState<string>('');
  const navigate = useNavigate();
  const { keyword } = useParams();
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    navigate(`/search/${text}`);
  };

  // keyword 검색 후, 페이지 전환 시에도 해당 keyword 저장하기 위함
  useEffect(() => {
    setText(keyword || '');
  }, [keyword]);

  return (
    <header className={styles.header}>
      <Left />
      {/* handleNav={handleNav}  */}
      <Middle navgate={navigate} handleSubmit={handleSubmit} text={text} setText={setText} />

      <Right />
    </header>
  );
};

export default Header;
