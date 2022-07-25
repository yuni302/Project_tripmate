import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

import InfoDetail from 'components/page/product/InfoDetail';
import ProductTitle from 'components/page/product/ProductTitle';
import Calendar from 'components/page/product/Calendar';
import TravelNews from 'components/page/product/TravelNews';
import Related from 'components/page/product/Related';
import Select from 'components/page/product/Select';
import { ProductInfoStyle } from 'style/productStyle/ProductInfoStyle';

const DetailPage = () => {
  const { productNum } = useParams();
  const [list, setList] = useState([]);

  // header non-scroll option
  try {
    document.getElementById('header-max').style.position = 'relative';
  } catch (e) {
    console.error(e);
  }

  useEffect(() => {
    const getList = async () => {
      try {
        const res = await axios.post('https://stfe-gotogether.herokuapp.com/product/a/getList');
        setList(res.data.productList);
      } catch (e) {
        console.error(e);
      }
    };
    getList();
  }, []);

  return (
    <div>
      {list
        .filter((item) => item.productNum === Number(productNum))
        .map((item) => (
          <div key={item.productNum}>
            <ProductTitle
              group={item.group}
              theme={item.theme}
              style={item.style}
              title={item.title}
              price={item.price}
            />
            <Calendar img={item.image[0]} productNum={item.productNum} />
            <ProductInfoStyle>
              <InfoDetail productNum={item.productNum} />
              <Select
                productNum={item.productNum}
                price={item.price}
                available={item.available}
                deadline={item.deadline}
                start={item.start[0]}
                current={item.current}
              />
            </ProductInfoStyle>
            <TravelNews title={item.title} />
            <Related group={item.group} theme={item.theme} style={item.style} title={item.title} />
          </div>
        ))}
    </div>
  );
};

export default DetailPage;
