import React, { useState, useEffect } from 'react';
import { AddCommas } from 'utils';
import axios from 'axios';
import { CartTitleTxt, ItemHistory, AddSubSelect } from 'style/addStyle/AddCartStyle';

import { ReactComponent as CheckBox } from 'img/CheckBox.svg';

const CartItem = ({ itemNum }) => {
  const [list, setList] = useState([]);

  useEffect(() => {
    const getList = async () => {
      try {
        const res = await axios.post('https://stfe-gotogether.herokuapp.com/product/a/getList');
        setList(res.data.productList);
      } catch (err) {
        console.error('Error : ', err);
      }
    };
    getList();
  }, []);

  const AddItem = list
    .filter((item) => item.productNum === itemNum)
    .map((item) => (
      <div className="cart-item">
        <div>
          <button type="button" className="add-btn">
            <CheckBox />
          </button>
        </div>
        <img src={item.image[0]} alt="cart-img" />

        <ItemHistory>
          <CartTitleTxt>{item.title}</CartTitleTxt>
          <div className="sub-box">
            <div className="cart-subtitle">
              <div>기간</div> <span>2022년 12월 24일 ~ 2022년 12월 30일</span>
            </div>
            <div className="cart-subtitle">
              <div>인원</div> <span>성인 1명, 아동 1명, 유아 1명</span>
            </div>
            <div className="cart-opthion">
              <div>옵션 1</div> <span>인천 출발 비상구석 또는 일반석 앞열 1개</span>
            </div>
            <div className="cart-opthion">
              <div>옵션 2</div> <span>인천 출발 비상구석 또는 일반석 앞열 1개</span>
            </div>
          </div>
        </ItemHistory>

        <AddSubSelect>
          <div className="correction-btn">
            <button type="button">수정</button>
            <button type="button">삭제</button>
          </div>
          <button type="button" className="item-select">
            예약하기
          </button>
          <p className="item-price">
            상품 금액<span>{AddCommas(Number(item.price))}원</span>
          </p>
        </AddSubSelect>
      </div>
    ));

  return <div>{AddItem}</div>;
};

export default CartItem;
