import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { InformationStyle } from 'style/informationStyle/InformationStyle';
import { InfoNavStyle } from 'style/informationStyle/InfoNavStyle';
import InfoContent from './InfoContent';

const InfoNav = () => {
  const location = useLocation();
  const [pageName, setPageName] = useState(location.state ? location.state.infor : 'notice');

  const changePage = (e) => {
    setPageName(e.target.id);
  };
  return (
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
  );
};

export default InfoNav;
