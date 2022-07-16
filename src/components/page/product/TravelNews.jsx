import React, { useState, useEffect } from 'react';
import axios from 'axios';
// Component
import Card from 'components/common/Card';
// Style-Components
import { NewsCard } from 'style/commonStyle/CardStyle';
import { TravelNewsStyle } from 'style/productStyle/ProductStyle';

const TravelNews = ({ title }) => {
  const [list, setList] = useState([]);

  useEffect(() => {
    const getList = async () => {
      try {
        const res = await axios.post('https://stfe-gotogether.herokuapp.com/product/a/getList');
        if (res.status !== 200) throw new Error("Can't find news");
        setList(res.data.productList);
      } catch (e) {
        console.error(e);
      }
    };

    getList();
  }, []);

  return (
    <TravelNewsStyle>
      <p className="news-title">여행지 소식</p>
      <div className="news-card">
        {list
          .filter((item) => item.title === title)
          .map((item) => (
            <div key={item.title}>
              {item.news.map((res) => (
                <NewsCard key={res.title}>
                  <Card img={res.img} title={res.title} content={res.content} />
                </NewsCard>
              ))}
            </div>
          ))}
      </div>
    </TravelNewsStyle>
  );
};

export default TravelNews;
