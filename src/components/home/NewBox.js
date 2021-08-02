import React from 'react';
import styled from 'styled-components';
import HomeNewItemList from '../new/HomeNewItemList';
import { Link } from 'react-router-dom';
import { AiOutlineRight } from 'react-icons/ai';

const NewItemWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const TitleLink = styled(Link)`
  font-size: 20px;
  font-weight: bold;
  margin-top: 10px;
  margin-bottom: 25px;
  display: flex;
  align-items: center;

  .rightIcon {
    color: #7e7e7e;
    width: 18px;
    height: 18px;
    margin-left: 5px;
  }
`;

const NewBox = () => {
  return (
    <>
      <NewItemWrapper>
        <TitleLink to="/item/new">
          신규 이모티콘 <AiOutlineRight className="rightIcon"></AiOutlineRight>
        </TitleLink>
        <HomeNewItemList></HomeNewItemList>
      </NewItemWrapper>
    </>
  );
};

export default NewBox;
