import styled from 'styled-components';

// common
export const NomalTxt = styled.p`
  font-weight: 600;
  font-size: 20px;
  line-height: 24px;
  color: #1b1b1b;
`;
export const Line = styled.hr`
  background-color: #afafaf;
  height: 1px;
  border: 0;
  width: 328px;
  margin: 30px 0;
`;
export const SelectBox = styled.div`
  width: 368px;
  height: 100%;
  background: #ffffff;
  padding: 20px;
  margin: -20px 0 559px 0;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  position: sticky;
  top: 0;
  .person-count {
    color: #afafaf;
  }
`;

// Date
export const Date = styled.div`
  p {
    margin-bottom: 30px;
  }
  div {
    display: flex;
    justify-content: space-between;
    margin-bottom: 24px;
    p {
      color: #888888;
      font-weight: 500;
      font-size: 18px;
      line-height: 21px;
      margin: 0;
    }
  }
  button {
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto;
    padding: 0;
    width: 328px;
    height: 60px;
    border-radius: 4px;
    border: 1px solid #0080c6;
    box-sizing: border-box;
    background-color: #fff;
    color: #0080c6;
    font-size: 18px;
    font-weight: 500;
    line-height: 21px;
    cursor: pointer;
    :disabled {
      border: 1px solid #afafaf;
      color: #afafaf;
    }
  }
`;

// Personnel
export const TitleTxt = styled(NomalTxt)`
  margin-bottom: 24px;
`;
export const PersonBox = styled.div`
  display: flex;
  justify-content: space-between;
  + div {
    margin-top: 24px;
  }
  div {
    .age {
      font-weight: 500;
      font-size: 16px;
      line-height: 19px;
      color: #888888;
      margin-bottom: 6px;
    }
    .price {
      font-weight: 600;
      font-size: 20px;
      line-height: 24px;
      color: #1b1b1b;
      width: 180px;
    }
  }
`;

// Count
export const CountBox = styled.div`
  font-family: 'Pretendard';
  display: felx;
  align-items: center;
  text-align: center;
  button {
    background-color: transparent;
    border: none;
    cursor: pointer;
    padding: 0;
    svg {
      path,
      circle {
        stroke: #1b1b1b;
      }
    }
  }
  button.non {
    svg {
      path,
      circle {
        stroke: #afafaf;
      }
    }
  }
  p {
    width: 38px;
    height: 21px;
    font-weight: 500;
    font-size: 18px;
    line-height: 21px;
    color: #1b1b1b;
    text-align: center;
  }
  p.non {
    color: #afafaf;
  }
`;

// dropdown
export const DropMenu = styled.div`
  font-family: 'Pretendard';
  margin-top: 20px;
  .dropdown {
    width: 328px;
    .dropdown-btn {
      background: #ffffff;
      width: 100%;
      height: 60px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 0 20px;
      border: 1px solid #afafaf;
      border-radius: 4px;
      cursor: pointer;
      margin-top: 20px;
      p {
        width: 100%;
        font-weight: 500;
        font-size: 16px;
        line-height: 19px;
        color: #888888;
        text-align: left;
      }
    }
    .active {
      border: 1px solid #0080c6;
      img {
        transform: scaleY(-1);
      }
    }
  }

  .dropdown-content {
    background: #ffffff;
    box-shadow: 0px 5px 20px rgba(0, 0, 0, 0.1);
    position: absolute;
    width: 328px;
    border-radius: 0 0 4px 4px;
    .dropdown-item {
      width: 100%;
      background-color: transparent;
      border: none;
      height: 80px;
      padding: 16px 20px;
      cursor: pointer;
      border-bottom: 1px solid #888888;
      &:last-child {
        border: none;
      }
      p {
        text-align: left;
      }
      .option-title {
        color: #afafaf;
        font-weight: 500;
        font-size: 16px;
        line-height: 19px;
        margin-bottom: 8px;
      }
      .option-price {
        color: #1b1b1b;
        font-weight: 600;
        font-size: 18px;
        line-height: 21px;
      }
    }
  }
`;

// option
export const ChoiceBox = styled.div`
  width: 328px;
  margin-top: 20px;
  div {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .choice-sub {
    .choice-title {
      font-weight: 500;
      font-size: 16px;
      line-height: 19px;
      color: #888888;
      margin-top: 8px;
    }
    button {
      background-color: transparent;
      border: none;
      cursor: pointer;
    }
  }
  .price-count {
    margin-top: 16px;
    .choice-price {
      font-weight: 600;
      font-size: 20px;
      line-height: 24px;
      color: #1b1b1b;
    }
  }
`;

// total
export const Total = styled.div`
  font-family: 'Pretendard';
  .total-price {
    color: #0080c6;
    font-weight: 700;
    font-size: 26px;
    line-height: 31px;
    text-align: right;
    margin-top: 26px;
  }
  .point {
    color: #afafaf;
    font-weight: 500;
    font-size: 18px;
    line-height: 21px;
    text-align: right;
    margin-top: 8px;
  }
  .select-btn {
    margin-top: 24px;
    display: flex;
    justify-content: space-between;
    button {
      border-radius: 4px;
      cursor: pointer;
    }
    .cart-add {
      background-color: transparent;
      border: 1px solid #afafaf;
      width: 60px;
      height: 60px;
      align-items: center;
    }
    .reservation {
      border: none;
      background: #0080c6;
      color: #ffffff;
      width: 256px;
      height: 60px;
      font-weight: 600;
      font-size: 20px;
      line-height: 24px;
      text-align: center;
      :disabled {
        background: #afafaf;
      }
    }
  }
`;
