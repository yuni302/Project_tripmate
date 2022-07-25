import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

import { useSelector, useDispatch } from 'react-redux';
import { logoutUser } from 'store/userSlice';

import { MobileHeaderStyle } from 'style/commonStyle/HeaderStyle';
import { ReactComponent as Mobile } from 'img/MobileLogo.svg';
import { ReactComponent as Login } from 'img/LogIn.svg';
import { ReactComponent as Logout } from 'img/LogOut.svg';
import { ReactComponent as User } from 'img/User.svg';
import { ReactComponent as Shopping } from 'img/ShoppingBag.svg';
import { ReactComponent as Search } from 'img/Search.svg';

const MobileHeader = () => {
  if (window.location.pathname === '/keyword') return null;
  const [scroll, setScroll] = useState(0);
  const [mobile, setDistance] = useState(false);
  const USER = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const handleScroll = () => {
    if (scroll > 78) {
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

  useEffect(() => {
    const scrollListener = () => {
      window.addEventListener('scroll', handleScroll);
    }; //  window 에서 스크롤을 감시 시작
    scrollListener(); // window 에서 스크롤을 감시
    return () => {
      window.removeEventListener('scroll', handleScroll);
    }; //  window 에서 스크롤을 감시를 종료
  }, [scroll, mobile]);

  return (
    <MobileHeaderStyle mobile={mobile}>
      <div className="mobile">
        <header className="header">
          <div className="header-nav">
            <div className="nav">
              <Link to="/search">
                <Search />
              </Link>
            </div>
            <div className="nav">
              <Shopping />
            </div>
          </div>
          <h1>
            <Link to="/">
              <Mobile />
            </Link>
          </h1>
          <div className="header-nav">
            <div className="nav">
              {USER.isLogin ? (
                <button type="button" onClick={LogOut}>
                  <Logout />
                </button>
              ) : (
                <Link to="/login">
                  <Login />
                </Link>
              )}
            </div>
            <div className="nav">
              <Link to="/mypage">
                <User />
              </Link>
            </div>
          </div>
        </header>
      </div>

      <header id="header">
        <ul className="content">
          <Link to="/recommendedlist">
            <span>추천 여행 상품</span>
          </Link>
        </ul>

        <ul className="content">
          <Link to="/grouplist">
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
          <Link to="/themelist">
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
          <Link to="/arealist">
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
    </MobileHeaderStyle>
  );
};

export default MobileHeader;
