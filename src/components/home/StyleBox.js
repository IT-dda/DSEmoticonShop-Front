import React from 'react';
import styled from 'styled-components';
import HomeStyleItemList from '../style/HomeStyleItemList';
import { Link } from 'react-router-dom';
import { AiOutlineRight } from 'react-icons/ai';

const StyleItemWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const TitleLink = styled(Link)`
  font-size: 20px;
  font-weight: bold;
  margin-top: 40px;
  margin-bottom: 30px;
  display: flex;
  align-items: center;

  .rightIcon {
    color: #7e7e7e;
    width: 18px;
    height: 18px;
    margin-left: 5px;
  }
`;

const StyleBox = () => {
  return (
    <>
      <StyleItemWrapper>
        <TitleLink to="/item/style">
          스타일 <AiOutlineRight className="rightIcon"></AiOutlineRight>
        </TitleLink>
        <HomeStyleItemList></HomeStyleItemList>
      </StyleItemWrapper>
    </>
  );
};

export default StyleBox;
