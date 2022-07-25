import styled, { keyframes } from 'styled-components';
import { GroupCard } from 'style/commonStyle/CardStyle';

const AppearY = keyframes`
	0%{
		opacity: 0;
		margin-top: 50px;
	}
	100%{
		opacity: 1;
		margin-top: 0;
	}
`;

// Random Page
export const LoginInfo = styled.div`
  margin: 13px auto 30px;
  display: flex;
  width: 1280px;
  p {
    font-weight: 400;
    font-size: 18px;
    line-height: 21px;
    color: #afafaf;
    margin: 3px 0 0 10px;
  }
`;

// Group, Theme, Area Page
export const ButtonList = styled.div`
  width: 100%;
  margin: 0 auto;
`;

// Group, Area Button
export const NormalButton = styled.div`
  display: flex;
  justify-content: center;
  button {
    box-sizing: border-box;
    font-family: 'Pretendard';
    display: flex;
    align-items: center;
    justify-content: center;
    width: 214px;
    height: 60px;
    cursor: pointer;
    color: #888;
    background-color: #fff;
    border: none;
    font-size: 18px;
    font-weight: 500;
    line-height: 21px;
  }
  .active {
    background-color: #0080c6;
    color: #fff;
    border-radius: 8px;
  }
`;

export const ThemeButton = styled(NormalButton)`
  button {
    width: 256px;
  }
`;

export const ListBox = styled.div`
  width: 1440px;
  justify-content: center;
  text-align: center;
  margin: 30px auto;
`;

export const ListCard = styled(GroupCard)`
  animation: ${AppearY} 0.5s;
  width: 406px;
  border: 1px solid #afafaf;
  margin: 0 15px 30px 15px;
  filter: none;
  text-align: start;
  &:hover {
    border: 1px solid #0080c6;
  }
  img {
    width: 406px;
    height: 302px;
  }
  .hash-tag {
    font-size: 16px;
  }
  .title {
    line-height: 24px;
  }
  .content {
    color: #1b1b1b;
  }
  .price {
    font-weight: 600;
  }
`;

// PageNation
export const Page = styled.div`
  display: flex;
  width: 340px;
  margin: 70px auto 100px;
  justify-content: center;
  align-items: center;
  .first-page {
    color: #0080c6;
    margin: 0 7px 0 75px;
  }
  .last-page {
    margin-right: 70px;
    color: #afafaf;
  }
  span {
    font-weight: 700;
    font-size: 24px;
    width: 200px;
  }
  div {
    display: inline-block;
  }
`;
