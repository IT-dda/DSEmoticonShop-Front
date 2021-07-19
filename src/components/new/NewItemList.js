import React from 'react';
import NewItem from './NewItem';
import styled from 'styled-components';

const NewItemListBlock = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-left: 0;
  margin-top: 0;
`;

const NewItemList = () => {
  return (
    <NewItemListBlock>
      <NewItem></NewItem>
      <NewItem></NewItem>
      <NewItem></NewItem>
    </NewItemListBlock>
  );
};

export default NewItemList;
