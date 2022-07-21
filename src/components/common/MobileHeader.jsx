import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { MobileHeaderStyle } from 'style/commonStyle/HeaderStyle';
import { ReactComponent as Mobile } from 'img/MobileLogo.svg';
import { ReactComponent as Login } from 'img/LogIn.svg';
import { ReactComponent as User } from 'img/User.svg';
import { ReactComponent as Shopping } from 'img/ShoppingBag.svg';
import { ReactComponent as Search } from 'img/Search.svg';

const MobileHeader = () => {
  if (window.location.pathname === '/keyword') return null;
  const [scroll, setScroll] = useState(0);
  const [mobile, setDistance] = useState(false);

  const handleScroll = () => {
    if (scroll > 78) {
      setScroll(window.pageYOffset);
      setDistance(false);
    } else {
      setScroll(window.pageYOffset);
      setDistance(true);
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
          <div>
            <div>
              <Link to="/search">
                <Search />
              </Link>
            </div>
            <div>
              <Shopping />
            </div>
          </div>
          <h1>
            <Link to="/">
              <Mobile />
            </Link>
          </h1>
          <div>
            <div>
              <Link to="/login">
                <Login />
              </Link>
            </div>
            <div>
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
          <nav>동남아/태평양</nav>
          <nav>인도/중앙아시아</nav>
          <nav>아프리카/중동</nav>
          <nav>유럽/코카서스</nav>
          <nav>중남미/북미</nav>
          <nav>대만/중국/일본</nav>
        </ul>
        <ul className="content info">
          <span>고객 센터</span>
          <nav>공지사항</nav>
          <nav>자주 묻는 질문</nav>
          <nav>1:1 문의</nav>
          <nav>단체 문의</nav>
        </ul>
      </header>
    </MobileHeaderStyle>
  );
};

export default MobileHeader;
