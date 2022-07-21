import React, { useState } from 'react';
import { InfoListStyle } from 'style/myPageStyle/MyPageListStyle';
import { ButtonModify } from './MyPage';
import MyPageKeyword from './MyPageKeyword';
import MyPagePrivacy from './MyPagePrivacy';

const MyPageInfo = () => {
  const [btn, setBtn] = useState('keyword');

  const onClickHandeler = (e) => {
    setBtn(e.target.name);
    for (let i = 0; i < ButtonModify.length; i += 1) {
      e.target.parentNode.childNodes[i].className = 'btn';
    }
    e.target.classList.add('active');
  };

  const ModifyType = ButtonModify.map((data, index) => (
    <button
      key={data[0]}
      type="button"
      name={data[0]}
      className={index === 0 ? 'btn active' : 'btn'}
      onClick={onClickHandeler}
    >
      {data[1]}
    </button>
  ));

  return (
    <InfoListStyle>
      <div className="btn-group">{ModifyType}</div>
      {btn === 'keyword' && <MyPageKeyword />}
      {btn === 'info' && <MyPagePrivacy />}
    </InfoListStyle>
  );
};

export default MyPageInfo;
