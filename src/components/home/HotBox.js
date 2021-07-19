import React from 'react';
import styled from 'styled-components';
import HomeHotItemList from '../hot/HomeHotItemList';

const HotItemWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const TitleBox = styled.div`
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 20px;

  span {
    color: #7e7e7e;
  }
`;

const HotBox = () => {
  return (
    <>
      <HotItemWrapper>
        <TitleBox>
          인기 이모티콘 <span>{'>'}</span>
        </TitleBox>
        <HomeHotItemList></HomeHotItemList>
      </HotItemWrapper>
    </>
  );
};

export default HotBox;
