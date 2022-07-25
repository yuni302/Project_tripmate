import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import axios from 'axios';
import { SearchListStyle, Blank } from 'style/searchStyle/SearchListStyle';
import SearchFilter from './SearchFilter';

const GroupList = [
  ['2030', '2030끼리'],
  ['4050', '4050끼리'],
  ['6070', '6070끼리'],
  ['female', '여자끼리'],
  ['male', '남자끼리'],
  ['family', '자녀동반'],
];

const SearchList = () => {
  const location = useLocation();
  const [searchWord, setSearchWord] = useState(location.state ? location.state.region : '');
  const [checkedButtonList, setCheckedButtonList] = useState(location.state ? location.state.checkedInputs : []);
  const [result, setResult] = useState([]);
  const [isSearch, setIsSearch] = useState(false);
  const tempList = [];

  const changeHandler = (checked, id) => {
    if (!checked) {
      setCheckedButtonList([...checkedButtonList, id]);
    } else {
      setCheckedButtonList(checkedButtonList.filter((el) => el !== id));
    }
  };
  const handleSearchWord = (e) => {
    setSearchWord(e.target.value);
  };

  const GroupType = GroupList.map((group) => (
    <button
      id={group[0]}
      className={checkedButtonList.includes(group[0]) ? 'btn active' : 'btn'}
      key={group[0]}
      type="button"
      checked={checkedButtonList.includes(group[0])}
      onClick={(e) => {
        changeHandler(e.currentTarget.checked, group[0]);
      }}
    >
      {group[1]}
    </button>
  ));

  const wordSearch = async (word) => {
    const body = { query: `${word}` };
    try {
      const res = await axios.post('https://stfe-gotogether.herokuapp.com/product/a/search', body);
      tempList.push(...res.data.productList);
    } catch (err) {
      console.error('Error : ', err);
    }
  };
  const checkedButtonSearch = async (button) => {
    for (let i = 0; i < button.length; i += 1) {
      const body = { query: `${button[i]}` };
      try {
        // eslint-disable-next-line
        const res = await axios.post('https://stfe-gotogether.herokuapp.com/product/a/search', body);
        tempList.push(...res.data.productList);
      } catch (err) {
        console.error('Error : ', err);
      }
    }
  };
  const searchProduct = async () => {
    if (searchWord !== '') {
      await wordSearch(searchWord);
    }
    if (checkedButtonList.length !== 0) {
      await checkedButtonSearch(checkedButtonList);
    }
    setIsSearch(true);
    setResult(tempList);
  };
  useEffect(() => {
    searchProduct();
  }, []);

  return (
    <div>
      <SearchListStyle>
        <span className="search-result">검색결과</span>
        <div>
          <p className="destination">여행지</p>
          <input type="text" placeholder="여행지를 검색해주세요" value={searchWord} onChange={handleSearchWord} />
        </div>
        <div>
          <p className="companion">동행자 유형</p>
          <div className="btn-wrap">
            <div>{GroupType}</div>
            <button type="button" className="check" onClick={searchProduct}>
              검색하기
            </button>
          </div>
        </div>
      </SearchListStyle>
      {isSearch ? (
        <div>
          <SearchFilter result={result} isSearch={isSearch} />
        </div>
      ) : (
        <Blank />
      )}
    </div>
  );
};

export default SearchList;
