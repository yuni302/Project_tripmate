import React, { useEffect, useState } from 'react';
import { ReactComponent as Logo } from '../img/logo.svg';
import { HeaderStyle } from '../style/HeaderStyle';
import MobileHeader from './MobileHeader';

function Header() {
	const [scroll, setScroll] = useState(0);
	const [mode, setMode] = useState(window.innerWidth);
	const [fixed, setFixed] = useState('relative');

	// 스크롤 위치에 따른 position 변경
	function handleScroll() {
		if (scroll > 118) {
			setScroll(window.pageYOffset);
			setFixed('fixed');
		} else {
			setScroll(window.pageYOffset);
			setFixed('relative');
		}
	}

	// 화면 크기에 따른 리렌더링
	function handleMode() {
		setMode(window.innerWidth);
	}

	useEffect(() => {
		// 화면 width 값이 바뀌면 리렌더링
		window.addEventListener('resize', handleMode);
		// scroll 값에 따라 relative fixed 변경
		window.addEventListener('scroll', handleScroll);
		return () => {
			//  window 에서 스크롤을 감시를 종료
			window.removeEventListener('scroll', handleScroll);
			window.removeEventListener('resize', handleMode);
		};
	}, [scroll, mode, fixed]);

	return (
		<div>
			{/* 화면전환 */}
			{mode > 992 ? (
				<HeaderStyle>
					<header className="header">
						<p className="myPage">로그인</p>
						<p className="myPage">장바구니</p>
						<p className="myPage">마이페이지</p>
					</header>
					<hr />

					<header id="header" style={{ position: fixed }}>
						<h1>
							<Logo />
						</h1>
						<p className="content">
							<span>추천 여행 상품</span>
						</p>
						<p className="content">
							<span>그룹별 여행</span>
							<nav>2030끼리</nav>
							<nav>4050끼리</nav>
							<nav>6070끼리</nav>
							<nav>여자끼리</nav>
							<nav>남자끼리</nav>
							<nav>자녀동반</nav>
						</p>
						<p className="content">
							<span>테마별 여행</span>
							<nav>문화탐방</nav>
							<nav>휴양지</nav>
							<nav>골프여행</nav>
							<nav>트레킹</nav>
							<nav>성지순례</nav>
						</p>
						<p className="content">
							<span>지역별 여행</span>
							<nav>동남아/태평양</nav>
							<nav>인도/중앙아시아</nav>
							<nav>아프리카/중동</nav>
							<nav>유럽/코카서스</nav>
							<nav>중남미/북미</nav>
							<nav>대만/중국/일본</nav>
						</p>
						<p className="content info">
							<span>고객 센터</span>
							<nav>공지사항</nav>
							<nav>자주 묻는 질문</nav>
							<nav>1:1 문의</nav>
							<nav>단체 문의</nav>
						</p>
					</header>
				</HeaderStyle>
			) : (
				<MobileHeader />
			)}
		</div>
	);
}

export default Header;
