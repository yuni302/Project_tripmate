import React, { useEffect, useState } from 'react';
import { ReactComponent as Logo } from '../img/logo.svg';
import { HeaderStyle } from '../style/HeaderStyle';
import MobileHeader from './MobileHeader';

function Header() {
	const [scroll, setScroll] = useState(0);
	const [mode, setMode] = useState(window.innerWidth);
	const [fixed, setFixed] = useState('relative');

	function handleScroll() {
		if (scroll > 118) {
			setScroll(window.pageYOffset);
			setFixed('fixed');
		} else {
			setScroll(window.pageYOffset);
			setFixed('relative');
		}
	}
	function handleMode() {
		setMode(window.innerWidth);
	}

	useEffect(() => {
		function scrollListener() {
			window.addEventListener('scroll', handleScroll);
		}
		// 화면 width 값이 바뀌면 리렌더링
		window.addEventListener('resize', handleMode);
		console.log(window.innerWidth);
		scrollListener(); // window 에서 스크롤을 감시
		return () => {
			window.removeEventListener('scroll', handleScroll);
			window.removeEventListener('resize', handleMode);
		}; //  window 에서 스크롤을 감시를 종료
	}, [scroll, mode, fixed]);

	return (
		<div>
			{mode > 992 ? (
				<HeaderStyle>
					<header className="header">
						<h3>로그인</h3>
						<h3>장바구니</h3>
						<h3>마이페이지</h3>
					</header>
					<hr />

					<header id="header" style={{ position: fixed }}>
						<h1>
							<Logo />
						</h1>
						<h2>
							<span>추천 여행 상품</span>
						</h2>
						<h2>
							<span>그룹별 여행</span>
							<nav>2030끼리</nav>
							<nav>4050끼리</nav>
							<nav>6070끼리</nav>
							<nav>여자끼리</nav>
							<nav>남자끼리</nav>
							<nav>자녀동반</nav>
						</h2>
						<h2>
							<span>테마별 여행</span>
							<nav>문화탐방</nav>
							<nav>휴양지</nav>
							<nav>골프여행</nav>
							<nav>트레킹</nav>
							<nav>성지순례</nav>
						</h2>
						<h2>
							<span>지역별 여행</span>
						</h2>
						<h2>
							<span>고객 센터</span>
						</h2>
					</header>
				</HeaderStyle>
			) : (
				<MobileHeader />
			)}
		</div>
	);
}

export default Header;
