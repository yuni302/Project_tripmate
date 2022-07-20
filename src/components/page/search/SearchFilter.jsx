import React from 'react';
import { ListBox, ListCard } from 'style/listStyle/ListStyle';
import { Link } from 'react-router-dom';
import Card from 'components/common/Card';
import NullSearch from './NullSearch';

const SearchFilter = ({ result, isSearch }) => {
  if (isSearch && result.length === 0) {
    return <NullSearch />;
  }
  return (
    <div>
      <ListBox>
        {result.slice(0, 12).map((res) => (
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
    </div>
  );
};

export default SearchFilter;
