import React from 'react';
import { InfoListStyle } from 'style/informationStyle/InfoListStyle';
import InfoButton from './InfoButton';
import Notice from './Notice';
import Frequent from './Frequent';
import OneOnOne from './OneOnOne';
import GroupAsk from './GroupAsk';

const InfoContent = ({ pageName }) => {
  const handleRender = () => {
    switch (pageName) {
      case 'notice':
        return (
          <>
            <Notice />
            <InfoButton />
          </>
        );
      case 'frequent':
        return (
          <>
            <Frequent />
            <InfoButton />
          </>
        );
      case 'oneonone':
        return (
          <>
            <OneOnOne />
            <InfoButton />
          </>
        );
      case 'group-ask':
        return <GroupAsk />;
      default:
        return (
          <>
            <Notice />
            <InfoButton />
          </>
        );
    }
  };

  return <InfoListStyle>{handleRender()}</InfoListStyle>;
};

export default InfoContent;
