import React from 'react';
import DropDownStyle from 'style/informationStyle/DropDownStyle';
import noticeItem from './informationItems/noticeItem';
import DropDown from './DropDown';

const Notice = () => {
  const noticeList = noticeItem.map((data, index) => (
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
  return <div>{noticeList}</div>;
};

export default Notice;
