import styled from 'styled-components';

export const GroupAskStyle = styled.div`
  .group-wrap {
    width: 1280px;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 100px;
  }
  .title {
    text-align: center;
    font-weight: 700;
    font-size: 24px;
    line-height: 29px;
    color: #1b1b1b;
    margin-bottom: 60px;
  }

  label {
    display: flex;
    flex-direction: column;
    font-weight: 500;
    font-size: 18px;
    line-height: 21px;
    color: #888888;
    margin-bottom: 47px;
    input,
    select {
      width: 470px;
      height: 60px;
      font-size: 18px;
      margin-top: 10px;
      padding: 0 15px;
      border: 1px solid #afafaf;
      border-radius: 4px;
    }
  }
  div.terms {
    font-weight: 500;
    font-size: 18px;
    line-height: 21px;
    color: #888888;
    div {
      width: 470px;
      height: 200px;
      padding: 20px 20px 0 20px;
      border: 1px solid #afafaf;
      border-radius: 4px;
      overflow: scroll;
    }
    label.terms {
      margin-top: 10px;
      display: flex;
      flex-direction: row;
      align-items: center;
      p {
        margin-left: 10px;
        color: #afafaf;
      }
    }
    input {
      width: 20px;
      height: 20px;
      margin: 0;
    }
  }
  select option[disabled] {
    display: none;
  }
  select option[selected] {
    color: black;
  }
  button.submit {
    width: 150px;
    height: 60px;
    border: none;
    background: #0080c6;
    border-radius: 8px;
    margin: 0 auto;
    color: #fff;
  }
  button.submit[disabled] {
    background-color: #afafaf;
  }
`;
