import React, { useState } from 'react';
import { ButtonList, ListBox, ThemeButton } from 'style/listStyle/ListStyle';
import ThemeListFilter from './ThemeListFilter';

const ThemeListPage = () => {
  const [content, setContent] = useState('culture');
  const ThemeList = [
    ['culture', 'rest', 'golf', 'trek', 'circuit'],
    ['문화탐방', '휴양지', '골프여행', '트레킹', '성지순례'],
  ];

  const ThemeListType = ThemeList[0].map((data, index) => (
    <button
      key={data}
      type="button"
      name={data}
      className={index === 0 ? 'normal-btn active' : 'normal-btn'}
      onClick={(e) => {
        setContent(e.target.name);
        for (let i = 0; i < ThemeList[0].length; i += 1) {
          e.target.parentNode.childNodes[i].className = 'normal-btn';
        }
        e.target.classList.add('active');
      }}
    >
      {ThemeList[1][index]}
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
