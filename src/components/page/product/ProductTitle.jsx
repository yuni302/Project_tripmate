import React from 'react';
import { ReactComponent as Share } from 'img/Share.svg';
import { ReactComponent as Heart } from 'img/HeartFilled.svg';
import { ProductTitleStyle } from 'style/productStyle/ProductStyle';
import { groupList, styleList, themeList } from 'utils';

const ProductTitle = ({ group, theme, style, title, price }) => {
  const PriceCommas = (num) => num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');

  return (
    <ProductTitleStyle>
      <div>
        <span className="hash-tag">{groupList(group)}</span>
        <span className="hash-tag">{themeList(theme)}</span>
        <span className="hash-tag">{styleList(style)}</span>
        <p className="title">{title}</p>
        <p className="price">{price === undefined ? '가격문의 ~ ' : `${PriceCommas(price)}원 ~ `}</p>
      </div>
      <div>
        <button type="button">
          <Share />
        </button>
        <button type="button">
          <Heart />
        </button>
      </div>
    </ProductTitleStyle>
  );
};

export default ProductTitle;
