import React, { useState } from 'react';
import { ButtonList, ListBox, ThemeButton } from 'style/listStyle/ListStyle';
import ThemeListFilter from './ThemeListFilter';

const ThemeListPage = () => {
  const [content, setContent] = useState('culture');
  const ThemeList = [
    ['culture', '문화탐방'],
    ['rest', '휴양지'],
    ['golf', '골프여행'],
    ['trek', '트래킹'],
    ['circuit', '성지순례'],
  ];

  const ThemeListType = ThemeList.map((data, index) => (
    <button
      key={data[0]}
      type="button"
      name={data[0]}
      className={index === 0 ? 'normal-btn active' : 'normal-btn'}
      onClick={(e) => {
        setContent(e.target.name);
        for (let i = 0; i < ThemeList.length; i += 1) {
          e.target.parentNode.childNodes[i].className = 'normal-btn';
        }
        e.target.classList.add('active');
      }}
    >
      {data[1]}
    </button>
  ));

  return (
    <>
      <ButtonList>
        <ThemeButton>{ThemeListType}</ThemeButton>
      </ButtonList>
      <ListBox>
        <ThemeListFilter content={content} />
      </ListBox>
    </>
  );
};

export default ThemeListPage;
