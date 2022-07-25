import React, { useState } from 'react';
import { DropMenu, NomalTxt, Line, CountBox, ChoiceBox } from 'style/productStyle/SelectStyle';
import { AddCommas } from '../../../utils';

import Down from '../../../img/Down.svg';
import CloseBtn from '../../../img/CloseBtn.svg';
import { ReactComponent as Plus } from '../../../img/Plus.svg';
import { ReactComponent as Minus } from '../../../img/Minus.svg';

const DropDown = ({ available, title, data, count, setCount, setOpthonPrice, optionpPrice }) => {
  const [isActive, setIsActive] = useState(false);
  const [selected, setSelected] = useState(title);
  const [open, setOpen] = useState(false);
  const [subtitle, setSubtitle] = useState('');

  const onIncrease = () => {
    setCount((prevCount) => prevCount + 1);
  };
  const onDecrease = () => {
    if (count > 1) {
      setCount((prevCount) => prevCount - 1);
    }
  };

  const onClose = () => {
    setSelected(title);
    setOpen(false);
    setCount(0);
  };

  const onDisable = () => {
    if (available === false) {
      setIsActive(false);
    } else {
      setIsActive(!isActive);
    }
  };

  return (
    <>
      <DropMenu>
        <NomalTxt>{title}(선택)</NomalTxt>
        <div className="dropdown">
          <button
            type="button"
            className={isActive === true ? 'dropdown-btn active' : 'dropdown-btn'}
            onClick={onDisable}
          >
            <p>{selected}</p>
            <img src={Down} alt="down-icon" />
          </button>
          {isActive && (
            <div>
              <div className="dropdown-content">
                {data.map((el) => (
                  <button
                    type="button"
                    className="dropdown-item"
                    onClick={() => {
                      setSelected(setOpen(true));
                      setSelected(el.subtitle);
                      setSubtitle(el.subtitle);
                      setOpthonPrice(el.value);
                      setIsActive(false);
                      setCount(1);
                    }}
                    key={el.id}
                  >
                    <p className="option-title" value={subtitle}>
                      {el.subtitle}
                    </p>
                    <p className="option-price" value={el.value}>
                      {AddCommas(el.value)}원
                    </p>
                  </button>
                ))}
              </div>
            </div>
          )}
          {open && (
            <ChoiceBox>
              <div className="choice-sub">
                <p className="choice-title">{subtitle}</p>
                <button type="button" onClick={onClose}>
                  <img src={CloseBtn} alt="close-btn" />
                </button>
              </div>
              <div className="price-count">
                <p className="choice-price">{AddCommas(optionpPrice)}원</p>
                <CountBox>
                  <button type="button">
                    <Minus alt="icon-minus" onClick={onDecrease} />
                  </button>
                  <p>{count}</p>
                  <button type="button">
                    <Plus alt="icon-plus" onClick={onIncrease} />
                  </button>
                </CountBox>
              </div>
            </ChoiceBox>
          )}
        </div>
      </DropMenu>
      <Line />
    </>
  );
};

export default DropDown;
