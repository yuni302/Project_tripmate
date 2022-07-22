import styled from 'styled-components';

export const MyPageStyle = styled.div`
  width: 1440px;
  margin: 0 auto;
  margin-bottom: 100px;
  .myPage {
    display: block;
    margin: 85px 0 43px 80px;
    font-size: 26px;
    font-weight: 700;
  }
  .btn-list {
    display: flex;
    margin: 0 auto;
    justify-content: center;
  }
  .btn {
    display: block;
    width: 320px;
    height: 60px;
    border-radius: 8px;
    border: none;
    background: #fff;
    font-size: 18px;
    font-weight: 500;
    color: #afafaf;
    cursor: pointer;
  }
  .active {
    background-color: #0080c6;
    color: #ffffff;
  }
  hr {
    margin: 20px auto;
    width: 1280px;
  }
`;
