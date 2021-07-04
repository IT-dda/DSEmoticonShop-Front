import React from 'react';
import styled from 'styled-components';
import HomeNewItemList from '../new/HomeNewItemList';

const NewItemWrapper = styled.div`
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
const NewBox = () => {
  return (
    <>
      <NewItemWrapper>
        <TitleBox>
          신규 이모티콘 <span>{'>'}</span>
        </TitleBox>
        <HomeNewItemList></HomeNewItemList>
      </NewItemWrapper>
    </>
  );
};

export default NewBox;
