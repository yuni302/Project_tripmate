import MyPageButton from 'components/page/myPage/MyPageButton';
import React from 'react';

import { MyPageStyle } from 'style/myPageStyle/MyPageStyle';

const MyPage = () => (
  <MyPageStyle>
    <span className="myPage">마이페이지</span>
    <MyPageButton />
  </MyPageStyle>
);

export default MyPage;
