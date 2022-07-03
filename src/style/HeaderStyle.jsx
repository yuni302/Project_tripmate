import styled, { keyframes } from 'styled-components';

export const dropDown = keyframes`
  0%{
    opacity: 0.1;
  }
  to{
    opacity: 1;
  }

`;

export const HeaderStyle = styled.div`
	position: relative;
	box-sizing: border-box;
	font-family: 'Pretendard';
	background-color: #fff;
	display: block;
	width: 100%;
	z-index: 99;
	hr {
		margin: 0;
		border-top: 1px solid #d9d9d9;
	}
	.header {
		display: flex;
		width: 100%;
		margin: 0 auto;
		justify-content: right;
		max-width: 1360px;
		box-sizing: border-box;
		max-height: 58px;
		background-color: #ffffff90;
		transition: 1s;
		top: 0;
		&:hover {
			background-color: #fff;
		}
		h3 {
			display: inline-block;
			text-align: center;
			width: 10%;
			color: #929292;
			font-size: 14px;
			padding: 20px 0;
			cursor: pointer;
			max-height: 54px;
			box-sizing: border-box;
			&:hover {
				border-bottom: 4px solid #929292;
			}
		}
	}
	#header {
		display: flex;
		width: 100%;
		margin: 0 auto;
		justify-content: center;
		box-sizing: border-box;
		max-height: 58px;
		background-color: #ffffff90;
		transition: 1s;
		top: 0;
		&:hover {
			background-color: #fff;
		}

		h1 {
			width: 25%;
			max-width: 415px;
			display: flex;
			justify-content: center;
			align-items: center;
			text-align: center;
			padding: 20px 0;
			cursor: pointer;
			&:focus {
				background-color: #000;
			}
		}

		h2 {
			position: relative;
			width: 15%;
			max-width: 189px;
			text-align: center;
			span {
				display: block;
				color: #1b1b1b;
				font-size: 16px;
				font-weight: 700;
				padding: 20px 0;
				cursor: pointer;
			}
			// position absolute
			div {
				position: absolute;
				display: flex;
				flex-direction: column;
				width: 100%;
				border: none;
				top: 60px;
			}
			/* DropDown */
			nav {
				display: none;
				animation: ${dropDown} 0.5s;
				font-weight: 500;
				font-size: 16px;
				transition: 0.5s;
				padding: 20px 0;
				background-color: #ffffff;
				color: #1b1b1b;
				cursor: pointer;
				&:last-child {
					border-bottom-left-radius: 8px;
					border-bottom-right-radius: 8px;
				}
			}

			&:hover {
				span {
					border-bottom: 4px solid #0080c6;
					color: #0080c6;
					z-index: 100;
				}
				nav {
					display: block;
					&:hover {
						background-color: #0080c6;
						color: #fff;
					}
				}
			}
		}
	}
`;

export const MobileHeaderStyle = styled(HeaderStyle)`
	.header {
		justify-content: space-between;
		align-items: center;
		h1 {
			cursor: pointer;
		}
		div {
			display: flex;
			justify-content: center;
			align-items: center;
			padding: 10px 0;
			div {
				padding: 0 10px;
				cursor: pointer;
			}
		}
	}
	#header {
		justify-content: center;
		align-items: center;
		max-width: 992px;
		h2 {
			max-height: 34px;
			width: 20%;
			max-width: 200px;
			span {
				padding: 10px 0;
				max-height: 34px;
				font-size: 14px;
			}
			nav {
				padding: 10px 0;
				font-size: 14px;
			}
		}
	}
`;
