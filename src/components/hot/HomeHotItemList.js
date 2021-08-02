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
      <HomeHotItem top="1" name="이모티콘 이름"></HomeHotItem>
      <HomeHotItem top="2" name="이모티콘 이름"></HomeHotItem>
      <HomeHotItem top="3" name="이모티콘 이름"></HomeHotItem>
      <HomeHotItem top="4" name="이모티콘 이름"></HomeHotItem>
      <HomeHotItem top="5" name="이모티콘 이름"></HomeHotItem>
      <HomeHotItem top="6" name="이모티콘 이름"></HomeHotItem>
      <HomeHotItem top="7" name="이모티콘 이름"></HomeHotItem>
      <HomeHotItem top="8" name="이모티콘 이름"></HomeHotItem>
      <HomeHotItem top="9" name="이모티콘 이름"></HomeHotItem>
      <HomeHotItem top="10" name="이모티콘 이름"></HomeHotItem>
    </HotItemListBlock>
  );
};

export default HomeHotItemList;
