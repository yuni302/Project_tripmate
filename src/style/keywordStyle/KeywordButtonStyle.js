import styled from 'styled-components';

export const KeywordButtonStyle = styled.div`
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  margin-top: 50px;
  display: flex;
  button {
    margin: 0 6px;
    width: 152px;
    height: 60px;
    color: #fff;
    font-size: 20px;
    font-weight: 600;
    background-color: #0080c6;
    border: none;
    border-radius: 8px;
  }
  button:disabled {
    background-color: #afafaf;
  }
`;
