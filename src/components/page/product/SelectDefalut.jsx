import React, { useState, useEffect } from 'react';
import { SelectBox, NomalTxt, Line, Date, TitleTxt, Total } from 'style/productStyle/SelectStyle';
import DropDown from './DropDown';
import PersonCount from './PersonCount';
import { AddCommas } from '../../../utils';

import CartAdd from '../../../img/CartAdd.svg';

const BUSINESS_DATA = [
  { id: 0, title: '비즈니스 또는 비상구 좌석', subtitle: '인천출발 비즈니석 추가비용', value: 300000 },
  { id: 1, title: '비즈니스 또는 비상구 좌석', subtitle: '부산출발 비즈니석 추가비용', value: 200000 },
];
const ADDROOM_DATA = [{ id: 0, title: '객실 1인 사용료', subtitle: '1인 싱글룸 사용시 추가비용', value: 650000 }];

const SelectDefalut = ({ available, productNum, price, deadline, current, start }) => {
  const [isShow, setIsShow] = useState(true);
  const body = { productNum };

  // scroll
  const [scroll, setScroll] = useState(0);
  const [fix, setFix] = useState(false);

  // date
  const year = start.toString().slice(0, 4);
  const month = start.toString().slice(4, 6);
  const day = start.toString().slice(6, 8);

  // 인원선택 count 수
  const [adult, setAdult] = useState(1);
  const [child, setChild] = useState(0);
  const [baby, setBaby] = useState(0);
  const [none, setNone] = useState(0);

  // 옵션 선택 count 수, 가격
  const [room, setRoom] = useState(0);
  const [business, setBusiness] = useState(0);
  const [optionpPrice, setOpthonPrice] = useState(0);
  const [roomPrice, setRoomPrice] = useState(0);

  // price
  const [total, setTotal] = useState(0);
  const [point, setPoint] = useState(0);
  const AdultPrice = price;
  const ChildPrice = AdultPrice / 2;
  const BabyPrice = Math.round(AdultPrice / 6 / 1000) * 1000;

  const PERSON_TOTAL = adult * AdultPrice + child * ChildPrice + baby * BabyPrice;
  const OPTIOPN_TOTAL = optionpPrice * room + optionpPrice * business;

  useEffect(() => {
    setTotal(PERSON_TOTAL + OPTIOPN_TOTAL);
    setPoint(total / 1000);
  }, [adult, child, baby, room, business, optionpPrice, total]);

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

  const saveSelect = () => {
    // 작동 확인을 위한 코드
    console.log(adult, child, baby, room, business, total, point);
  };

  const saveCart = () => {
    // 작동 확인을 위한 코드
    console.log(body);
  };

  return isShow ? (
    <SelectBox>
      {/* 달력에서 날짜 선택 */}
      <Date>
        <NomalTxt>선택 날짜</NomalTxt>
        <div>
          <p>
            {year}년 {month}월 {day}일
          </p>
          <p>
            예약 {current}명/ 정원 {deadline}명
          </p>
        </div>
        <button type="button">날짜 다시 선택하기</button>
      </Date>

      <Line />

      <TitleTxt>인원 선택</TitleTxt>

      <PersonCount title="성인" price={AdultPrice} count={adult} setCount={setAdult} setIsShow={setIsShow} />
      <PersonCount
        title="아동(만2세 ~ 12세 미만)"
        price={ChildPrice}
        count={child}
        setCount={setChild}
        setIsShow={setIsShow}
      />
      <PersonCount title="유아(만2세 미만)" price={BabyPrice} count={baby} setCount={setBaby} setIsShow={setIsShow} />

      <Line />

      <DropDown
        title="객실 1인 사용료"
        data={ADDROOM_DATA}
        count={room}
        setCount={setRoom}
        setOpthonPrice={setRoomPrice}
        optionpPrice={roomPrice}
      />
      <DropDown
        title="비즈니스 또는 비상구 좌석"
        data={BUSINESS_DATA}
        count={business}
        setCount={setBusiness}
        setOpthonPrice={setOpthonPrice}
        optionpPrice={optionpPrice}
      />

      <Total>
        <NomalTxt>총 금액</NomalTxt>
        <div className="total-price">{AddCommas(total)}원</div>
        <div className="point">결제 완료 시 {point}포인트 적립 예정</div>

        <div className="select-btn">
          <button type="button" className="cart-add" onClick={saveCart}>
            <img src={CartAdd} alt="cart-add-icon" />
          </button>
          <button type="button" className="reservation" onClick={saveSelect}>
            예약하기
          </button>
        </div>
      </Total>
    </SelectBox>
  ) : (
    <SelectBox>
      <Date>
        <NomalTxt>선택 날짜</NomalTxt>
        <button type="button">날짜 먼저 선택하기</button>
      </Date>

      <Line />

      <TitleTxt>인원 선택</TitleTxt>

      <PersonCount available={available} title="성인" price={0} count={0} setCount={setNone} />
      <PersonCount available={available} title="아동(만2세 ~ 12세 미만)" price={0} count={0} setCount={setNone} />
      <PersonCount available={available} title="유아(만2세 미만)" price={0} count={0} setCount={setNone} />

      <Line />

      <DropDown isShow={isShow} title="객실 1인 사용료" />
      <DropDown isShow={isShow} title="비즈니스 또는 비상구 좌석" />

      <Total>
        <NomalTxt>총 금액</NomalTxt>
        <div className="total-price">0원</div>
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

export default SelectDefalut;
