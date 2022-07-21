import React, { useState } from 'react';
import SubBanner from 'components/common/SubBanner';
import { SubBannerStyle } from 'style/commonStyle/SubBannerStyle';
import ThemeListBanner from 'img/ThemeListBanner.png';
import { ButtonList, ListBox, ThemeButton } from 'style/listStyle/ListStyle';
import ThemeListFilter from './ThemeListFilter';
import { Theme } from './TotalList';

const ThemeList = () => {
  const [content, setContent] = useState('culture');

  const ThemeListType = Theme.map((data, index) => (
    <button
      key={data[0]}
      type="button"
      name={data[0]}
      className={index === 0 ? 'normal-btn active' : 'normal-btn'}
      onClick={(e) => {
        setContent(e.target.name);
        for (let i = 0; i < Theme.length; i += 1) {
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
