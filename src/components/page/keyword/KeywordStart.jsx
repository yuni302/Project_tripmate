import React, { useState } from 'react';
import HeaderLogo from 'img/HeaderLogo.svg';
import { KeywordMainStyle } from 'style/keywordStyle/KeywordMainStyle';
import { KeywordButtonStyle } from 'style/keywordStyle/KeywordButtonStyle';
import { KeywordContentsStyle } from 'style/keywordStyle/KeywordContentsStyle';
import { KeywordLogoStyle } from 'style/keywordStyle/KeywordLogoStyle';
import KeywordSecondLogo from 'img/KeywordSecondLogo.png';
import Keyword from './Keyword';

const KeywordStart = () => {
  const [start, setStart] = useState(true);

  const onStart = () => {
    setStart(false);
  };

  return start ? (
    <KeywordMainStyle>
      <KeywordLogoStyle className="logo">
        <img src={HeaderLogo} alt="logo" className="first" />
        <img src={KeywordSecondLogo} alt="second-logo" className="second" />
      </KeywordLogoStyle>
      <KeywordContentsStyle className="contents">
        <h3>최고의 여행경험을 위해 키워드를 선택해주세요!</h3>
        <div className="explain">
          <p>고투게더에서는 고객 개인의 최고의 여행경험을 위해</p>
          <p>같은 성향의 사람들과 패키지 여행을 즐길 수 있는 서비스를 운영하고 있습니다.</p>
          <p>키워드 입력을 통해 고객님께 딱 맞는 최적의 상품을 추천해드립니다.</p>
          <p>키워드 선택을 시작하시려면 시작하기 버튼을 눌러주세요</p>
        </div>
      </KeywordContentsStyle>
      <KeywordButtonStyle className="submit-button">
        <button type="button" onClick={onStart}>
          시작하기
        </button>
      </KeywordButtonStyle>
    </KeywordMainStyle>
  ) : (
    <Keyword />
  );
};

export default KeywordStart;
