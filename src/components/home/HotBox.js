import React from 'react';
import styled from 'styled-components';
import HomeHotItemList from '../hot/HomeHotItemList';
import { Link } from 'react-router-dom';

const HotItemWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const TitleLink = styled(Link)`
  font-size: 20px;
  font-weight: bold;
  margin-top: 10px;
  margin-bottom: 15px;

  span {
    color: #7e7e7e;
  }
`;

const HotBox = () => {
  return (
    <>
      <HotItemWrapper>
        <TitleLink to="/item/hot">
          인기 이모티콘 <span>{'>'}</span>
        </TitleLink>
        <HomeHotItemList></HomeHotItemList>
      </HotItemWrapper>
    </>
  );
};

export default HotBox;
