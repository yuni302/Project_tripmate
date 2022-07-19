import styled from 'styled-components';

export const InfoNavStyle = styled.div`
  display: flex;
  button.information-nav {
    width: 320px;
    height: 60px;
    border: none;
    background: #ffffff;
    border-radius: 8px;
    font-weight: 500;
    font-size: 18px;
    line-height: 21px;
    text-align: center;
    color: #888888;
  }
  ${({ props }) =>
    `button#${props}{
      background: #0080c6;
      color: #ffffff;
    }`}
`;
