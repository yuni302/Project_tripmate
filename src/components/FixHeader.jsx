import React from 'react';
import { ReactComponent as Logo } from '../img/Vector-1.svg';
import { ReactComponent as G } from '../img/Vector.svg';

import { FixHeaderStyle } from '../style/HeaderStyle';

function FixHeader() {
	return (
		<FixHeaderStyle>
			<div>
				<h1>
					{/* 고투게더 LOGO */}
					<Logo />
					<G />
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
					<span>고객센터</span>
				</h2>
			</div>
		</FixHeaderStyle>
	);
}

export default FixHeader;
