import React from 'react';
import styled from 'styled-components';
import HomeStyleItem from './HomeStyleItem';

const StyleItemListBlock = styled.ul`
  display: flex;
  width: 900px;
  height: 450px;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 5rem;
  padding-left: 0;
  margin-top: 0;
`;
const HomeStyleItemList = () => {
  return (
    <StyleItemListBlock>
      <HomeStyleItem category="#재밌는" group="#첫번째_그룹" categoryId={2} groupId={1}></HomeStyleItem>
      <HomeStyleItem category="#귀여운" group="#첫번째_그룹" categoryId={3} groupId={1}></HomeStyleItem>
      <HomeStyleItem category="#동물" group="#첫번째_그룹" categoryId={4} groupId={1}></HomeStyleItem>
    </StyleItemListBlock>
  );
};

export default HomeStyleItemList;
