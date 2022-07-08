import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import DetailImg from '../../components/detail/DetailImg';
import DetailTitle from '../../components/detail/DetailTitle';

function DetailPage() {
	const [list, setList] = useState([]);
	const { id } = useParams();
	useEffect(() => {
		axios.get('https://bobbykjh.github.io/card.json').then((res) => {
			setList(res.data);
		});
	}, []);
	return (
		<div>
			{list
				.filter((res) => String(res.id) === id)
				.map((res) => (
					<>
						<DetailTitle group={res.group} theme={res.theme} Package={res.package} title={res.name} price={res.price} />
						<DetailImg img={res.img} />
					</>
				))}
		</div>
	);
}

export default DetailPage;
