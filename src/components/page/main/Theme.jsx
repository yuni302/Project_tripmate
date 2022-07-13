import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { MainTitle, Container } from 'style/mainStyle/GroupStyle';
import { ThemeSlider } from 'style/mainStyle/ThemeStyle';
import { NormalCard } from 'style/commonStyle/CardStyle';
import Card from 'common/Card';

const Theme = () => {
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

  const [item, setItem] = useState([]);

  useEffect(() => {
    axios.post('https://stfe-gotogether.herokuapp.com/product/a/getList').then((res) => {
      setItem(res.data.productList);
    });
  }, []);

  function randomItem(array) {
    array.sort(() => Math.random() - 0.5);
  }
  randomItem(item);

  return (
    <Container>
      <MainTitle>이런 테마여행은 어떠세요?</MainTitle>
      <ThemeSlider {...settings}>
        {item.slice(0, 8).map((res) => (
          <Link to={`/list/${res.productNum}`}>
            <NormalCard key={res.productNum}>
              <Card
                Img={res.image[0]}
                Title={res.title}
                Price={res.price}
                Group={res.group}
                Theme={res.theme}
                Style={res.style}
              />
            </NormalCard>
          </Link>
        ))}
      </ThemeSlider>
    </Container>
  );
};

export default Theme;
