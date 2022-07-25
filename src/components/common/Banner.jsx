import axios from 'axios';
import Search from 'components/page/main/Search';
import React, { useState, useEffect } from 'react';
import { StyledPhoto } from 'style/commonStyle/BannerPhotoStyle';
import { BannerStyle } from 'style/commonStyle/BannerStyle';
import { StyledSlider } from 'style/commonStyle/BannerTextStyle';

const Banner = () => {
  const [nav1, setNav1] = useState(null);
  const [nav2, setNav2] = useState(null);
  const [slider1, setSlider1] = useState(null);
  const [slider2, setSlider2] = useState(null);
  const [bannerList, setBannerList] = useState([]);

  useEffect(() => {
    const getBannerData = async () => {
      try {
        const res = await axios.get('https://raw.githubusercontent.com/Hungeun2/trip-data/main/banner.json');
        if (res.status !== 200) throw new Error("Can't find news");
        setBannerList(res.data);
      } catch (e) {
        console.error(e);
      }
    };
    getBannerData();
  }, []);

  useEffect(() => {
    setNav1(slider1);
    setNav2(slider2);
  }, [slider1, slider2]);

  const settings = {
    dots: true,
    speed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 3000,
  };
  const bannerItems = bannerList.map((data) => (
    <div key={data.title}>
      <p>{data.hashtag}</p>
      <h1>{data.title}</h1>
      <p>see more →</p>
    </div>
  ));
  const bannerPhoto = bannerList.map((data) => (
    <div key={data.title}>
      <a href={`/list/${data.productNum}`}>
        <img src={data.img} alt="bannerPhoto" />
      </a>
    </div>
  ));

  return (
    <BannerStyle>
      <StyledSlider {...settings} fade="true" asNavFor={nav2} ref={(slider) => setSlider1(slider)}>
        {bannerItems}
      </StyledSlider>
      <StyledPhoto {...settings} dots="false" asNavFor={nav1} ref={(slider) => setSlider2(slider)}>
        {bannerPhoto}
      </StyledPhoto>
      <Search />
    </BannerStyle>
  );
};
export default Banner;
