import axios from 'axios';
import Card from 'components/common/Card';
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { NormalCard } from 'style/commonStyle/CardStyle';
import { Box, CustomizedTitle } from 'style/mainStyle/CustomizedStyle';
import { LoginInfo } from 'style/listStyle/ListStyle';
import ExclamationMark from 'img/ExclamationMark.svg';
import { useSelector } from 'react-redux';
import NullCustomized from './NullCustomized';

const Customized = () => {
  const USER = useSelector((state) => state.join);
  const LOGIN = useSelector((state) => state.user);
  const [item, setItem] = useState([]);
  const [nullKeyword, setNullKeyword] = useState(false);

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
      {LOGIN.isLogin ? (
        <CustomizedTitle>
          <p className="title-Info">{USER.name}님의 성향에 맞는 추천 상품이에요!</p>
        </CustomizedTitle>
      ) : (
        <CustomizedTitle>
          <p className="title-Info">고객님의 성향에 맞는 상품을 찾아보세요!</p>
          <LoginInfo>
            <img alt="ExclamationMark" src={ExclamationMark} />
            <p>로그인 하시면 더 정확한 추천 상품을 확인할 수 있습니다.</p>
          </LoginInfo>
        </CustomizedTitle>
      )}
      {nullKeyword ? (
        <NullCustomized />
      ) : (
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
      )}
    </>
  );
};

export default Customized;
