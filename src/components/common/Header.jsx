import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { logoutUser } from 'store/userSlice';

import { ReactComponent as HeaderLogo } from 'img/HeaderLogo.svg';
import { HeaderStyle } from 'style/commonStyle/HeaderStyle';
import MobileHeader from './MobileHeader';

const Header = () => {
  if (window.location.pathname === '/keyword') return null;
  const USER = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const [scroll, setScroll] = useState(0);
  const [mode, setMode] = useState(window.innerWidth);
  const [distance, setDistance] = useState(true);

  // 스크롤 위치에 따른 position 변경
  const handleScroll = () => {
    if (scroll > 118) {
      setScroll(window.pageYOffset);
      setDistance(false);
    } else {
      setScroll(window.pageYOffset);
      setDistance(true);
    }
  };

  // 화면 크기에 따른 리렌더링
  const handleMode = () => {
    setMode(window.innerWidth);
  };

  useEffect(() => {
    // 화면 width 값이 바뀌면 리렌더링
    window.addEventListener('resize', handleMode);
    // scroll 값에 따라 relative fixed 변경
    window.addEventListener('scroll', handleScroll);
    return () => {
      //  window 에서 스크롤을 감시를 종료
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleMode);
    };
  }, [scroll, mode, distance]);

  const LogOut = async () => {
    const token = localStorage.getItem('token') ? JSON.parse(localStorage.getItem('token')).token : null;
    console.log('token', token);
    try {
      const body = { token };
      const res = await axios.post('https://stfe-gotogether.herokuapp.com/user/logout', body);
      console.log(res);
      dispatch(logoutUser(body));
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div>
      {/* 화면전환 */}
      {mode > 992 ? (
        <HeaderStyle distance={distance}>
          <div>
            <header className="header">
              <p className="my-page">
                {USER.isLogin ? (
                  <button type="button" onClick={LogOut}>
                    로그아웃
                  </button>
                ) : (
                  <Link to="/login">로그인</Link>
                )}
              </p>
              <p className="my-page">장바구니</p>
              <p className="my-page">
                <Link to="mypage">마이페이지</Link>
              </p>
            </header>
          </div>

          <hr />

          <header id="header">
            <h1>
              <Link to="/">
                <HeaderLogo />
              </Link>
            </h1>
            <ul className="content">
              <Link to="/recommendedlist">
                <span>추천 여행 상품</span>
              </Link>
            </ul>
            <ul className="content">
              <Link to="/grouplist" tar="2030">
                <span>그룹별 여행</span>
              </Link>
              <nav>2030끼리</nav>
              <nav>4050끼리</nav>
              <nav>6070끼리</nav>
              <nav>여자끼리</nav>
              <nav>남자끼리</nav>
              <nav>자녀동반</nav>
            </ul>
            <ul className="content">
              <Link to="/themelist">
                <span>테마별 여행</span>
              </Link>
              <nav>문화탐방</nav>
              <nav>휴양지</nav>
              <nav>골프여행</nav>
              <nav>트레킹</nav>
              <nav>성지순례</nav>
            </ul>
            <ul className="content">
              <Link to="/arealist">
                <span>지역별 여행</span>
              </Link>
              <nav>동남아시아</nav>
              <nav>동북-중앙아시아</nav>
              <nav>서남아시아-태평양</nav>
              <nav>유럽-코카서스</nav>
              <nav>북미-중남미</nav>
              <nav>아프리카-중동</nav>
            </ul>
            <ul className="content info">
              <span>고객 센터</span>
              <nav>공지사항</nav>
              <nav>자주 묻는 질문</nav>
              <nav>1:1 문의</nav>
              <nav>단체 문의</nav>
            </ul>
          </header>
        </HeaderStyle>
      ) : (
        <MobileHeader />
      )}
    </div>
  );
};

export default Header;
