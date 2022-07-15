import React, { useState } from 'react';
import { ButtonList, ListBox, NormalButton } from 'style/listStyle/ListStyle';
import GroupListFilter from './GroupListFilter';

const GroupListPage = () => {
  const [content, setContent] = useState('2030');
  const GroupList = [
    ['2030', '4050', '6070', 'female', 'male', 'family'],
    ['2030끼리', '4050끼리', '6070끼리', '여자끼리', '남자끼리', '자녀동반'],
  ];

  const GroupListType = GroupList[0].map((data, index) => (
    <button
      key={data}
      type="button"
      name={data}
      className={index === 0 ? 'normal-btn active' : 'normal-btn'}
      onClick={(e) => {
        setContent(e.target.name);
        for (let i = 0; i < GroupList[0].length; i += 1) {
          e.target.parentNode.childNodes[i].className = 'normal-btn';
        }
        e.target.classList.add('active');
      }}
    >
      {GroupList[1][index]}
    </button>
  ));

  return (
    <>
      <ButtonList>
        <NormalButton>{GroupListType}</NormalButton>
      </ButtonList>
      <ListBox>
        <GroupListFilter content={content} />
      </ListBox>
    </>
  );
};

export default GroupListPage;
