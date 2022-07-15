import React from 'react';

const Card = ({ img, title, content, price, group, theme, style }) => {
  // 가격
  const PriceCommas = (num) => num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');

  return (
    <>
      <img src={img} alt={title} />
      <div>
        <span className="hash-tag">{group}</span>
        <span className="hash-tag">{theme}</span>
        <span className="hash-tag">{style}</span>
        {/* 제목 */}
        <p className="title">{title}</p>
        {/* 내용 */}
        <p className="content">{content}</p>
        {/* 가격 */}
        <p className="price">{price === undefined ? '가격문의' : `${PriceCommas(price)}원`}</p>
      </div>
    </>
  );
};

export default Card;
