import React, { useState, useEffect } from 'react';
import LeftArrow from 'img/LeftArrow.svg';
import RightArrow from 'img/RightArrow.svg';
import { Page } from 'style/listStyle/ListStyle';

const PageNation = () => (
  <Page>
    <a href="/">
      <img alt="LeftArrow" src={LeftArrow} />
    </a>
    <div>
      <span className="first-page">1</span> <span className="last-page">/ 999</span>
    </div>
    <a href="/">
      <img alt="RightArrow" src={RightArrow} />
    </a>
  </Page>
);
export default PageNation;
