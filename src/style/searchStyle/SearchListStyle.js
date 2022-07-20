import styled, { keyframes } from 'styled-components';

// export const SearchListStyle = styled.div`
//   border: 3px solid red;
//   ${({ isSearch }) => (isSearch ? `margin-bottom:605px;` : `margin-bottom:0px;`)};
// `;

export const SearchListStyle = styled.div`
  width: 1280px;
  margin: 101px auto 60px;
  .search-result {
    font-weight: 700;
    font-size: 26px;
    line-height: 31px;
    color: 1b1b1b;
  }
  .destination {
    margin-top: 39px;
  }
  .companion {
    margin-top: 20px;
  }
  p {
    font-weight: 500;
    font-size: 18px;
    line-height: 21px;
    color: #888;
  }
  input {
    margin-top: 12px;
    box-sizing: border-box;
    width: 1280px;
    height: 60px;
    border-radius: 4px;
    border: 0.97885px solid #afafaf;
    font-weight: 500;
    font-size: 18px;
    color: #afafaf;
    padding: 20px;
    ::placeholder {
      color: #afafaf;
    }
  }
  .btn-wrap {
    display: flex;
    button:first-child {
      margin-left: 0;
    }
    button {
      margin: 13px 0 0 10px;
      width: 150px;
      height: 60px;
      background-color: #fff;
      border: 1px solid #afafaf;
      border-radius: 4px;
      font-size: 18px;
      color: #afafaf;
    }
    .active {
      border-color: #0080c6;
      color: #0080c6;
    }
    .check {
      background-color: #0080c6;
      border: none;
      font-weight: 700;
      font-size: 20px;
      color: #ffffff;
      margin-left: 179px;
    }
  }
`;

export const Blank = styled.div`
  position: relative;
  display: block;
  height: 605px;
`;
