import React from 'react';

const Card = ({ Img, Title, Content, Price, Group, Theme, Style }) => {
  // 가격
  const PriceCommas = (num) => num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');

  return (
    <>
      <img src={Img} alt={Title} />
      <div>
        <span className="hash-tag">{Group}</span>
        <span className="hash-tag">{Theme}</span>
        <span className="hash-tag">{Style}</span>
        {/* 제목 */}
        <p className="title">{Title}</p>
        {/* 내용 */}
        <p className="content">{Content}</p>
        {/* 가격 */}
        <p className="price">{Price === undefined ? '가격문의' : `${PriceCommas(Price)}원`}</p>
      </div>
    </>
  );
};

export default Card;
