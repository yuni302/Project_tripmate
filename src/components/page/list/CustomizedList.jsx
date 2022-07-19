import { Link } from 'react-router-dom';
import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { ListCard, ListBox } from 'style/listStyle/ListStyle';
import Card from 'components/common/Card';
import RandomList from './RandomList';

const CustomizedList = ({ content }) => {
  const [item, setItem] = useState([]);
  const [login, setLogin] = useState(false);

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
      {login ? (
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
