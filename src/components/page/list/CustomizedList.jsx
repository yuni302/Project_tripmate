import { Link } from 'react-router-dom';
import axios from 'axios';
import React, { useState, useEffect } from 'react';
import SubBanner from 'components/common/SubBanner';
import { SubBannerStyle } from 'style/commonStyle/SubBannerStyle';
import KeyWordListBanner from 'img/KeyWordListBanner.png';
import { ListCard, ListBox } from 'style/listStyle/ListStyle';
import Card from 'components/common/Card';
import { useSelector } from 'react-redux';
import RandomList from './RandomList';

const CustomizedList = ({ content }) => {
  const LOGIN = useSelector((state) => state.user);
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
    <div>
      <SubBannerStyle>
        <SubBanner bannerName={KeyWordListBanner} />
      </SubBannerStyle>
      {LOGIN.isLogin ? (
        <ListBox>
          {item
            .filter((res) => res.keyword === content)
            .slice(0, 12)
            .map((res) => (
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
      ) : (
        <RandomList />
      )}
    </div>
  );
};

export default CustomizedList;
