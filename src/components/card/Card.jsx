import React from 'react';

function Card({ Img, Title, Content, Price, Group, Theme, Package }) {
	return (
		<>
			<img src={Img} alt={Title} />
			<div>
				<span className="hash-tag">{Group}</span>
				<span className="hash-tag">{Theme}</span>
				<span className="hash-tag">{Package}</span>
				{/* 제목 */}
				<p className="title">{Title}</p>
				{/* 내용 */}
				<p className="content">{Content}</p>
				{/* 가격 */}
				<p className="price">{Price}원</p>
			</div>
		</>
	);
}

export default Card;
