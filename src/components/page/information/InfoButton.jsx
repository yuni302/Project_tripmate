import React, { useState } from 'react';
import { InfoButtonStyle } from 'style/informationStyle/InfoButtonStyle';
import { ReactComponent as LeftArrow } from 'img/LeftArrow.svg';
import { ReactComponent as RightArrow } from 'img/RightArrow.svg';

const TOTAL_PAGE = 5;

const InfoButton = () => {
  const [page, setPage] = useState(1);
  const pageUp = () => page < TOTAL_PAGE && setPage(page + 1);
  const pageDown = () => page > 1 && setPage(page - 1);

  return (
    <InfoButtonStyle>
      <button type="button" className="prev button" onClick={pageDown}>
        <LeftArrow />
      </button>
      <div className="page">
        <span className="current-page">{page}</span>
        <span className="total-page">/{TOTAL_PAGE}</span>
      </div>
      <button type="button" className="next button" onClick={pageUp}>
        <RightArrow />
      </button>
    </InfoButtonStyle>
  );
};

export default InfoButton;
