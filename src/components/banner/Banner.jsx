import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { StyledPhoto } from '../../style/bannerstyle/BannerPhotoStyle';
import { StyledSlider } from '../../style/bannerstyle/BannerTextStyle';

function Banner() {
	const [nav1, setNav1] = useState(null);
	const [nav2, setNav2] = useState(null);
	const [slider1, setSlider1] = useState(null);
	const [slider2, setSlider2] = useState(null);
	const [bannerList, setBannerList] = useState([]);

	useEffect(() => {
		fetch('https://bobbykjh.github.io/banner.json')
			.then((response) => response.json())
			.then((data) => setBannerList(data));
	}, []);

	useEffect(() => {
		setNav1(slider1);
		setNav2(slider2);
	}, [slider1, slider2]);

	const settings = {
		dots: true,
		speed: 1000,
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: false,
		autoplay: false,
		autoplaySpeed: 2000,
		pauseOnHover: true,
	};
	const bannerItems = bannerList.map((data) => (
		<div key={data.title}>
			<p>{data.hashtag}</p>
			<h1>{data.title}</h1>
			<a href="*">see more -&gt;</a>
		</div>
	));
	const bannerPhoto = bannerList.map((data) => (
		<div key={data.title}>
			<img src={data.img} alt="bannerPhoto" />
		</div>
	));

	return (
		<>
			<StyledSlider {...settings} fade="true" asNavFor={nav2} ref={(slider) => setSlider1(slider)}>
				{bannerItems}
			</StyledSlider>
			<StyledPhoto {...settings} dots="false" asNavFor={nav1} ref={(slider) => setSlider2(slider)}>
				{bannerPhoto}
			</StyledPhoto>
		</>
	);
}
export default Banner;
