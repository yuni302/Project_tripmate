import KeywordStart from 'components/page/keyword/KeywordStart';
import React from 'react';
import styled from 'styled-components';

const KeywordPageStyle = styled.div`
  display: flex;
  margin-top: 75px;
`;

const KeywordPage = () => (
  <KeywordPageStyle>
    <KeywordStart />
  </KeywordPageStyle>
);

export default KeywordPage;
