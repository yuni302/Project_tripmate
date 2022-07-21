import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import SubBanner from 'components/common/SubBanner';
import { SubBannerStyle } from 'style/commonStyle/SubBannerStyle';
import ThemeListBanner from 'img/ThemeListBanner.png';
import { ButtonList, ListBox, ThemeButton } from 'style/listStyle/ListStyle';
import ThemeListFilter from './ThemeListFilter';
import { Theme } from './TotalList';

const ThemeList = () => {
  const location = useLocation();
  const [content, setContent] = useState(location.state ? location.state.theme : 'culture');

  const handelContent = (e) => {
    setContent(e.target.name);
    for (let i = 0; i < Theme.length; i += 1) {
      e.target.parentNode.childNodes[i].className = 'normal-btn';
    }
    e.target.classList.add('active');
  };

  const ThemeListType = Theme.map((data) => (
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
        <SubBanner bannerName={ThemeListBanner} />
      </SubBannerStyle>
      <ButtonList>
        <ThemeButton>{ThemeListType}</ThemeButton>
      </ButtonList>
      <ListBox>
        <ThemeListFilter content={content} />
      </ListBox>
    </>
  );
};

export default ThemeList;
