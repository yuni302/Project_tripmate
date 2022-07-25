import React, { useState } from 'react';
import { ButtonGroup, CardList, GroupContainer, MainTitle, Section } from 'style/mainStyle/GroupStyle';
import GroupFilter from './GroupFilter';

const Group = () => {
  const [content, setContent] = useState('2030');
  const GroupList = [
    ['2030', '2030끼리'],
    ['4050', '4050끼리'],
    ['6070', '6070끼리'],
    ['female', '여자끼리'],
    ['male', '남자끼리'],
    ['family', '자녀동반'],
  ];

  const conClickHandeler = (e) => {
    setContent(e.target.name);
    for (let i = 0; i < GroupList.length; i += 1) {
      e.target.parentNode.childNodes[i].className = 'group-btn';
    }
    e.target.classList.add('active');
  };

  const GroupType = GroupList.map((data, index) => (
    <button
      key={data[0]}
      type="button"
      name={data[0]}
      className={index === 0 ? 'group-btn active' : 'group-btn'}
      onClick={conClickHandeler}
    >
      {data[1]}
    </button>
  ));

  return (
    <GroupContainer>
      <MainTitle>고투게더가 추천하는 그룹별 상품이에요</MainTitle>
      <Section>
        <ButtonGroup>{GroupType}</ButtonGroup>
        <CardList>
          <GroupFilter content={content} />
        </CardList>
      </Section>
    </GroupContainer>
  );
};

export default Group;
