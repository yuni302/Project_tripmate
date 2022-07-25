import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { SearchStyle } from 'style/mainStyle/SearchStyle';
import { Group } from 'components/page/list/TotalList';

const Search = () => {
  const [region, setRegion] = useState('');
  const [checkedInputs, setCheckedInputs] = useState([]);
  const popularRegionList = ['유럽', '치앙마이', '시칠리아', '런던', '부다페스트'];
  const groupList = Group;
  const navigate = useNavigate();
  const [canSearch, setCanSearch] = useState(true);

  useEffect(() => {
    if (region !== '' || checkedInputs.length !== 0) {
      setCanSearch(false);
    } else {
      setCanSearch(true);
    }
  }, [region, checkedInputs]);

  const PopularRegion = popularRegionList.map((reg) => (
    <li key={reg}>
      <button
        type="button"
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
      id={group[0]}
      className={checkedInputs.includes(group[0]) ? 'btn active' : 'btn'}
      key={group[0]}
      type="button"
      checked={checkedInputs.includes(group[0])}
      onClick={(e) => {
        changeHandler(e.currentTarget.checked, group[0]);
      }}
    >
      {group[1]}
    </button>
  ));

  const searchProduct = () => {
    navigate('/search', { state: { region, checkedInputs } });
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
        <button type="button" className="search" disabled={canSearch} onClick={searchProduct}>
          검색하기
        </button>
      </div>
    </SearchStyle>
  );
};

export default Search;
