import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import SubBanner from 'components/common/SubBanner';
import { SubBannerStyle } from 'style/commonStyle/SubBannerStyle';
import NoticeBanner from 'img/NoticeBanner.png';
import OftenQuestion from 'img/OftenQuestion.png';
import OneToOneQuestion from 'img/OneToOneQuestion.png';
import GroupQuestion from 'img/GroupQuestion.png';
import { InformationStyle } from 'style/informationStyle/InformationStyle';
import { InfoNavStyle } from 'style/informationStyle/InfoNavStyle';
import InfoContent from './InfoContent';

const InfoNav = () => {
  const [image, setImage] = useState(NoticeBanner);
  const location = useLocation();
  const [pageName, setPageName] = useState(location.state ? location.state.infor : 'notice');

  const changePage = (e) => {
    const {
      target: { id },
    } = e;
    setPageName(e.target.id);
    if (id === 'notice') {
      setImage(NoticeBanner);
    } else if (id === 'frequent') {
      setImage(OftenQuestion);
    } else if (id === 'oneonone') {
      setImage(OneToOneQuestion);
    } else if (id === 'group-ask') {
      setImage(GroupQuestion);
    }
  };
  return (
    <>
      <SubBannerStyle>
        <SubBanner bannerName={image} />
      </SubBannerStyle>
      <InformationStyle>
        <InfoNavStyle props={pageName}>
          <button type="button" className="information-nav" id="notice" onClick={changePage}>
            공지사항
          </button>
          <button type="button" className="information-nav" id="frequent" onClick={changePage}>
            자주 묻는 질문
          </button>
          <button type="button" className="information-nav" id="oneonone" onClick={changePage}>
            1:1 문의
          </button>
          <button type="button" className="information-nav" id="group-ask" onClick={changePage}>
            단체 문의
          </button>
        </InfoNavStyle>
        <InfoContent pageName={pageName} />
      </InformationStyle>
    </>
  );
};

export default InfoNav;
