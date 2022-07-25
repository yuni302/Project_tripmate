import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { MainTitle, ThemeContainer } from 'style/mainStyle/GroupStyle';
import { ThemeSlider } from 'style/mainStyle/ThemeStyle';
import { NormalCard } from 'style/commonStyle/CardStyle';
import Card from 'components/common/Card';

// 슬라이드 설정
const settings = {
  className: 'center',
  infinite: true,
  slidesToShow: 4,
  slidesToScroll: 1,
  swipeToSlide: true,
  centerpadding: 0,
  arrows: true,
  rows: 1,
};

const Theme = () => {
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

  useEffect(() => {
    setItem(randomItem(item));
  }, []);

  return (
    <ThemeContainer>
      <MainTitle>이런 테마여행은 어떠세요?</MainTitle>
      <ThemeSlider {...settings}>
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
      </ThemeSlider>
    </ThemeContainer>
  );
};

export default Theme;
