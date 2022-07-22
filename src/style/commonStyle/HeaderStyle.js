import styled, { keyframes } from 'styled-components';

export const dropDown = keyframes`
  0%{
    opacity: 0.1;
  }
  to{
    opacity: 1;
  }

`;

export const HeaderStyle = styled.div`
  position: relative;
  box-sizing: border-box;
  font-family: 'Pretendard';
  background-color: #fff;
  display: block;
  width: 100%;
  z-index: 99;
  hr {
    margin: 0;
    border-top: 1px solid #d9d9d9;
  }

  div {
    ${({ distance }) => (distance ? `margin-bottom:0px;` : `margin-bottom:85px;`)}
  }
  .header-max {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 85px;
    background: #fff;
    margin: 0;
    ${({ distance }) => (distance ? `position: relative;` : `position: fixed; top: 0;`)}
  }

  .header {
    display: flex;
    width: 100%;
    margin: 0 auto;
    justify-content: right;
    max-width: 1130px;
    box-sizing: border-box;
    max-height: 58px;
    background-color: #ffffff;
    top: 0;
    &:hover {
      background-color: #fff;
    }
    span {
      position: relative;
      margin-top: 55px;
    }
    button {
      border: none;
      background: #fff;
    }
    .my-page {
      display: flex;
      text-align: center;
      align-items: center;
      color: #929292;
      font-size: 14px;
      margin: 0 10px;
      padding: 20px 0;
      cursor: pointer;
      max-height: 54px;
      box-sizing: border-box;
      .sign-out {
        background: #fff;
        border: none;
        font-size: 14px;
        color: #929292;
        padding: 0;
      }
    }
    .sign-btn {
      display: flex;
      justify-content: center;
      align-items: center;
      border: none;
      background: #fff;
      font-size: 14px;
      color: #929292;
      padding: 0;
    }
  }
  #header {
    display: inline-flex;
    width: 100%;
    margin: 0 auto;
    justify-content: center;
    box-sizing: border-box;
    max-height: 85px;
    background-color: #ffffff;
    transition: 1s;
    max-width: 1440px;
    &:hover {
      background-color: #fff;
    }

    h1 {
      width: 20%;
      max-width: 415px;
      display: flex;
      justify-content: center;
      align-items: flex-end;
      text-align: center;
      padding: 20px 0 10px 0;
      cursor: pointer;
      &:focus {
        background-color: #000;
      }
    }

    .content {
      position: relative;
      width: 15%;
      max-width: 189px;
      text-align: center;
      top: 0;
      span {
        display: block;
        color: #1b1b1b;
        font-size: 18px;
        max-height: 85px;
        font-weight: 700;
        padding: 49px 0 20px 0;
        cursor: pointer;
      }
      // position absolute
      div {
        position: absolute;
        display: flex;
        flex-direction: column;
        width: 100%;
        border: none;
        top: 60px;
      }
      /* DropDown */
      a {
        nav {
          display: none;
          animation: ${dropDown} 0.5s;
          font-weight: 500;
          font-size: 16px;
          transition: 0.5s;
          padding: 20px 0;
          background-color: #ffffff;
          color: #1b1b1b;
          cursor: pointer;
        }
      }
      a:last-child {
        nav {
          border-bottom-left-radius: 8px;
          border-bottom-right-radius: 8px;
        }
      }
      &:hover {
        span {
          border-bottom: 4px solid #0080c6;
          color: #0080c6;
          z-index: 100;
        }
        nav {
          display: block;
          &:hover {
            background-color: #0080c6;
            color: #fff;
          }
        }
      }
    }
  }
`;

export const MobileHeaderStyle = styled(HeaderStyle)`
  .header {
    justify-content: space-between;
    align-items: center;
    h1 {
      cursor: pointer;
    }
    div {
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 10px 0;
      div {
        padding: 0 10px;
        cursor: pointer;
        z-index: 99;
      }
    }
  }
  .mobile {
    ${({ mobile }) => (mobile ? `margin-bottom:0px;` : `margin-bottom:34px;`)}
  }
  .header {
    .header-nav {
      margin: 0;
      .nav {
        display: flex;
        justify-content: center;
        align-items: center;
        margin: 0;
        height: 32px;
      }
    }
    div {
      div {
        margin-top: 0;
        button {
          background: #fff;
          border: none;
          padding: 0;
          cursor: pointer;
        }
      }
    }
  }
  #header {
    justify-content: center;
    align-items: center;
    max-width: 992px;
    top: 0;
    ${({ mobile }) => (mobile ? `position:relative;` : `position:fixed;`)}
    .content {
      max-height: 34px;
      width: 20%;
      max-width: 200px;
      span {
        padding: 10px 0;
        max-height: 34px;
        font-size: 14px;
      }
      nav {
        padding: 10px 0;
        background: #fff;
        font-size: 14px;
      }
    }
  }
`;
