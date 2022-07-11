import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { CustomizedTitle, Box } from '../../../style/mainstyle/CustomizedStyle';
import { NormalCard } from '../../../style/CardStyle';
import Card from '../../card/Card';

function Customized() {
  const name = 'login';
  const [item, setItem] = useState([]);

  useEffect(() => {
    axios.get('https://bobbykjh.github.io/card.json').then((res) => setItem(res.data));
  }, []);

  return (
    <>
      <CustomizedTitle>
        {name === 'login' ? (
          <p>이미숙님의 성향에 맞는 추천 상품이에요!</p>
        ) : (
          <p>고객님의 성향에 맞는 상품을 찾아보세요!</p>
        )}
      </CustomizedTitle>
      <Box>
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
      </Box>
    </>
  );
}

export default Customized;
