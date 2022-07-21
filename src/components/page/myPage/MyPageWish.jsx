import React from 'react';
import { WishListStyle } from 'style/myPageStyle/MyPageListStyle';

const MyPageWish = () => (
  <WishListStyle>
    <div className="list-title">상품명</div>
    <div className="list-content">
      <img src="https://cdn.imweb.me/thumbnail/20220706/abead65bbe05d.jpg" alt="1" />
      <div>
        <span className="title">핸디18이하 치앙마이 GOFLTEL 알파인 CC 5,6일</span>
        <p className="price">1,790,000원</p>
      </div>
    </div>
  </WishListStyle>
);

export default MyPageWish;
