import React, { useEffect, useState } from 'react';
import { ReactComponent as Logo } from '../img/logo.svg';
import { HeaderStyle } from '../style/HeaderStyle';
import FixHeader from './FixHeader';

function Header() {
	const [scroll, setScroll] = useState(0);
	const [show, setShow] = useState(false);

	function handleScroll() {
		if (scroll > 118) {
			setScroll(window.pageYOffset);
			setShow(true);
		} else {
			setScroll(window.pageYOffset);
			setShow(false);
		}
	}

	useEffect(() => {
		function scrollListener() {
			window.addEventListener('scroll', handleScroll);
		} //  window 에서 스크롤을 감시 시작
		scrollListener(); // window 에서 스크롤을 감시
		return () => {
			window.removeEventListener('scroll', handleScroll);
		}; //  window 에서 스크롤을 감시를 종료
	});

	return (
		<>
			<HeaderStyle>
				<div>
					<h3>로그인</h3>
					<h3>장바구니</h3>
					<h3>마이페이지</h3>
				</div>
				<div>
					<h1>
						<Logo />
					</h1>
					<h2>
						<span>추천 여행 상품</span>
						<div>
							<nav>문화탐방</nav>
							<nav>휴양지</nav>
							<nav>골프여행</nav>
							<nav>트레킹</nav>
							<nav>성지순례</nav>
						</div>
					</h2>
					<h2>
						<span>그룹별 여행</span>
						<div>
							<nav>2030끼리</nav>
							<nav>4050끼리</nav>
							<nav>6070끼리</nav>
							<nav>여자끼리</nav>
							<nav>남자끼리</nav>
							<nav>자녀동반</nav>
						</div>
					</h2>
					<h2>
						<span>테마별 여행</span>
						<div>
							<nav>문화탐방</nav>
							<nav>휴양지</nav>
							<nav>골프여행</nav>
							<nav>트레킹</nav>
							<nav>성지순례</nav>
						</div>
					</h2>
					<h2>
						<span>지역별 여행</span>
						<div>
							<nav>1</nav>
							<nav>1</nav>
							<nav>1</nav>
						</div>
					</h2>
					<h2>
						<span>고객 센터</span>
					</h2>
				</div>
			</HeaderStyle>

			{show && <FixHeader />}
		</>
	);
}

export default Header;
