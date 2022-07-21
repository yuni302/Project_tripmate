import React from 'react';
import { PersonBox, CountBox } from 'style/productStyle/SelectStyle';
import { AddCommas } from '../../../utils';

import { ReactComponent as Plus } from '../../../img/Plus.svg';
import { ReactComponent as Minus } from '../../../img/Minus.svg';

const PersonCount = ({ available, title, price, count, setCount, setIsShow }) => {
  const onIncrease = () => {
    setCount((prevCount) => prevCount + 1);
  };
  const onDecrease = () => {
    if (count > 0) {
      setCount((prevCount) => prevCount - 1);
    }
  };

  return (
    <PersonBox>
      <div>
        <p className="age">{title}</p>
        <p className="price">{AddCommas(price)}원</p>
      </div>

      <CountBox>
        <button type="button" className={available || setIsShow ? null : 'non'}>
          <Minus alt="icon-minus" onClick={onDecrease} />
        </button>
        <p className={available || setIsShow ? null : 'non'}>{count}</p>
        <button type="button" className={available || setIsShow ? null : 'non'}>
          <Plus alt="icon-plus" onClick={onIncrease} />
        </button>
      </CountBox>
    </PersonBox>
  );
};

export default PersonCount;
