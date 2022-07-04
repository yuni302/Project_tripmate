import React from 'react';

function Card({ Img, Title, Content = '', Price, Group, Theme, Package }) {
	return (
		<>
			<img src={Img} alt={Title} />
			<div>
				<span className="hashTag">{Group}</span>
				<span className="hashTag">{Theme}</span>
				<span className="hashTag">{Package}</span>
				{/* 제목 */}
				<h1 className="title">{Title}</h1>
				{/* 내용 */}
				<h2 className="content">{Content}</h2>
				{/* 가격 */}
				<h3 className="price">{Price}원</h3>
			</div>
		</>
	);
}

export default Card;
