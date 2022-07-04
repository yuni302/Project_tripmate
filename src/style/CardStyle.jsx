import styled from 'styled-components';

// 기본 Card Style(그룹별 다크)
export const BasicCard = styled.div`
	position: relative;
	display: inline-block;
	box-sizing: border-box;
	overflow: hidden;
	background: #ffffff;
	border: 1px solid #ececec;
	border-radius: 8px;
	width: 336px;
	height: 503px;
	margin: 0 12px;
	img {
		width: 336px;
		height: 315px;
		margin-bottom: 20px;
	}
	h1 {
		word-wrap: break-word;
		font-size: 20px;
		font-weight: 600;
		margin: 10px 0;
	}
	h2 {
		display: block;
		word-wrap: break-word;
		font-size: 18px;
		font-weight: 400;
		margin: 0;
	}
	/* h1 과 나눈이유는 다른 card 에서 사용할 때 필요하기 때문 */
	h3 {
		position: absolute;
		font-size: 20px;
		font-weight: 600;
		bottom: 20px;
	}
	span {
		display: inline-block;
		font-size: 16px;
		background: #e9f7ff;
		color: #0080c6;
		margin: 0 4px;
		padding: 5px 14px;
		border-radius: 30px;
		&:first-child {
			margin-left: 0;
		}
	}
	div {
		margin: 0 20px;
	}
`;
