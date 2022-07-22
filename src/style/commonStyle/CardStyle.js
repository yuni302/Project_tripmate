import styled, { keyframes } from 'styled-components';

const AppearY = keyframes`
	0%{
		opacity: 0.5;
		margin-top: 50px;
	}
	100%{
		opacity: 1;
		margin-top: 0;
	}
`;

const AppearX = keyframes`
	0%{
		opacity: 0;
		margin-left: -10px;
	}
  
	100%{
		opacity: 1;
		margin-left: 24px;
	}
`;

// 맞춤 테마 카드
export const NormalCard = styled.div`
  animation: ${AppearY} 0.5s;
  display: inline-block;
  width: 302px;
  vertical-align: top;
  height: auto;
  border: none;
  margin: 0 12px 24px 12px;
  overflow: hidden;
  color: #000;
  background-color: #fff;
  img {
    width: 302px;
    height: 320px;
    border-radius: 8px;
    margin-bottom: 20px;
  }

  span:nth-child(1) {
    margin-left: 0;
  }
  span:nth-child(3) {
    margin-right: 0;
  }

  .title {
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    word-wrap: break-word; // ...
    -webkit-box-orient: vertical;
    font-weight: 700;
    font-size: 24px;
    line-height: 29px;
    color: #000;
  }
  .hash-tag {
    display: inline-block;
    background-color: #e9f7ff;
    color: #0080c6;
    border-radius: 30px;
    font-size: 14px;
    font-weight: 400;
    padding: 5px 14px;
    margin: 0 4px;
    margin-bottom: 10px;
    line-height: 19px;
  }
  .price {
    color: #000;
    font-size: 20px;
    font-weight: 600;
    margin-top: 10px;
  }
`;

// 그룹 카드
export const GroupCard = styled(NormalCard)`
  animation: ${AppearX} 0.5s;
  margin-left: 24px;
  margin-right: 0px;
  width: 336px;
  border: 1px solid #ececec;
  border-radius: 8px;
  background-color: #fff;
  color: #1b1b1b;

  filter: drop-shadow(0px 5px 20px rgba(0, 0, 0, 0.1));
  img {
    border-radius: 8px 8px 0px 0px;
    width: 336px;
    height: 315px;
  }
  div {
    margin: 0 20px;
    margin-bottom: 20px;
  }
  .title {
    font-size: 20px;
    font-weight: 600;
    line-height: 21px;
    -webkit-line-clamp: 2;
  }
  .content {
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 1;
    word-wrap: break-word; // ...
    -webkit-box-orient: vertical;
    color: #1b1b1b;
    font-size: 18px;
    font-weight: 400;
    line-height: 21px;
    margin-top: 10px;
  }
`;

// 뉴스 카드
export const NewsCard = styled(NormalCard)`
  width: 412px;
  margin: 0 12px;
  &:nth-child(1) {
    margin-left: 0;
  }
  &:nth-child(3) {
    margin-right: 0;
  }
  img {
    width: 412px;
    height: 232px;
    margin-bottom: 16px;
  }
  div {
    text-align: left;
    margin: 0 16px;
    margin-bottom: 30px;
  }
  .title {
    line-height: 21px;
    font-size: 20px;
    margin-bottom: 8px;
  }
  .content {
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    word-wrap: break-word; // ...
    -webkit-box-orient: vertical;
    font-weight: 500;
  }
  .hash-tag {
    display: none;
  }
  .price {
    display: none;
  }
`;

// 연관상품 카드
export const RelatedCard = styled(NormalCard)`
  width: 407px;
  border: 1px solid #afafaf;
  border-radius: 8px;
  margin: 0 12px;
  &:nth-child(1) {
    margin-left: 0;
  }
  &:nth-child(3) {
    margin-right: 0;
  }
  img {
    width: 405px;
    height: 301px;
    border-radius: 7px 7px 0px 0px;
  }
  div {
    text-align: left;
    margin: 0 20px;
  }
  .hash-tag {
    background-color: #e9f7ff;
    color: #0080c6;
  }
  .title {
    margin-bottom: 10px;
    -webkit-line-clamp: 1;
  }
  .content {
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 1;
    word-wrap: break-word; // ...
    -webkit-box-orient: vertical;
  }
  .price {
    margin-top: 10px;
    margin-bottom: 20px;
  }
  @media (max-width: 992px) {
    width: 90%;
    height: 218px;
    display: inline-flex;
    margin: 6px 0;
    img {
      width: 200px;
      height: 218px;
    }
    div {
      padding: 10px;
      margin: 0;
    }
  }
`;
