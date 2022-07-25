import React from 'react';
import DropDownStyle from 'style/informationStyle/DropDownStyle';
import frequentItem from './informationItems/frequentItem';
import DropDown from './DropDown';

const Frequent = () => {
  const frequentList = frequentItem.map((data, index) => (
    <div className="wrap" key={data.title}>
      <div className="number">{index + 1}</div>
      <div className="title">{data.title}</div>
      <div className="date">{data.date}</div>
      <DropDown>
        <DropDownStyle>
          <div className="more-content">
            {data.content.split('\n').map((line) => (
              <p>{line}</p>
            ))}
          </div>
        </DropDownStyle>
      </DropDown>
    </div>
  ));
  return <div>{frequentList}</div>;
};

export default Frequent;
