import React, { useState } from 'react';
import { ButtonList, ListBox, NormalButton } from 'style/listStyle/ListStyle';
import AreaListFilter from './AreaListFilter';

const AreaListPage = () => {
  const [content, setContent] = useState('sea');
  const AreaList = [
    ['sea', '동남아시아'],
    ['nea', '동북-중앙아시아'],
    ['pacific', '서남아시아-태평양'],
    ['eu', '유럽-코카서스'],
    ['america', '북미-중남미'],
    ['africa', '아프리카-중동'],
  ];

  const AreaListType = AreaList.map((data, index) => (
    <button
      key={data[0]}
      type="button"
      name={data[0]}
      className={index === 0 ? 'normal-btn active' : 'normal-btn'}
      onClick={(e) => {
        setContent(e.target.name);
        for (let i = 0; i < AreaList.length; i += 1) {
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

export default AreaListPage;
