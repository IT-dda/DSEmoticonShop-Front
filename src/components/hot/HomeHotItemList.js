import React from 'react';
import styled from 'styled-components';
import HomeHotItem from './HomeHotItem';

const HotItemListBlock = styled.ul`
  display: flex;
  flex-direction: column;
  width: 900px;
  height: 600px;
  align-items: center;
  padding-left: 0;
  margin-top: 0;
  flex-wrap: wrap;
`;
const HomeHotItemList = () => {
  return (
    <HotItemListBlock>
      <HomeHotItem top="1"></HomeHotItem>
      <HomeHotItem top="2"></HomeHotItem>
      <HomeHotItem top="3"></HomeHotItem>
      <HomeHotItem top="4"></HomeHotItem>
      <HomeHotItem top="5"></HomeHotItem>
      <HomeHotItem top="6"></HomeHotItem>
      <HomeHotItem top="7"></HomeHotItem>
      <HomeHotItem top="8"></HomeHotItem>
      <HomeHotItem top="9"></HomeHotItem>
      <HomeHotItem top="10"></HomeHotItem>
    </HotItemListBlock>
  );
};

export default HomeHotItemList;
