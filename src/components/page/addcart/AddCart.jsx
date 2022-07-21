import React, { useState } from 'react';
import { AddCommas } from 'utils';
import { AddCartStyle, ChoiceAdd, CartTitleTxt } from 'style/addStyle/AddCartStyle';

import { ReactComponent as CheckBox } from 'img/CheckBox.svg';
import NullCart from 'img/NullCart.svg';
import CartItem from './CartItem';

const AddCart = () => {
  const [itemAdd, setItemAdd] = useState(true);

  const body = {
    productNum: 35,
  };

  return itemAdd ? (
    <AddCartStyle>
      <div className="add-cart-title">
        <CartTitleTxt>
          장바구니 <span>1</span>
        </CartTitleTxt>
      </div>

      <ChoiceAdd>
        <div>
          <div className="all-check">
            <button type="button" className="all-btn">
              <CheckBox type="chekbox" />
            </button>
            <p>전체 선택</p>
          </div>

          <div className="cart-item-box">
            <CartItem itemNum={body.productNum} />
          </div>
        </div>

        <button type="button" className="delete-choice">
          선택 삭제
        </button>
      </ChoiceAdd>

      <p className="all-choice">
        총 선택 상품 <span>999</span>
      </p>
      <p className="all-price">
        총 상품 금액 <span>{AddCommas(9999999)}원</span>
      </p>
      <div className="result-item-select">
        <button type="button">예약하기</button>
      </div>
    </AddCartStyle>
  ) : (
    <AddCartStyle>
      <div className="add-cart-title">
        <CartTitleTxt>
          장바구니 <span>0</span>
        </CartTitleTxt>
      </div>

      <ChoiceAdd>
        <div>
          <div className="all-check">
            <button type="button" className="all-btn">
              <CheckBox />
            </button>
            <p>전체 선택</p>
          </div>

          <div className="cart-item-box">
            <div className="null-item">
              <p>이런!</p>
              <img src={NullCart} alt="null-cart" />
              <p>장바구니에 담긴 상품이 없네요</p>
              <p>장바구니에 담을 상품을 둘러보세요!</p>
              <button type="button" className="product-btn">
                상품 보러가기
              </button>
            </div>
          </div>
        </div>
        <button type="button" className="delete-choice">
          선택 삭제
        </button>
      </ChoiceAdd>

      <p className="all-choice">
        총 선택 상품 <span>0</span>
      </p>
      <p className="all-price">
        총 상품 금액 <span>0원</span>
      </p>
      <div className="result-item-select">
        <button type="button">예약하기</button>
      </div>
    </AddCartStyle>
  );
};

export default AddCart;
