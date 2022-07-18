import styled from 'styled-components';

export const KeywordMainStyle = styled.div`
  position: relative;
  width: 551px;
  height: 659px;
  margin: auto;
  text-align: center;
`;

export const FormStyle = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  button#add-info {
    border: none;
    background: none;
  }
  .choose {
    max-width: 100%;
    margin: auto;
  }
  .page {
    font-weight: 600;
    font-size: 20px;
    line-height: 24px;
    color: #afafaf;
  }
  .title {
    font-weight: 700;
    font-size: 24px;
    line-height: 29px;
    color: #1b1b1b;
    display: inline-block;
    margin-top: 8px;
    margin-bottom: 8px;
  }
  .add-info {
    position: relative;
    #hover-box {
      position: absolute;
      top: 12px;
      left: 51%;
      display: none;
      width: 358px;
      height: 243px;
      text-align: left;
      background: #ffffff;
      box-shadow: 0px 5px 20px rgba(0, 0, 0, 0.1);
      border-radius: 8px;
    }
    .box-name {
      display: inline-block;
      font-weight: 600;
      font-size: 18px;
      line-height: 21px;
      color: #1b1b1b;
      margin: 21px 0px 15px 20px;
    }
    .box-content {
      display: flex;
      flex-direction: column;
      margin: 0 0 0 20px;
      div {
        display: flex;
        flex-direction: column;
        margin-bottom: 14px;
        span {
          font-weight: 500;
          font-size: 16px;
          line-height: 19px;
          color: #888888;
        }
        span.box-content-title {
          display: inline-block;
          font-weight: 500;
          font-size: 16px;
          line-height: 19px;
          color: #1b1b1b;
          margin-bottom: 8px;
        }
      }
    }
  }
  .choose {
    div {
      margin: 24px 0;
      display: flex;
      align-content: center;
      label {
        font-weight: 600;
        font-size: 20px;
        line-height: 24px;
        color: #afafaf;
      }
      input {
        display: none;
      }
      input[type='radio']:disabled + label {
        color: #afafaf;
        opacity: 0.3;
      }
      input[type='checkbox']:disabled + label {
        color: #afafaf;
        opacity: 0.3;
      }
      input[type='checkbox'] + label {
        display: flex;
        span {
          margin-right: 12px;
          display: inline-block;
          width: 24px;
          height: 24px;
          background-image: url("data:image/svg+xml,%3Csvg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Crect x='0.5' y='0.5' width='23' height='23' rx='3.5' fill='white' stroke='%23AFAFAF'/%3E%3C/svg%3E%0A");
        }
      }
      input[type='checkbox']:checked + label {
        color: #0080c6;
        span {
          background-image: url("data:image/svg+xml,%3Csvg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Crect x='0.5' y='0.5' width='23' height='23' rx='3.5' fill='white' stroke='%230080C6'/%3E%3Cpath d='M7 10.6L11.6538 15L18 9' stroke='%230080C6' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E%0A");
        }
      }
      input[type='radio'] + label {
        display: flex;
        span {
          margin-right: 12px;
          display: inline-block;
          width: 24px;
          height: 24px;
          background-image: url("data:image/svg+xml,%3Csvg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle cx='12' cy='12' r='11.5' fill='white' stroke='%23AFAFAF'/%3E%3C/svg%3E%0A");
        }
      }
      input[type='radio']:checked + label {
        color: #0080c6;
        span {
          background-image: url("data:image/svg+xml,%3Csvg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle cx='12' cy='12' r='11.5' fill='white' stroke='%230080C6'/%3E%3Ccircle cx='12' cy='12' r='7' fill='%230080C6'/%3E%3C/svg%3E%0A");
        }
      }
    }
  }
`;
