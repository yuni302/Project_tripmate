import React, { useState, useEffect } from 'react';
import { SelectBox, NomalTxt, Line, Date, TitleTxt, Total } from 'style/productStyle/SelectStyle';
import PersonCount from './PersonCount';
import SelectDefalut from './SelectDefalut';
import CartAdd from '../../../img/CartAdd.svg';

const Select = ({ price, start, deadline, available, current }) => {
  const [none, setNone] = useState(0);

  // scroll
  const [scroll, setScroll] = useState(0);
  const [fix, setFix] = useState(false);

  // scroll
  const handleScroll = () => {
    if (scroll > 993) {
      setScroll(window.pageYOffset);
      setFix(true);
    } else {
      setScroll(window.pageYOffset);
      setFix(false);
    }
  };

  useEffect(() => {
    // window 에서 스크롤을 감시 시작
    const watch = () => {
      window.addEventListener('scroll', handleScroll);
    };
    watch(); // window 에서 스크롤을 감시
    return () => {
      //  window 에서 스크롤을 감시를 종료
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scroll, fix]);

  return available ? (
    <SelectDefalut available={available} price={price} deadline={deadline} current={current} start={start} />
  ) : (
    <SelectBox>
      <Date>
        <NomalTxt>선택 날짜</NomalTxt>
        <button type="button" disabled="disabled">
          선택 불가
        </button>
      </Date>

      <Line />

      <TitleTxt>인원 선택</TitleTxt>

      <PersonCount available={available} title="성인" price={0} count={0} setCount={setNone} />
      <PersonCount available={available} title="아동(만2세 ~ 12세 미만)" price={0} count={0} setCount={setNone} />
      <PersonCount available={available} title="유아(만2세 미만)" price={0} count={0} setCount={setNone} />

      <Line />

      <Total>
        <NomalTxt>총 금액</NomalTxt>
        <div className="total-price">가격문의</div>
        <div className="point">결제 완료 시 0포인트 적립 예정</div>

        <div className="select-btn">
          <button type="button" className="cart-add">
            <img src={CartAdd} alt="cart-add-icon" />
          </button>
          <button type="button" className="reservation" disabled="disabled">
            예약하기
          </button>
        </div>
      </Total>
    </SelectBox>
  );
};

export default Select;
