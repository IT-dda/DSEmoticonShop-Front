import React from 'react';
import styled from 'styled-components';
import HotItem from './HotItem';

const HotItemListBlock = styled.ul`
  display: flex;
  flex-direction: row;
  width: 900px;
  align-items: center;
  padding-left: 0;
  margin-top: 0;
  flex-wrap: wrap;
`;

const HotItemList = () => {
  return (
    <HotItemListBlock>
      <HotItem top="1"></HotItem>
      <HotItem top="2"></HotItem>
      <HotItem top="3"></HotItem>
      <HotItem top="4"></HotItem>
      <HotItem top="5"></HotItem>
      <HotItem top="6"></HotItem>
    </HotItemListBlock>
  );
};

export default HotItemList;
