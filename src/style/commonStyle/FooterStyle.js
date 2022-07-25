import styled from 'styled-components';

export const FooterStyle = styled.div`
  box-sizing: border-box;
  width: 100%;
  min-height: 685px;
  background-color: #383838;
  border: 1px solid black;
  font-family: 'Pretendard';
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 21px;
  .footer-contents {
    position: relative;
    margin: 0 auto;
    width: 100%;
    max-width: 1440px;
    color: white;
    a {
      color: #fff;
      text-decoration: none;
    }
    ul,
    p {
      margin: 0;
    }
    .footer-menu {
      display: flex;
      width: 100%;
      justify-content: space-between;
      margin: 50px 0 20px;
      .footer-terms {
        list-style: none;
        align-items: center;
        display: flex;
        padding: 0;
        li {
          margin-right: 20px;
        }
      }
      .footer-sns {
        list-style: none;
        display: flex;
        align-items: center;
        li {
          margin-left: 23px;
          &:first-child {
            margin-left: 0;
          }
        }
      }
    }
    section {
      margin-top: 20px;
      display: flex;
      .footer-info {
        margin-right: 165px;
        p {
          margin-bottom: 10px;
          strong {
            font-weight: 700;
            font-size: 26px;
            line-height: 31px;
          }
        }
      }
      .footer-account {
        p {
          margin-bottom: 10px;
          strong {
            font-weight: 700;
            font-size: 20px;
            line-height: 24px;
          }
          &:last-child {
            margin-top: 14px;
          }
        }
      }
    }
    .footer-licensee {
      margin: 20px 0 30px;
      font-style: normal;
    }
    .footer-guide {
      margin-bottom: 30px;
    }
    button {
      position: absolute;
      left: 50%;
      top: 539px;
      transform: translate(-50%, -50%);
      background-color: #383838;
      color: #fff;
      border: 1px solid #fff;
      font-family: 'Pretendard';
      font-style: normal;
      font-weight: 700;
      font-size: 12px;
      line-height: 14px;
      width: 516px;
      height: 46px;
    }
  }
`;
