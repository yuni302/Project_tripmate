import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Box } from 'style/mainStyle/GroupStyle';
import { GroupCard } from 'style/commonStyle/CardStyle';
import Card from 'components/common/Card';

const GroupFilter = ({ content }) => {
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
  }, [content]);

  return (
    <Box>
      {item
        .filter((res) => res.group === content)
        .slice(0, 3)
        .map((res) => (
          <Link to={`/list/${res.productNum}`} key={res.productNum}>
            <GroupCard>
              <Card
                img={res.image[0]}
                title={res.title}
                content={res.contents}
                price={res.price}
                group={res.group}
                theme={res.theme}
                style={res.style}
              />
            </GroupCard>
          </Link>
        ))}
    </Box>
  );
};

export default GroupFilter;
