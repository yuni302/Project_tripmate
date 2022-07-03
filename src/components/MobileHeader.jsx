import React, { useEffect, useState } from 'react';
import { MobileHeaderStyle } from '../style/HeaderStyle';
import { ReactComponent as Mobile } from '../img/MobileLogo.svg';
import { ReactComponent as Login } from '../img/log-in.svg';
import { ReactComponent as User } from '../img/user.svg';
import { ReactComponent as Shopping } from '../img/shopping-bag.svg';
import { ReactComponent as Search } from '../img/search.svg';

function MobileHeader() {
	const [scroll, setScroll] = useState(0);
	const [fixed, setFixed] = useState('relative');

	function handleScroll() {
		if (scroll > 78) {
			setScroll(window.pageYOffset);
			setFixed('fixed');
		} else {
			setScroll(window.pageYOffset);
			setFixed('relative');
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
		<MobileHeaderStyle>
			<header className="header">
				<div>
					<div>
						<Search />
					</div>
					<div>
						<Shopping />
					</div>
				</div>
				<h1>
					<Mobile />
				</h1>
				<div>
					<div>
						<Login />
					</div>
					<div>
						<User />
					</div>
				</div>
			</header>
			<header id="header" style={{ position: fixed }}>
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
		</MobileHeaderStyle>
	);
}

export default MobileHeader;
