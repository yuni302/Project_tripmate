import React from 'react';
import DropDownStyle from 'style/informationStyle/DropDownStyle';
import oneononeItem from './informationItems/oneononeItem';
import DropDown from './DropDown';

const OneOnOne = () => {
  const oneOnOneList = oneononeItem.map((data, index) => (
    <div className="wrap" key={data.title}>
      <div className="number">{index + 1}</div>
      <div className="title">{data.title}</div>
      <div className="date">{data.date}</div>
      <DropDown>
        <DropDownStyle>
          <div className="more-content">{data.content}</div>
        </DropDownStyle>
      </DropDown>
    </div>
  ));
  return <div>{oneOnOneList}</div>;
};

export default OneOnOne;
