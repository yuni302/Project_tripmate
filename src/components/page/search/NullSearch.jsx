import React from 'react';
import { Link } from 'react-router-dom';
import NullSearchIcon from 'img/NullSearchIcon.svg';
import { NullSearchStyle } from 'style/searchStyle/NullSearchStyle';

const NullSearch = () => (
  <div>
    <NullSearchStyle>
      <p className="search-top">이런!</p>
      <img alt="NullSearchIcon" src={NullSearchIcon} />
      <p className="search-bottom">
        입력하신 검색어에 맞는 결과가 없네요
        <br />
        다시 검색해보세요!
      </p>
      <button type="button" className="home">
        <Link to="/">홈으로 이동</Link>
      </button>
    </NullSearchStyle>
  </div>
);

export default NullSearch;
