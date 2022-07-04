import styled from 'styled-components';

// 기본 Card Style(그룹별 카드)
export const GroupCard = styled.div`
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
	.title {
		word-wrap: break-word;
		font-size: 20px;
		font-weight: 600;
		margin: 10px 0;
		overflow: hidden;
		white-space: nowrap;
		text-overflow: ellipsis;
	}
	.content {
		word-wrap: break-word;
		font-size: 18px;
		font-weight: 400;
		margin: 0;
		text-overflow: ellipsis;
		overflow: hidden;
		word-break: break-word;
		display: -webkit-box;
		-webkit-line-clamp: 2; // 원하는 라인수
		-webkit-box-orient: vertical;
	}
	/* h1 과 나눈이유는 다른 card 에서 사용할 때 필요하기 때문 */
	.price {
		position: absolute;
		font-size: 20px;
		font-weight: 600;
		bottom: 20px;
	}
	.hash-tag {
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
