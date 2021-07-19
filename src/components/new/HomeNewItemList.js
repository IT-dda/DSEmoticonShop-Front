import React from 'react';
import styled from 'styled-components';
import HomeNewItem from './HomeNewItem';

const NewItemListBlock = styled.ul`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  align-content: space-between;
  flex-wrap: wrap;
  margin-bottom: 5rem;

  width: 900px;
  height: 360px;
  padding-left: 0;
  margin-top: 0;
`;

const HomeNewItemList = () => {
  return (
    <NewItemListBlock>
      <HomeNewItem></HomeNewItem>
      <HomeNewItem></HomeNewItem>
      <HomeNewItem></HomeNewItem>
      <HomeNewItem></HomeNewItem>
      <HomeNewItem></HomeNewItem>
      <HomeNewItem></HomeNewItem>
      <HomeNewItem></HomeNewItem>
      <HomeNewItem></HomeNewItem>
      <HomeNewItem></HomeNewItem>
      <HomeNewItem></HomeNewItem>
    </NewItemListBlock>
  );
};

export default HomeNewItemList;
