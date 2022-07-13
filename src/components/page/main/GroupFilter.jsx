import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Box } from '../../../style/mainstyle/GroupStyle';
import { GroupCard } from '../../../style/commonstyle/CardStyle';
import Card from '../../card/Card';

const GroupFilter = ({ content }) => {
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
    <Box>
      {item
        .filter((res) => res.group === content)
        .slice(0, 3)
        .map((res) => (
          <Link to={`/list/${res.productNum}`}>
            <GroupCard key={res.productNum}>
              <Card
                Img={res.image[0]}
                Title={res.title}
                Content={res.contents}
                Price={res.price}
                Group={res.group}
                Theme={res.theme}
                Style={res.style}
              />
            </GroupCard>
          </Link>
        ))}
    </Box>
  );
};

export default GroupFilter;
