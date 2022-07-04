import styled from 'styled-components';

export const FooterStyle = styled.div`
	width: 100%;
	max-height: 685px;
	display: block;
	background-color: #383838;
	border: 1px solid black;
	font-family: 'Pretendard';
	font-style: normal;
	font-weight: 500;
	font-size: 18px;
	line-height: 21px;
	.footer-contents {
		display: block;
		margin: 0 auto;
		width: 100%;
		max-width: 1440px;
		color: white;
		a {
			color: #fff;
			text-decoration: none;
		}
		.footer-nav {
			display: flex;
			width: 100%;
			justify-content: space-between;
			.footer-terms {
				display: flex;
				li {
					margin: 50px 20px 20px 0;
				}
			}
			.footer-sns {
				display: flex;
				margin-top: 50px;
				li {
					margin-left: 23px;
					&:first-child {
						margin-left: 0;
					}
				}
			}
		}

		h2 {
			margin-bottom: 20px;
		}
		.section1 {
			display: flex;
			margin: 20px 0 20px;
			.footer-info {
				margin-right: 165px;
				p {
					margin-bottom: 10px;
					strong {
						font-weight: 700;
						font-size: 26px;
						line-height: 31px;
					}
				}
			}
			.footer-account {
				p {
					margin-bottom: 10px;
					strong {
						font-weight: 700;
						font-size: 20px;
						line-height: 24px;
					}
					&:last-child {
						margin-top: 14px;
					}
				}
			}
		}
		.section2 {
			.footer-licensee {
				margin-bottom: 30px;
			}
			.footer-guide {
				margin-bottom: 30px;
			}
			.footer-copyright {
				margin-bottom: 50px;
			}
		}
		button {
			display: block;
			background-color: #383838;
			color: #fff;
			margin: 50px auto 100px;
			border: 1px solid #fff;
			font-family: 'Pretendard';
			font-style: normal;
			font-weight: 700;
			font-size: 12px;
			line-height: 14px;
			padding: 16px 214px;
		}
	}
`;
