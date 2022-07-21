import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import SubBanner from 'components/common/SubBanner';
import { SubBannerStyle } from 'style/commonStyle/SubBannerStyle';
import AreaListBanner from 'img/AreaListBanner.png';
import { ButtonList, ListBox, NormalButton } from 'style/listStyle/ListStyle';
import AreaListFilter from './AreaListFilter';
import { Area } from './TotalList';

const AreaList = () => {
  const location = useLocation();
  const [content, setContent] = useState(location.state ? location.state.area : 'sea');

  const handelContent = (e) => {
    setContent(e.target.name);
    for (let i = 0; i < Area.length; i += 1) {
      e.target.parentNode.childNodes[i].className = 'normal-btn';
    }
    e.target.classList.add('active');
  };

  const AreaListType = Area.map((data) => (
    <button
      key={data[0]}
      type="button"
      name={data[0]}
      className={data[0] === content ? 'normal-btn active' : 'normal-btn'}
      onClick={handelContent}
    >
      {data[1]}
    </button>
  ));

  return (
    <>
      <SubBannerStyle>
        <SubBanner bannerName={AreaListBanner} />
      </SubBannerStyle>
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
