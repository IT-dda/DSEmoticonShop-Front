import React from 'react';
import styled from 'styled-components';
import TitleMy from '../../components/common/TitleMy';
import LikesItem from './mypageList/LikesItem';

const LikesPageBlock = styled.div`
  margin: 0 20%;

  div {
    margin: 0.5rem;
  }
`;

const LikesPage = () => {
  return (
    <LikesPageBlock>
      <TitleMy title="좋아요" count="6" />
      <hr />
      <div>
        <LikesItem />
        <LikesItem />
        <LikesItem />
        <LikesItem />
        <LikesItem />
        <LikesItem />
      </div>
    </LikesPageBlock>
  );
};

export default LikesPage;
