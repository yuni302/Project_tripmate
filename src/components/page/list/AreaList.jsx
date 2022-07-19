import React, { useState } from 'react';
import { ButtonList, ListBox, NormalButton } from 'style/listStyle/ListStyle';
import AreaListFilter from './AreaListFilter';
import { Area } from './TotalList';

const AreaList = () => {
  const [content, setContent] = useState('sea');

  const AreaListType = Area.map((data, index) => (
    <button
      key={data[0]}
      type="button"
      name={data[0]}
      className={index === 0 ? 'normal-btn active' : 'normal-btn'}
      onClick={(e) => {
        setContent(e.target.name);
        for (let i = 0; i < Area.length; i += 1) {
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
        <NormalButton>{AreaListType}</NormalButton>
      </ButtonList>
      <ListBox>
        <AreaListFilter content={content} />
      </ListBox>
    </>
  );
};

export default AreaList;
