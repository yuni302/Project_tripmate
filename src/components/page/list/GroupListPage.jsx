import React, { useState } from 'react';
import { ButtonList, ListBox, NormalButton } from 'style/listStyle/ListStyle';
import GroupListFilter from './GroupListFilter';

const GroupListPage = () => {
  const [content, setContent] = useState('2030');

  const GroupList = [
    ['2030', '2030끼리'],
    ['4050', '4050끼리'],
    ['6070', '6070끼리'],
    ['female', '여자끼리'],
    ['male', '남자끼리'],
    ['family', '자녀동반'],
  ];

  const GroupListType = GroupList.map((data, index) => (
    <button
      key={data[0]}
      type="button"
      name={data[0]}
      className={index === 0 ? 'normal-btn active' : 'normal-btn'}
      onClick={(e) => {
        setContent(e.target.name);
        for (let i = 0; i < GroupList.length; i += 1) {
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
        <NormalButton>{GroupListType}</NormalButton>
      </ButtonList>
      <ListBox>
        <GroupListFilter content={content} />
      </ListBox>
    </>
  );
};

export default GroupListPage;
