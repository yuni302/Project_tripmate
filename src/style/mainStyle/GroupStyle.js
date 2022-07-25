import styled from 'styled-components';

export const GroupContainer = styled.div`
  margin: 0 auto;
  margin-top: 100px;
  width: 1280px;
  height: 595px;
`;
export const ThemeContainer = styled.div`
  margin: 100px auto;
  width: 1280px;
`;
export const Section = styled.div`
  display: flex;
`;
export const Box = styled.div`
  display: block;
`;

export const MainTitle = styled.p`
  font-family: 'Pretendard';
  color: #000000;
  font-weight: 600;
  font-size: 30px;
  line-height: 36px;
  margin: 0 0 30px 0;
`;
export const ButtonGroup = styled.div`
  display: flex;
  flex-direction: column;
  button {
    font-family: 'Pretendard';
    display: flex;
    align-items: center;
    justify-content: center;
    width: 195px;
    height: 84px;
    cursor: pointer;
    color: #afafaf;
    background-color: #f5f5f5;
    border-radius: 8px;
    border: none;
    padding: 0;
    font-size: 20px;
    font-weight: 500;
    line-height: 24px;
    margin: 0;
  }
  .active {
    background-color: #0080c6;
    color: #ffffff;
  }
`;

export const CardList = styled.div`
  margin-left: 5px;
`;
