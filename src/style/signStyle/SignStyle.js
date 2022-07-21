import styled from 'styled-components';

export const SignInStyle = styled.div`
  display: block;
  justify-content: center;
  align-items: center;
  text-align: center;
  .title {
    display: block;
    margin: 100px auto 20px auto;
    font-size: 26px;
    font-weight: 700;
    color: #000;
  }
  .sub-title {
    display: block;
    margin: 0 auto 60px auto;
    font-size: 18px;
    font-weight: 500;
    color: #1b1b1b;
  }

  .container {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 185px;
    .box {
      margin: 0 20px;
      width: 490px;
      height: 463px;
      background: #fff;
      box-shadow: 0px 5px 20px rgba(0, 0, 0, 0.1);
      border-radius: 8px;
      .log-in {
        display: block;
        margin: 60px auto 25px auto;
        font-size: 26px;
        font-weight: 700;
        color: #1b1b1b;
      }
      .sub-log-in {
        display: flex;
        justify-content: left;
        align-items: center;
        margin: 5px auto;
        width: 370px;
        height: 60px;
        padding: 20px;
        padding-left: 68px;
        font-size: 18px;
        font-weight: 500;
        border: 1px solid #afafaf;
        background-color: #fff;
        border-radius: 4px;
        color: #1b1b1b;
        font-size: 18px;
        font-weight: 500;
        p {
          display: flex;
          justify-content: center;
          align-items: center;
          p {
            margin-left: 20px;
          }
        }
      }
      .input {
        display: block;
        border-radius: 4px;
        margin: 5px auto;
        width: 370px;
        height: 60px;
        padding: 20px;
        font-size: 18px;
        font-weight: 500;
        border: 0.97885px solid #afafaf;
      }
      .btn {
        display: block;
        margin: 5px auto;
        width: 370px;
        height: 60px;
        padding: 20px;
        font-size: 18px;
        font-weight: 500;
        border: 0.97885px solid #afafaf;
        background-color: #0080c6;
        color: #fff;
        border-radius: 4px;
      }
      .sign-up {
        display: block;
        margin-top: 60px;
        color: #1b1b1b;
        font-size: 18px;
        font-weight: 500;
        a {
          color: #0080c6;
        }
        span {
          color: #0080c6;
        }
      }
    }
  }

  @media (max-width: 1000px) {
    display: block;
    .title {
      font-size: 14px;
    }
    .sub-title {
      font-size: 12px;
    }

    .container {
      flex-direction: column;
      .box {
        margin: 5px auto;
        width: 300px;
        height: 287px;
        .log-in {
          font-size: 12px;
          margin: 30px auto 20px auto;
        }

        .input {
          width: 240px;
          height: 40px;
          font-size: 12px;
        }
        .btn {
          display: flex;
          justify-content: center;
          align-items: center;
          width: 240px;
          height: 40px;
          font-size: 14px;
        }
        .sign-up {
          font-size: 12px;
          font-weight: 400;
          margin: 34px auto 30px auto;
        }
        .sub-log-in {
          display: flex;
          justify-content: center;
          align-items: center;
          border-radius: 4px;
          width: 240px;
          height: 40px;
          font-size: 12px;
        }
      }
    }
  }
`;

export const SignUpStyle = styled.div`
  display: block;
  width: 470px;
  margin: 100px auto 118px auto;
  text-align: center;
  .title {
    text-align: center;
    font-size: 24px;
    font-weight: 700;
    margin-bottom: 60px;
  }
  .name {
    margin-top: 47px;
    display: block;
    text-align: left;
    color: #888;
    font-size: 18px;
    font-weight: 500;
  }
  .input {
    display: block;
    margin: 10px 0;
    width: 470px;
    height: 60px;
    padding: 20px;
    font-size: 18px;
    font-weight: 500;
    border: 0.98px solid #afafaf;
    border-radius: 4px;
  }
  .error {
    display: block;
    text-align: left;
    color: #ff0000;
  }

  select {
    display: inline-block;
    padding: 10px;
    width: 150px;
    height: 60px;
    margin-top: 10px 0 0 0;
  }
  .select {
    margin: 10px;
  }
  .type {
    width: 21px;
    height: 21px;
  }
  .gender {
    display: inline-flex;
    text-align: left;
    justify-content: center;
    align-items: center;
    margin-right: 22px;
    margin-top: 0;
    span {
      font-size: 18px;
      font-weight: 500;
      color: #afafaf;
    }
  }
  div {
    margin-top: 11px;
    text-align: left;
    input[type='radio'] {
      margin: 7.5px;
    }
  }
  button {
    display: block;
    width: 150px;
    height: 60px;
    border: none;
    border-radius: 8px;
    color: #fff;
    background-color: #0080c6;
    font-size: 20px;
    font-weight: 600;
    line-height: 23.87px;
    margin: 0 auto;
    margin-top: 60px;
    cursor: pointer;
    &:disabled {
      background: #000;
    }
  }
  .i {
    margin-top: 60px;
    font-weight: 500;
    font-size: 18px;
    color: #888;
    a {
      color: #0080c6;
    }
  }
`;

export const InputStyle = styled.input`
  width: 470px;
  height: 60px;
  padding: 20px;
`;
