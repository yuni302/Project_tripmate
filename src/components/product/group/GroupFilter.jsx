import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Box } from '../../../style/GroupStyle';
import { BasicCard } from '../../../style/CardStyle';
import Card from '../../card/Card';

function GroupFilter({ content }) {
	const [item, setItem] = useState([]);

	useEffect(() => {
		axios.get('https://bobbykjh.github.io/card.json').then((res) => setItem(res.data));
	}, []);

	function randomItem(array) {
		array.sort(() => Math.random() - 0.5);
	}
	randomItem(item);

	return (
		<Box>
			{item
				.filter((res) => res.group === content)
				.slice(0, 3)
				.map((res) => (
					<BasicCard key={res.id}>
						<Card
							Img={res.img}
							Title={res.name}
							Content={res.content}
							Price={res.price}
							Group={res.group}
							Theme={res.theme}
							Package={res.Package}
						/>
					</BasicCard>
				))}
		</Box>
	);
}

export default GroupFilter;
