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
	box-sizing: border-box;
	display: block;
	width: 100%;
	background-color: #fff;
	position: relative;
	z-index: 99;
	div {
		display: flex;
		width: 100%;
		max-width: 1440px;
		margin: 0 auto;
		justify-content: right;
		box-sizing: border-box;
		max-height: 58px;

		h1 {
			width: 25%;
			display: flex;
			justify-content: center;
			align-items: center;
			text-align: center;
			padding: 20px 0;
			cursor: pointer;
		}

		h2 {
			position: relative;
			width: 15%;
			text-align: center;
			span {
				display: block;
				color: #1b1b1b;
				font-size: 18px;
				font-weight: 700;
				padding: 20px 0;
				cursor: pointer;
			}
			div {
				position: absolute;
				display: flex;
				flex-direction: column;
				border: none;
			}
			/* DropDown */
			nav {
				display: none;
				animation: ${dropDown} 0.5s;
				font-weight: 500;
				font-size: 20px;
				transition: 0.5s;
				padding: 20px;
				background-color: #fff;
				color: #1b1b1b;
				z-index: 50;
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

		h3 {
			display: inline-block;
			text-align: center;
			width: 10%;
			color: #929292;
			font-size: 16px;
			padding: 20px 0;
			cursor: pointer;
		}
	}
`;

export const FixHeaderStyle = styled(HeaderStyle)`
	position: fixed;
	top: 0;
	background-color: rgb(255, 255, 255, 0.9);
	div {
		max-width: 100%;
		h2 {
			nav {
				background-color: rgb(255, 255, 255, 0.8);
			}
		}
	}
	h1 {
		padding: 10px;
		display: inline-block;
	}
`;
