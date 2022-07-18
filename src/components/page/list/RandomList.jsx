import { Link } from 'react-router-dom';
import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { LoginInfo, ListBox, ListCard } from 'style/listStyle/ListStyle';
import ExclamationMark from 'img/ExclamationMark.svg';
import Card from 'components/common/Card';

const RandomList = () => {
  const [item, setItem] = useState([]);

  const randomItem = (array) => {
    array.sort(() => Math.random() - 0.5);
    return array;
  };

  useEffect(() => {
    const get = async () => {
      try {
        const res = await axios.post('https://stfe-gotogether.herokuapp.com/product/a/getList');
        setItem(randomItem(res.data.productList));
      } catch (err) {
        console.error('Error : ', err);
      }
    };
    get();
  }, []);

  return (
    <>
      <LoginInfo>
        <img alt="ExclamationMark" src={ExclamationMark} />
        <p>로그인 하시면 더 정확한 추천 상품을 확인할 수 있습니다.</p>
      </LoginInfo>
      <ListBox>
        {item.slice(0, 12).map((res) => (
          <Link to={`/list/${res.productNum}`} key={res.productNum}>
            <ListCard>
              <Card
                img={res.image[0]}
                title={res.title}
                content={res.contents}
                price={res.price}
                group={res.group}
                theme={res.theme}
                style={res.style}
              />
            </ListCard>
          </Link>
        ))}
      </ListBox>
    </>
  );
};

export default RandomList;
