import styled from 'styled-components';

export const InfoButtonStyle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 100px 0;
  .button {
    border: none;
    background-color: #ffffff;
  }
  .page {
    width: 200px;
    text-align: center;
    margin: 0 20px;
    span {
      font-weight: 700;
      font-size: 24px;
      line-height: 29px;
      text-align: center;
      color: #0080c6;
    }
    .total-page {
      color: #afafaf;
    }
  }
`;
