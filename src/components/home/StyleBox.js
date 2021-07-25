import React from 'react';
import styled from 'styled-components';
import HomeStyleItemList from '../style/HomeStyleItemList';
import { Link } from 'react-router-dom';

const StyleItemWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const TitleLink = styled(Link)`
  font-size: 20px;
  font-weight: bold;
  margin-top: 40px;
  margin-bottom: 30px;

  span {
    color: #7e7e7e;
  }
`;

const StyleBox = () => {
  return (
    <>
      <StyleItemWrapper>
        <TitleLink to="/item/style">
          스타일 <span>{'>'}</span>
        </TitleLink>
        <HomeStyleItemList></HomeStyleItemList>
      </StyleItemWrapper>
    </>
  );
};

export default StyleBox;
