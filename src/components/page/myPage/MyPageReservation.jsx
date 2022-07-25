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
        <img src="https://cdn.imweb.me/thumbnail/20220708/154d66cfc5050.jpg" alt="1" />
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
        <img src="https://cdn.imweb.me/thumbnail/20220706/abead65bbe05d.jpg" alt="1" />
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
