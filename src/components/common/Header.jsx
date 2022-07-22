import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, useLocation } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { logoutUser } from 'store/userSlice';

import { ReactComponent as HeaderLogo } from 'img/HeaderLogo.svg';
import { HeaderStyle } from 'style/commonStyle/HeaderStyle';
import MobileHeader from './MobileHeader';

const Header = () => {
  const location = useLocation();
  if (location.pathname === '/keyword') return null;
  const USER = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const [scroll, setScroll] = useState(0);
  const [mode, setMode] = useState(window.innerWidth);
  const [distance, setDistance] = useState(true);

  // 스크롤 위치에 따른 position 변경
  const handleScroll = () => {
    if (scroll > 141) {
      setScroll(window.pageYOffset);
      setDistance(false);
    } else if (scroll === 0) {
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
    try {
      const body = { token };
      const res = await axios.post('https://stfe-gotogether.herokuapp.com/user/logout', body);
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
                  <button type="button" onClick={LogOut} className="sign-out">
                    로그아웃
                  </button>
                ) : (
                  <Link to="/login">로그인</Link>
                )}
              </p>
              <p className="my-page">
                <Link to="/addcart">장바구니</Link>
              </p>
              <p className="my-page">
                <Link to="mypage">마이페이지</Link>
              </p>
            </header>
          </div>

          <hr />

          <div id="header-max" className="header-max">
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
                <Link to="/grouplist" state={{ group: '2030' }}>
                  <span>그룹별 여행</span>
                </Link>
                <Link to="/grouplist" state={{ group: '2030' }}>
                  <nav>2030끼리</nav>
                </Link>
                <Link to="/grouplist" state={{ group: '4050' }}>
                  <nav>4050끼리</nav>
                </Link>
                <Link to="/grouplist" state={{ group: '6070' }}>
                  <nav>6070끼리</nav>
                </Link>
                <Link to="/grouplist" state={{ group: 'female' }}>
                  <nav>여자끼리</nav>
                </Link>
                <Link to="/grouplist" state={{ group: 'male' }}>
                  <nav>남자끼리</nav>
                </Link>
                <Link to="/grouplist" state={{ group: 'family' }}>
                  <nav>자녀동반</nav>
                </Link>
              </ul>
              <ul className="content">
                <Link to="/themelist" state={{ theme: 'culture' }}>
                  <span>테마별 여행</span>
                </Link>
                <Link to="/themelist" state={{ theme: 'culture' }}>
                  <nav>문화탐방</nav>
                </Link>
                <Link to="/themelist" state={{ theme: 'rest' }}>
                  <nav>휴양지</nav>
                </Link>
                <Link to="/themelist" state={{ theme: 'golf' }}>
                  <nav>골프여행</nav>
                </Link>
                <Link to="/themelist" state={{ theme: 'trek' }}>
                  <nav>트레킹</nav>
                </Link>
                <Link to="/themelist" state={{ theme: 'circuit' }}>
                  <nav>성지순례</nav>
                </Link>
              </ul>
              <ul className="content">
                <Link to="/arealist" state={{ area: 'sea' }}>
                  <span>지역별 여행</span>
                </Link>
                <Link to="/arealist" state={{ area: 'sea' }}>
                  <nav>동남아시아</nav>
                </Link>
                <Link to="/arealist" state={{ area: 'nea' }}>
                  <nav>동북-중앙아시아</nav>
                </Link>
                <Link to="/arealist" state={{ area: 'pacific' }}>
                  <nav>서남아시아-태평양</nav>
                </Link>
                <Link to="/arealist" state={{ area: 'eu' }}>
                  <nav>유럽-코카서스</nav>
                </Link>
                <Link to="/arealist" state={{ area: 'america' }}>
                  <nav>북미-중남미</nav>
                </Link>
                <Link to="/arealist" state={{ area: 'africa' }}>
                  <nav>아프리카-중동</nav>
                </Link>
              </ul>
              <ul className="content info">
                <Link to="/information" state={{ infor: 'notice' }}>
                  <span>고객 센터</span>
                </Link>
                <Link to="/information" state={{ infor: 'notice' }}>
                  <nav>공지사항</nav>
                </Link>
                <Link to="/information" state={{ infor: 'frequent' }}>
                  <nav>자주 묻는 질문</nav>
                </Link>
                <Link to="/information " state={{ infor: 'oneonone' }}>
                  <nav>1:1 문의</nav>
                </Link>
                <Link to="/information" state={{ infor: 'group-ask' }}>
                  <nav>단체 문의</nav>
                </Link>
              </ul>
            </header>
          </div>
        </HeaderStyle>
      ) : (
        <MobileHeader />
      )}
    </div>
  );
};

export default Header;
