import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { MainTitle } from '../../../style/mainstyle/GroupStyle';
import { ThemeSlider } from '../../../style/mainstyle/ThemeStyle';
import { NormalCard } from '../../../style/commonstyle/CardStyle';
import Card from '../../common/Card';

function Theme() {
	// 슬라이드 설정
	const settings = {
		className: 'center',
		infinite: true,
		slidesToShow: 4,
		slidesToScroll: 1,
		swipeToSlide: true,
		centerpadding: 0,
		arrows: true,
		rows: 1,
	};

	const [item, setItem] = useState([]);

	useEffect(() => {
		axios.get('https://bobbykjh.github.io/card.json').then((res) => setItem(res.data));
	}, []);

	function randomItem(array) {
		array.sort(() => Math.random() - 0.5);
	}
	randomItem(item);

	return (
		<>
			<MainTitle>이런 테마여행은 어떠세요?</MainTitle>
			<ThemeSlider {...settings}>
				{item.slice(0, 8).map((res) => (
					<NormalCard key={res.id}>
						<Card
							Img={res.img}
							Title={res.name}
							Price={res.price}
							Group={res.group}
							Theme={res.theme}
							Package={res.package}
						/>
					</NormalCard>
				))}
			</ThemeSlider>
		</>
	);
}

export default Theme;
