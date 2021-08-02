import React from 'react';
import { useState } from 'react';
import styled from 'styled-components';
import StyleGroupItem from './StyleGroupItem';

const StyleItemListBlock = styled.div`
  width: 900px;
  display: flex;
  flex-wrap: wrap;
  margin-top: 20px;
`;

const SortBlock = styled.div`
  width: 900px;
  display: flex;
  justify-content: flex-end;
  font-size: 13px;
  margin-bottom: 10px;

  .spanBox {
    span {
      cursor: pointer;
    }

    span + span {
      margin-left: 10px;
    }

    .selected {
      color: #7e7e7e;
    }
  }
`;

const StyleGroupItemList = () => {
  const [isNew, setIsNew] = useState(true);

  const onSortClick = () => {
    setIsNew(!isNew);
  };

  return (
    <StyleItemListBlock>
      <SortBlock>
        {isNew ? (
          <div className="spanBox">
            <span className="selected">최신순</span>
            <span onClick={onSortClick}>인기순</span>
          </div>
        ) : (
          <div className="spanBox">
            <span onClick={onSortClick}>최신순</span>
            <span className="selected">인기순</span>
          </div>
        )}
      </SortBlock>
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
