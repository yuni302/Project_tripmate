import { Link } from 'react-router-dom';
import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { ListCard, ListBox } from 'style/listStyle/ListStyle';
import Card from 'components/common/Card';

const GroupListFilter = ({ content }) => {
  const [item, setItem] = useState([]);

  useEffect(() => {
    const get = async () => {
      const res = await axios.post('https://stfe-gotogether.herokuapp.com/product/a/getList');
      setItem(res.data.productList);
    };
    get();
  }, []);

  return (
    <div>
      <ListBox>
        {item
          .filter((res) => res.group === content)
          .slice(0, 12)
          .map((res) => (
            // <Link to={`/list/${res.productNum}`}>
            <ListCard key={res.productNum}>
              <Card
                Img={res.image[0]}
                Title={res.title}
                Content={res.contents}
                Price={res.price}
                Group={res.group}
                Theme={res.theme}
                Style={res.style}
              />
            </ListCard>
            // </Link>
          ))}
      </ListBox>
    </div>
  );
};

export default GroupListFilter;
