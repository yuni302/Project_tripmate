import React from 'react';
import { Link } from 'react-router-dom';
import NullCustomizedIcon from 'img/NullCustomizedIcon.svg';
import { NullCustomizedStyle } from 'style/mainStyle/NullCustomizedStyle';

const NullCustomized = () => (
  <div>
    <NullCustomizedStyle>
      <p className="customized-top">이런!</p>
      <img alt="NullCustomizedIcon" src={NullCustomizedIcon} />
      <p className="customized-bottom">
        키워드에 맞는 추천드릴 상품이 없네요
        <br />
        다시 한번 키워드를 선택해보시겠어요?
      </p>
      <button type="button" className="keyword">
        <Link to="/">키워드 선택하기</Link>
      </button>
    </NullCustomizedStyle>
  </div>
);

export default NullCustomized;
