import React from 'react';
import styled from 'styled-components';

const NewItemWrapper = styled.li`
  list-style: none;
  padding: 0px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 170px;
  width: 165px;
  align-items: center;
  border-radius: 5px;
  box-shadow: 0px 0px 7px #e6e6e6;

  &:hover {
    box-shadow: 0px 0px 12px #cecece;

    img {
      display: block;
    }
    span {
      color: #000000;
      font-weight: bold;
      text-decoration: underline;
    }

    img:first-child {
      display: none;
    }
    img:last-child {
      display: inline;
    }
  }
`;

const ItemNameBlock = styled.div`
  width: 180px;
  height: 30px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;

  span {
    font-size: 1rem;
    padding-bottom: 0.5rem;
    color: #313131;
  }
`;

const ItemImageBlock = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;

  height: 130px;
  margin-top: 0;

  img {
    width: 100px;
    height: 100px;
  }
  img:last-child {
    display: none;
  }
`;

const HomeNewItem = () => {
  return (
    <>
      <NewItemWrapper>
        <ItemImageBlock>
          <img src="/image/emoticon1.png" alt="emoticon" />
          <img src="/image/emoticon5.png" alt="emoticon" />
        </ItemImageBlock>
        <ItemNameBlock>
          <span>이모티콘 제목</span>
        </ItemNameBlock>
      </NewItemWrapper>
    </>
  );
};

export default HomeNewItem;
