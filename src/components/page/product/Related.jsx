import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
// Component
import Card from 'components/common/Card';
// Styled - component
import { RelatedCard } from 'style/commonStyle/CardStyle';
import { RelatedStyle } from 'style/productStyle/ProductStyle';

const Related = ({ group, theme, style, title }) => {
  const [list, setList] = useState([]);

  const randomItem = (array) => array.sort(() => Math.random() - 0.5);

  randomItem(list);

  useEffect(() => {
    const getList = async () => {
      try {
        const res = await axios.post('https://stfe-gotogether.herokuapp.com/product/a/getList');
        if (res.status !== 200) throw new Error("Can't find news");
        setList(res.data.productList);
      } catch (e) {
        console.error(e);
      }
    };

    getList();
  }, []);

  // 같은 카드 리스트는 없도록 한다.
  const List = list.filter((item) => item.title !== title);

  return (
    <RelatedStyle>
      <p className="related-title">이 상품과 비슷한 연관 상품이에요</p>
      <div className="related-card">
        {List.filter((item) => item.group === group || item.theme === theme || item.style === style)
          .slice(0, 3)
          .map((item) => (
            <Link to={`/list/${item.productNum}`} key={item.productNum}>
              <RelatedCard>
                <Card
                  img={item.image[0]}
                  title={item.title}
                  group={item.group}
                  theme={item.theme}
                  style={item.style}
                  content={item.contents}
                  price={item.price}
                />
              </RelatedCard>
            </Link>
          ))}
      </div>
    </RelatedStyle>
  );
};

export default Related;
