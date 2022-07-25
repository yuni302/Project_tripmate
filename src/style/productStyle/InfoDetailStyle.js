import styled, { css } from 'styled-components';

export const DetailStyle = styled.div`
  width: 911px;
  border-right: 1px solid #afafaf;
  padding-top: 10px 40px 0 0;
  .abstract {
    width: 871px;
    span {
      font-size: 26px;
      font-weight: 700;
    }
    img {
      width: 871px;
      margin: 40px 0 50px 0;
    }
  }
  .diff-info {
    display: flex;
    flex-direction: column;
    span {
      font-size: 26px;
      font-weight: 700;
    }
    img {
      max-width: 870px;
    }
  }
`;

export const NavStyle = styled.div`
  background-color: #fff;
  display: flex;
  width: 871px;
  ${({ fix }) => (fix ? `position: fixed; top:0;` : `position: relative;`)}

  button {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 145px;
    height: 60px;
    border: none;
    border-top-left-radius: 8px;
    border-top-right-radius: 8px;
    color: #888888;
    font-size: 18px;
  }
  .active {
    background-color: #0080c6;
    color: #fff;
  }
`;
export const InfoStyle = styled.div`
  ${({ fix }) => (fix ? `margin-top: 60px;` : null)}
  scroll-margin-top:60px;

  div:nth-child(2) {
    margin-top: 0;
  }
  span {
    font-size: 26px;
    font-weight: 700;
    display: block;
    margin: 100px 0 40px 0;
  }
  img {
    width: 871px;
  }
  .add-terms {
    margin-top: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    a {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 205px;
      height: 60px;
      font-size: 18px;
      font-weight: 500;
      border: 1px solid #0080c6;
      border-radius: 4px;
      background-color: #fff;
      color: #0080c6;
      &:hover {
        background-color: #0080c6;
        color: #fff;
      }
    }
  }
  #review {
    span {
      font-size: 20px;
      font-weight: 600;
    }
  }
`;
