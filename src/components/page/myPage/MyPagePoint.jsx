import React from 'react';
import { PointListStyle } from 'style/myPageStyle/MyPageListStyle';

const MyPagePoint = () => (
  <PointListStyle>
    <div className="list-title">
      <span>적립/적용 일자</span>
      <span id="break-down">내역</span>
      <span>사용 포인트</span>
      <span>적립 포인트</span>
    </div>

    <div className="list-content">
      <div>2022.07.22</div>
      <div className="break-down">여행 상품 결제 포인트 적립</div>
      <div> </div>
      <div className="plus">+15632</div>
    </div>

    <div className="list-content">
      <div>2022.07.22</div>
      <div className="break-down">여행 상품 결제 포인트 적립</div>
      <div>-5132</div>
      <div className="plus"> </div>
    </div>
  </PointListStyle>
);

export default MyPagePoint;
