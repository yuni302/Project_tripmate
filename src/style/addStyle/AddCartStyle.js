import styled from 'styled-components';

// common
export const CartTitleTxt = styled.p`
  font-weight: 700;
  font-size: 26px;
  line-height: 31px;
  color: #000000;
`;

export const AddCartStyle = styled.div`
  width: 1280px;
  margin: 0 auto;
  .add-cart-title {
    margin: 100px 0px 60px 0;
    p {
      span {
        margin-right: 10px;
        color: #0080c6;
        font-weight: 700;
      }
    }
  }

  .all-choice {
    font-weight: 600;
    font-size: 24px;
    line-height: 29px;
    color: #1b1b1b;
    span {
      font-weight: 600;
      font-size: 24px;
      line-height: 29px;
      color: #0080c6;
    }
  }
  .all-price {
    text-align: center;
    font-weight: 700;
    font-size: 26px;
    line-height: 31px;
    color: #1b1b1b;
    margin: 60px 0;
    span {
      font-weight: 700;
      font-size: 26px;
      line-height: 31px;
      color: #0080c6;
    }
  }
  .result-item-select {
    display: flex;
    justify-content: center;
    button {
      width: 150px;
      height: 60px;
      background: #afafaf;
      border-radius: 4px;
      font-weight: 600;
      font-size: 20px;
      line-height: 24px;
      text-align: center;
      color: #ffffff;
      border: none;
      text-align: center;
      margin-bottom: 100px;
      cursor: pointer;
    }
    button.active {
      background: #0080c6;
    }
    .active {
      background: #0080c6;
    }
  }
`;

export const ChoiceAdd = styled.div`
  .all-check {
    display: flex;
    align-items: center;
    p {
      font-weight: 600;
      font-size: 24px;
      line-height: 29px;
      color: #1b1b1b;
      text-align: center;
    }
  }
  .cart-item-box {
    width: 1280px;
    height: 100%;
    border-top: 1px solid #afafaf;
    border-bottom: 1px solid #afafaf;
    margin: 30px 0;
  }
  .cart-item {
    display: flex;
    width: 100%;
    height: 100%;
    padding: 30px 0;
    img {
      width: 191px;
      height: 191px;
      margin-right: 30px;
      border-radius: 8px;
    }
    + div {
      width: 1280px;
      border-top: 1px solid #afafaf;
    }
  }
  .null-item {
    padding: 60px 0;
    text-align: center;
    p {
      font-weight: 700;
      font-size: 24px;
      line-height: 29px;
      color: #1b1b1b;
    }
    img {
      margin: 20px 0;
    }
    .product-btn {
      width: 206px;
      height: 60px;
      background: #0080c6;
      border-radius: 4px;
      font-weight: 700;
      font-size: 20px;
      line-height: 24px;
      text-align: center;
      color: #ffffff;
      margin-top: 30px;
    }
  }

  /* checkbox */
  button {
    background-color: transparent;
    border: none;
    padding: 0;
    cursor: pointer;
  }
  .all-btn,
  .add-btn {
    margin-right: 30px;
    svg {
      rect,
      path {
        stroke: #afafaf;
      }
    }
  }

  .delete-choice {
    width: 146px;
    height: 60px;
    background: #ffffff;
    border: 1px solid #afafaf;
    border-radius: 4px;
    font-weight: 500;
    font-size: 18px;
    line-height: 21px;
    text-align: center;
    color: #afafaf;
    margin-bottom: 100px;
    cursor: pointer;
  }
`;

export const ItemHistory = styled.div`
  flex: 1;
  p {
    margin-bottom: 3px;
  }
  .cart-subtitle,
  .cart-opthion {
    display: flex;
    align-items: center;
    margin-top: 7px;
    div {
      width: 74px;
      height: 25px;
      border-radius: 3px;
      font-weight: 500;
      font-size: 18px;
      line-height: 21px;
      text-align: center;
      padding: 2px 0;
      margin-right: 20px;
    }
  }
  .cart-subtitle {
    div {
      background: #0080c6;
      color: #ffffff;
    }
    span {
      font-weight: 500;
      font-size: 18px;
      line-height: 21px;
      color: #1b1b1b;
    }
  }
  .cart-opthion {
    div {
      color: #0080c6;
      border: 1px solid #0080c6;
    }
    span {
      font-weight: 500;
      font-size: 18px;
      line-height: 21px;
      color: #808080;
    }
  }
`;

export const AddSubSelect = styled.div`
  margin-right: 30px;
  text-align: right;
  .correction-btn {
    display: flex;
    justify-content: right;
    button {
      font-weight: 500;
      font-size: 18px;
      line-height: 21px;
      text-align: center;
      color: #afafaf;
    }
    button + button {
      margin-left: 20px;
    }
  }
  .item-select {
    width: 143px;
    height: 60px;
    background: #0080c6;
    border-radius: 4px;
    font-weight: 500;
    font-size: 18px;
    line-height: 21px;
    text-align: center;
    color: #ffffff;
    margin: 15px 0px 61px 0px;
    cursor: pointer;
  }
  .item-price {
    display: flex;
    font-weight: 700;
    font-size: 24px;
    line-height: 29px;
    color: #1b1b1b;

    span {
      width: 156px;
      height: 29px;
      font-weight: 700;
      font-size: 24px;
      line-height: 29px;
      color: #0080c6;
      margin-left: 20px;
    }
  }
`;
