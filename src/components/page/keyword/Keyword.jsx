import React, { useState } from 'react';
import HeaderLogo from 'img/HeaderLogo.svg';
import { KeywordMainStyle, FormStyle } from 'style/keywordStyle/KeywordMainStyle';
import { KeywordLogoStyle } from 'style/keywordStyle/KeywordLogoStyle';
import Question from './Question';
import { item } from './KeywordItem';

const MAX_PAGE = Object.keys(item).length;

const Keyword = () => {
  const [page, setPage] = useState(0);

  return (
    <KeywordMainStyle>
      <KeywordLogoStyle className="logo">
        <img src={HeaderLogo} alt="logo" className="first" />
      </KeywordLogoStyle>
      <FormStyle className="contents">
        <Question event={item[page]} page={page} setPage={setPage} maxPage={MAX_PAGE} />
      </FormStyle>
    </KeywordMainStyle>
  );
};

export default Keyword;
