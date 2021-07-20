import React from 'react';
import styled from 'styled-components';
import HomeNewItemList from '../new/HomeNewItemList';
import { Link } from 'react-router-dom';

const NewItemWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const TitleLink = styled(Link)`
  font-size: 20px;
  font-weight: bold;
  margin-top: 10px;
  margin-bottom: 25px;

  span {
    color: #7e7e7e;
  }
`;

const NewBox = () => {
  return (
    <>
      <NewItemWrapper>
        <TitleLink to="/item/new">
          신규 이모티콘 <span>{'>'}</span>
        </TitleLink>
        <HomeNewItemList></HomeNewItemList>
      </NewItemWrapper>
    </>
  );
};

export default NewBox;
