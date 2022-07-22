import axios from 'axios';
import React, { useEffect, useState, useRef } from 'react';
import { DetailStyle, NavStyle, InfoStyle } from 'style/productStyle/InfoDetailStyle';
import include from './infoDetailImg/include.png';
import plan from './infoDetailImg/plan.png';
import how from './infoDetailImg/how.png';
import terms from './infoDetailImg/terms.png';
import review from './infoDetailImg/review.png';
import abstract from './infoDetailImg/abstract.png';

const content = [
  ['main', '여행정보'],
  ['include', '포함 및 불포함'],
  ['plan', '상세 일정'],
  ['how', '예약방법'],
  ['terms', '약관 확인'],
  ['review', '상품 후기'],
];
const NAV_HEIGHT = 61;

const Detail = ({ productNum }) => {
  const body = { productNum };
  const contentRef = useRef([]);
  const [scrollY, setScrollY] = useState(0);
  const [yCord, setYCord] = useState([]);
  const [currentPosition, setCurrentPosition] = useState(1);
  const [headFix, setHeadFix] = useState(false);
  const [infoImg, setInfoImg] = useState([]);

  useEffect(() => {
    const getImage = async () => {
      try {
        const res = await axios.post('https://stfe-gotogether.herokuapp.com/product/a/getDetail', body);
        setInfoImg(res.data.productObj.image);
      } catch (err) {
        console.error('Error : ', err);
      }
    };
    getImage();
  }, []);

  useEffect(() => {
    // 기준값 저장
    setTimeout(() => {
      const temp = [];
      contentRef.current.map((data) => temp.push(data.getBoundingClientRect().top + window.pageYOffset - 1));
      setYCord(temp);
    }, 500);
  }, [infoImg]);

  useEffect(() => {
    // 위치 변경시 class name 변경
    const buttonList = [...document.getElementsByClassName('button')];
    buttonList.map((data) => data.classList.remove('active'));
    document.getElementsByClassName('button')[currentPosition]?.classList.add('active');
  }, [currentPosition]);

  // 현재 위치 계산
  const calPosition = (current) =>
    yCord.slice(1).length - yCord.slice(1).filter((spot) => spot - NAV_HEIGHT - 1 > current).length;

  useEffect(() => {
    const startY = contentRef.current[0].getBoundingClientRect().top + window.pageYOffset;
    const endY = contentRef.current[5].getBoundingClientRect().top + window.pageYOffset;
    setCurrentPosition(calPosition(scrollY));
    if (scrollY >= startY && scrollY <= endY) {
      setHeadFix(true);
    } else {
      setHeadFix(false);
    }
  }, [scrollY]);

  const handleFollow = () => {
    setScrollY(window.pageYOffset);
  };

  useEffect(() => {
    const watch = () => {
      window.addEventListener('scroll', handleFollow);
    };
    watch();
    return () => {
      window.removeEventListener('scroll', handleFollow);
    };
  });

  // eslint-disable-next-line
  const detailMain = infoImg.slice(3).map((data, index) => <img src={data} key={index} alt="info-img" />);

  const moveToTarget = (index) => window.scrollTo(0, yCord[index] - NAV_HEIGHT);
  return (
    <DetailStyle>
      <div className="abstract">
        <span>상품 요약</span>
        <img src={abstract} alt="abstract-img" />
      </div>
      <div className="diff-info">
        <span>상품 공지</span>
        <img src={infoImg[2]} alt="info-img" />
      </div>
      <NavStyle className="detail-nav" fix={headFix}>
        {content.map((data, index) => (
          <button type="button" key={data[0]} className={`button ${data[0]}`} onClick={() => moveToTarget(index)}>
            {data[1]}
          </button>
        ))}
      </NavStyle>
      <InfoStyle className="info" fix={headFix}>
        {/* eslint no-return-assign: ["error"]  */}
        <div className="main" ref={(event) => (contentRef.current[0] = event)}>
          <img src={infoImg[1]} key={infoImg[1]} alt="info-img" />
          {detailMain}
        </div>
        <div className="include" ref={(event) => (contentRef.current[1] = event)}>
          <span>포함 불포함</span>
          <img src={include} alt="include" />
        </div>
        <div className="plan" ref={(event) => (contentRef.current[2] = event)}>
          <span>상세 일정</span>
          <img src={plan} alt="include" />
        </div>
        <div className="how" ref={(event) => (contentRef.current[3] = event)}>
          <span>예약 방법</span>
          <img src={how} alt="include" />
        </div>
        <div className="terms" ref={(event) => (contentRef.current[4] = event)}>
          <span>약관 확인</span>
          <img src={terms} alt="include" />
          <div className="add-terms">
            <a href="https://www.gotogether-s.com/data/?q=YToxOntzOjEyOiJrZXl3b3JkX3R5cGUiO3M6MzoiYWxsIjt9&bmode=view&idx=11133697&t=board">
              국외여행 특별약관 보기
            </a>
          </div>
        </div>
        <div className="review" ref={(event) => (contentRef.current[5] = event)}>
          <span>상품 후기(2건)</span>
          <img src={review} alt="include" />
        </div>
      </InfoStyle>
    </DetailStyle>
  );
};

export default Detail;
