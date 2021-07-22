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
      <HomeNewItem name={'emoticon_name1'}></HomeNewItem>
      <HomeNewItem name={'emoticon_name2'}></HomeNewItem>
      <HomeNewItem name={'emoticon_name3'}></HomeNewItem>
      <HomeNewItem name={'emoticon_name4'}></HomeNewItem>
      <HomeNewItem name={'emoticon_name5'}></HomeNewItem>
      <HomeNewItem name={'emoticon_name6'}></HomeNewItem>
      <HomeNewItem name={'emoticon_name7'}></HomeNewItem>
      <HomeNewItem name={'emoticon_name8'}></HomeNewItem>
      <HomeNewItem name={'emoticon_name9'}></HomeNewItem>
      <HomeNewItem name={'emoticon_name10'}></HomeNewItem>
    </NewItemListBlock>
  );
};

export default HomeNewItemList;
