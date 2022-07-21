import React, { useState } from 'react';

import MyPageInfo from './MyPageInfo';
import MyPagePoint from './MyPagePoint';
import MyPageReservation from './MyPageReservation';
import MyPageWish from './MyPageWish';

import { ButtonList } from './MyPage';

const MyPageButton = () => {
  const [btn, setBtn] = useState('reservation');

  const onClickHandeler = (e) => {
    setBtn(e.target.name);
    for (let i = 0; i < ButtonList.length; i += 1) {
      e.target.parentNode.childNodes[i].className = 'btn';
    }
    e.target.classList.add('active');
  };

  const ButtonType = ButtonList.map((data, index) => (
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
    <div>
      <div className="btn-list">{ButtonType}</div>
      <hr />
      {btn === 'reservation' && <MyPageReservation />}
      {btn === 'wish' && <MyPageWish />}
      {btn === 'point' && <MyPagePoint />}
      {btn === 'information' && <MyPageInfo />}
    </div>
  );
};

export default MyPageButton;
