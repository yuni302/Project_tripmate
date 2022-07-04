import React from 'react';

function Card({ Img, Title, Content = '', Price, Group, Theme, Package }) {
	return (
		<>
			<img src={Img} alt={Title} />
			<div>
				<span>{Group}</span>
				<span>{Theme}</span>
				<span>{Package}</span>

				<h1>
					{Title.length > 35 ? (
						<>
							{Title.slice(0, 35)}
							...
						</>
					) : (
						<>{Title.slice(0, 34)}</>
					)}
				</h1>

				<h2>
					{Content.length > 35 ? (
						<>
							{Content.slice(0, 35)}
							...
						</>
					) : (
						<>{Content.slice(0, 34)}</>
					)}
				</h2>

				<h3>{Price}원</h3>
			</div>
		</>
	);
}

export default Card;
