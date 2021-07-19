import React from 'react';
import styled from 'styled-components';
import HomeStyleItemList from '../style/HomeStyleItemList';

const StyleItemWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const TitleBox = styled.div`
  font-size: 20px;
  font-weight: bold;
  margin-top: 30px;
  margin-bottom: 20px;

  span {
    color: #7e7e7e;
  }
`;

const StyleBox = () => {
  return (
    <>
      <StyleItemWrapper>
        <TitleBox>
          스타일 <span>{'>'}</span>
        </TitleBox>
        <HomeStyleItemList></HomeStyleItemList>
      </StyleItemWrapper>
    </>
  );
};

export default StyleBox;
