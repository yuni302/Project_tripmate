import React, { useState } from 'react';
import { ButtonList, ListBox, NormalButton } from 'style/listStyle/ListStyle';
import GroupListFilter from './GroupListFilter';
import { Group } from './TotalList';

const GroupList = () => {
  const [content, setContent] = useState('2030');

  const GroupListType = Group.map((data, index) => (
    <button
      key={data[0]}
      type="button"
      name={data[0]}
      className={index === 0 ? 'normal-btn active' : 'normal-btn'}
      onClick={(e) => {
        setContent(e.target.name);
        for (let i = 0; i < Group.length; i += 1) {
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

export default GroupList;
