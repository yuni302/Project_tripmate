import React from 'react';
import { useLocation } from 'react-router-dom';
import Youtube from 'img/Youtube.svg';
import Facebook from 'img/Facebook.svg';
import Instagram from 'img/Instagram.svg';
import Logo from 'img/FooterLogo.svg';
import { FooterStyle } from 'style/commonStyle/FooterStyle';

const Footer = () => {
  const location = useLocation();
  if (location.pathname === '/keyword') return null;
  return (
    <FooterStyle>
      <div id="footer">
        <div className="footer-contents">
          <div className="footer-menu">
            <ul className="footer-terms">
              <li>
                <a href="/">안심카드 결제</a>
              </li>
              <li>
                <a href="/">이용약관</a>
              </li>
              <li>
                <a href="/">개인정보처리방침</a>
              </li>
              <li>
                <a href="/">여행약관</a>
              </li>
            </ul>
            <ul className="footer-sns">
              <li>
                <a href="/">
                  <img alt="icon" src={Youtube} />
                </a>
              </li>
              <li>
                <a href="/">
                  <img alt="icon" src={Facebook} />
                </a>
              </li>
              <li>
                <a href="/">
                  <img alt="icon" src={Instagram} />
                </a>
              </li>
            </ul>
          </div>

          <img alt="logo" src={Logo} />

          <section>
            <div className="footer-info">
              <p>고객센터</p>
              <p>
                <strong>02-6105-7711</strong>
              </p>
              <p>영업시간 : 09:00 ~ 18:00</p>
              <p>토/일요일 및 공휴일 휴무</p>
            </div>
            <div className="footer-account">
              <p>입금계좌</p>
              <p>
                <strong>KEB하나은행</strong>
              </p>
              <p>
                <strong>267-910020-36604</strong>
              </p>
              <p>(주)더샤이니</p>
            </div>
          </section>

          <address className="footer-licensee">
            <p>
              상호명: (주)더샤이니ㅣ대표: 김소영ㅣ개인정보보호책임자: 김승덕 ㅣ주소: 서울특별시 중구
              청계천로40(한국관광공사 서울센터) 707호
            </p>
            <p>
              사업자등록번호: 495-87-02492ㅣ통신판매업신고번호: 2021-서울중구-2450ㅣ이메일: gotogether@shinytravels.com
            </p>
          </address>
          <div className="footer-guide">
            <p>고투게더 서비스 내 결제 발생 시 고객상담, 취소, 환불 등의 거래에 대하여 책임을 집니다.</p>
            <p>
              고투게더는 통신판매중개자이며 통신판매의 당사자가 아닙니다. 따라서 상품, 거래정보 및 거래에 대하여 책임을
              지지 않습니다.
            </p>
          </div>
          <p className="footer-copyright">Copyright ⓒ 2022 고투게더 All rights reserved.</p>
          <button type="button">모바일 모드로 보기</button>
        </div>
      </div>
    </FooterStyle>
  );
};

export default Footer;
