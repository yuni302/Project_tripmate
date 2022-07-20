/*eslint-disable*/
import React, { useState } from 'react';
import { SearchStyle } from 'style/mainStyle/SearchStyle';

const Search = () => {
  const [region, setRegion] = useState('');
  const [checkedInputs, setCheckedInputs] = useState([]);
  const popularRegionList = ['유럽', '치앙마이', '시칠리아', '런던', '부다페스트'];
  const groupList = [
    { 2030: '2030끼리' },
    { 3040: '3040끼리' },
    { 5060: '5060끼리' },
    { woman: '여자끼리' },
    { man: '남자끼리' },
    { family: '자녀동반' },
  ];

  const PopularRegion = popularRegionList.map((reg) => (
    <li key={reg}>
      <button
        onClick={(e) => {
          setRegion(e.target.innerHTML);
        }}
      >
        {reg}
      </button>
    </li>
  ));

  const changeHandler = (checked, id) => {
    if (!checked) {
      setCheckedInputs([...checkedInputs, id]);
    } else {
      setCheckedInputs(checkedInputs.filter((el) => el !== id));
    }
  };

  const GroupType = groupList.map((group) => (
    <button
      id={Object.keys(group)[0]}
      className={checkedInputs.includes(Object.keys(group)[0]) ? 'btn active' : 'btn'}
      key={Object.keys(group)[0]}
      type="button"
      checked={checkedInputs.includes(Object.keys(group)[0])}
      onClick={(e) => {
        changeHandler(e.currentTarget.checked, Object.keys(group)[0]);
      }}
    >
      {Object.values(group)}
    </button>
  ));

  const searchProduct = () => {
    // 작동 확인을 위한 코드, 추후 검색 기능 개발 예정
    console.log(region, checkedInputs);
    setRegion('');
    setCheckedInputs([]);
  };

  return (
    <SearchStyle>
      <div className="search-box">
        <div className="where">
          <div className="locate">
            <div className="where-title">어디로 여행을 떠나고 싶으신가요?</div>
            <span className="where-sub-title">여행지</span>
            <input type="text" onChange={(e) => setRegion(e.target.value)} value={region} />
          </div>
          <div className="fav-locate">
            <span>인기여행지</span>
            <ul className="fav-locate-list">{PopularRegion}</ul>
          </div>
        </div>
        <hr />
        <div className="who">
          <div className="who-title">누구와 여행을 떠나고 싶으신가요?</div>
          <span className="who-sub-title">동행자 유형</span>
          <div className="select">{GroupType}</div>
        </div>
        <button type="button" className="search" onClick={() => searchProduct()}>
          검색하기
        </button>
      </div>
    </SearchStyle>
  );
};

export default Search;
