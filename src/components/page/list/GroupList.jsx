import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import SubBanner from 'components/common/SubBanner';
import { SubBannerStyle } from 'style/commonStyle/SubBannerStyle';
import GroupListBanner from 'img/GroupListBanner.png';
import { ButtonList, ListBox, NormalButton } from 'style/listStyle/ListStyle';
import GroupListFilter from './GroupListFilter';
import { Group } from './TotalList';

const GroupList = () => {
  const location = useLocation();
  const [content, setContent] = useState(location.state ? location.state.group : '2030');

  const handelContent = (e) => {
    setContent(e.target.name);
    for (let i = 0; i < Group.length; i += 1) {
      e.target.parentNode.childNodes[i].className = 'normal-btn';
    }
    e.target.classList.add('active');
  };

  const GroupListType = Group.map((data) => (
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
        <SubBanner bannerName={GroupListBanner} />
      </SubBannerStyle>
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
