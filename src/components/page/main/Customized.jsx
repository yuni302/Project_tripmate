import axios from 'axios';
import Card from 'components/common/Card';
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { NormalCard } from 'style/commonStyle/CardStyle';
import { Box, CustomizedTitle } from 'style/mainStyle/CustomizedStyle';

const Customized = () => {
  const [item, setItem] = useState([]);

  useEffect(() => {
    const get = async () => {
      try {
        const res = await axios.post('https://stfe-gotogether.herokuapp.com/product/a/getList');
        setItem(res.data.productList);
      } catch (err) {
        console.error('Error : ', err);
      }
    };
    get();
  }, []);

  return (
    <>
      <CustomizedTitle>
        <p>이미숙님의 성향에 맞는 추천 상품이에요!</p>
      </CustomizedTitle>
      <Box>
        {item.slice(0, 8).map((res) => (
          <Link to={`/list/${res.productNum}`} key={res.productNum}>
            <NormalCard>
              <Card
                img={res.image[0]}
                title={res.title}
                price={res.price}
                group={res.group}
                theme={res.theme}
                style={res.style}
              />
            </NormalCard>
          </Link>
        ))}
      </Box>
    </>
  );
};

export default Customized;
