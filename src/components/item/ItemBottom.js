import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const ItemBottomWrapper = styled.div`
  width: 900px;
  display: flex;
  flex-direction: column;

  .title {
    display: flex;
    width: 100%;
    height: 50px;
    justify-content: flex-start;
    font-size: 20px;
    font-weight: bold;
    margin-top: 30px;
  }
`;

const ItemImageBlock = styled.ul`
  display: flex;
  justify-content: space-between;
  padding: 0;
  margin: 0;
`;

const ItemLink = styled(Link)`
  cursor: pointer;
  list-style: none;
  width: 165px;
  height: 165px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  box-shadow: 0px 0px 7px #e6e6e6;

  img {
    width: 130px;
    height: 130px;
  }
`;

const ItemBottom = () => {
  return (
    <ItemBottomWrapper>
      <div className="title">관련 이모티콘</div>
      <ItemImageBlock>
        <ItemLink to="/t/emoticon_name">
          <img src="/image/emoticon1.png" alt="emoticon" />
        </ItemLink>
        <ItemLink to="/t/emoticon_name">
          <img src="/image/emoticon2.png" alt="emoticon" />
        </ItemLink>
        <ItemLink to="/t/emoticon_name">
          <img src="/image/emoticon3.png" alt="emoticon" />
        </ItemLink>
        <ItemLink to="/t/emoticon_name">
          <img src="/image/emoticon4.png" alt="emoticon" />
        </ItemLink>
        <ItemLink to="/t/emoticon_name">
          <img src="/image/emoticon5.png" alt="emoticon" />
        </ItemLink>
      </ItemImageBlock>
    </ItemBottomWrapper>
  );
};

export default ItemBottom;
