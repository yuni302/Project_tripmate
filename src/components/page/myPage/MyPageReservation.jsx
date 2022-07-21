import React from 'react';
import { Link } from 'react-router-dom';
import { ReservationStyle } from 'style/myPageStyle/MyPageListStyle';

const MyPageReservation = () => (
  <ReservationStyle>
    <div className="list-title">
      <span id="pay">결제일</span>
      <span id="info">상품 정보</span>
      <span id="pass-port">여권사본</span>
      <span id="progress">진행 상태</span>
    </div>

    <div className="list-content">
      <div className="pay">2022.07.22</div>
      <div className="info">
        <img
          src="https://mblogthumb-phinf.pstatic.net/20160127_177/krazymouse_1453865104404DjQIi_PNG/%C4%AB%C4%AB%BF%C0%C7%C1%B7%BB%C1%EE_%B6%F3%C0%CC%BE%F0.png?type=w2"
          alt="1"
        />
        <div>
          <p className="title">핸디18이하 치앙마이 GOFLTEL 알파인 CC 5,6일</p>
          <p className="price">1,790,000원</p>
          <p className="information">예약번호</p>
          <Link to="/" className="check">
            예약 정보 확인
          </Link>
        </div>
      </div>
      <div className="pass-port">1</div>
      <div className="progress">결제완료</div>
    </div>

    <div className="list-content">
      <div className="pay">2022.07.22</div>
      <div className="info">
        <img src="https://t1.daumcdn.net/cfile/tistory/2207573D58CFDE2704" alt="1" />
        <div>
          <p className="title">핸디18이하 치앙마이 GOFLTEL 알파인 CC 5,6일</p>
          <p className="price">1,790,000원</p>
          <p className="information">예약번호</p>
          <Link to="/" className="check">
            예약 정보 확인
          </Link>
        </div>
      </div>
      <div className="pass-port">1</div>
      <div className="progress">결제완료</div>
    </div>
  </ReservationStyle>
);

export default MyPageReservation;
