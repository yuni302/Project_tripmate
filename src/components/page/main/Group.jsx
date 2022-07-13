import React, { useState } from 'react';
import { ButtonGroup, CardList, Container, MainTitle, Section } from 'style/mainStyle/GroupStyle';
import GroupFilter from './GroupFilter';

const Group = () => {
  const [content, setContent] = useState('2030');
  const GroupList = [
    ['2030', '4050', '6070', 'female', 'male', 'family'],
    ['2030끼리', '4050끼리', '6070끼리', '여자끼리', '남자끼리', '자녀동반'],
  ];

  const GroupType = GroupList[0].map((data, index) => (
    <button
      key={data}
      type="button"
      name={data}
      className={index === 0 ? 'group-btn active' : 'group-btn'}
      onClick={(e) => {
        setContent(e.target.name);
        for (let i = 0; i < GroupList[0].length; i += 1) {
          e.target.parentNode.childNodes[i].className = 'group-btn';
        }
        e.target.classList.add('active');
      }}
    >
      {GroupList[1][index]}
    </button>
  ));

  return (
    <Container>
      <MainTitle>고투게더가 추천하는 그룹별 상품이에요</MainTitle>
      <Section>
        <ButtonGroup>{GroupType}</ButtonGroup>
        <CardList>
          <GroupFilter content={content} />
        </CardList>
      </Section>
    </Container>
  );
};

export default Group;
