import React, { useState } from 'react';
import { ButtonList, ListBox, NormalButton } from 'style/listStyle/ListStyle';
import AreaListFilter from './AreaListFilter';

const AreaListPage = () => {
  const [content, setContent] = useState('sea');
  const AreaList = [
    ['sea', 'nea', 'pacific', 'eu', 'america', 'africa'],
    ['동남아시아', '동북-중앙아시아', '서남아시아-태평양', '유럽-코카서스', '북미-중남미', '아프리카-중동'],
  ];

  const AreaListType = AreaList[0].map((data, index) => (
    <button
      key={data}
      type="button"
      name={data}
      className={index === 0 ? 'normal-btn active' : 'normal-btn'}
      onClick={(e) => {
        setContent(e.target.name);
        for (let i = 0; i < AreaList[0].length; i += 1) {
          e.target.parentNode.childNodes[i].className = 'normal-btn';
        }
        e.target.classList.add('active');
      }}
    >
      {AreaList[1][index]}
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
