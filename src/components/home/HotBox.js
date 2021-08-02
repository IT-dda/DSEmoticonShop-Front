import React from 'react';
import styled from 'styled-components';
import HomeHotItemList from '../hot/HomeHotItemList';
import { Link } from 'react-router-dom';
import { AiOutlineRight } from 'react-icons/ai';

const HotItemWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const TitleLink = styled(Link)`
  font-size: 20px;
  font-weight: bold;
  margin-top: 10px;
  margin-bottom: 15px;
  display: flex;
  align-items: center;

  .rightIcon {
    color: #7e7e7e;
    width: 18px;
    height: 18px;
    margin-left: 5px;
  }
`;

const HotBox = () => {
  return (
    <>
      <HotItemWrapper>
        <TitleLink to="/item/hot">
          인기 이모티콘 <AiOutlineRight className="rightIcon"></AiOutlineRight>
        </TitleLink>
        <HomeHotItemList></HomeHotItemList>
      </HotItemWrapper>
    </>
  );
};

export default HotBox;
