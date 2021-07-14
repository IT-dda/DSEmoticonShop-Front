import React from 'react';
import styled from 'styled-components';
import StyleGroupItem from './StyleGroupItem';

const StyleItemListBlock = styled.div`
  width: 900px;
  display: flex;
  flex-wrap: wrap;
  margin-top: 20px;
`;

const StyleGroupItemList = () => {
  return (
    <StyleItemListBlock>
      <StyleGroupItem title={'이모티콘 제목입니다'}></StyleGroupItem>
      <StyleGroupItem title={'이모티콘 제목입니다'}></StyleGroupItem>
      <StyleGroupItem title={'이모티콘 제목입니다'}></StyleGroupItem>
      <StyleGroupItem title={'이모티콘 제목입니다'}></StyleGroupItem>
      <StyleGroupItem title={'이모티콘 제목입니다'}></StyleGroupItem>
      <StyleGroupItem title={'이모티콘 제목입니다'}></StyleGroupItem>
      <StyleGroupItem title={'이모티콘 제목입니다'}></StyleGroupItem>
      <StyleGroupItem title={'이모티콘 제목입니다'}></StyleGroupItem>
      <StyleGroupItem title={'이모티콘 제목입니다'}></StyleGroupItem>
      <StyleGroupItem title={'이모티콘 제목입니다'}></StyleGroupItem>
    </StyleItemListBlock>
  );
};

export default StyleGroupItemList;
