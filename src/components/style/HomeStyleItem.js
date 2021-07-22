import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const StyleItemWrapper = styled.li`
  display: flex;
  flex-direction: row;
  list-style: none;
  padding: 0px;
  height: 120px;
  width: 900px;
  margin-bottom: 30px;
`;

const StyleNameBlock = styled.div`
  display: flex;
  flex-direction: column;
  width: 150px;

  .category {
    font-size: 20px;
    font-weight: bold;
    color: #ff8f8f;
    margin-top: 5px;
    margin-bottom: 10px;
  }

  .group {
    span {
      background-color: #ff8f8f;
      color: white;
      font-size: 14px;
      border-radius: 15px;
      padding: 5px 10px;
    }
  }
`;

const StyleImageBlock = styled.div`
  display: flex;
  justify-content: space-between;
  width: 730px;
  margin-left: 20px;
`;

const StyleItemLink = styled(Link)`
  width: 130px;
  height: 130px;
  img {
    width: 130px;
    height: 130px;
  }
`;

const HomeStyleItem = ({ category, group }) => {
  return (
    <StyleItemWrapper>
      <StyleNameBlock>
        <span className="category">{category}</span>
        <span className="group">
          <span>{group}</span>
        </span>
      </StyleNameBlock>
      <StyleImageBlock>
        <StyleItemLink to="/t/emoticon_name">
          <img src="/image/emoticon1.png" alt="emoticon1" />
        </StyleItemLink>
        <StyleItemLink to="/t/emoticon_name">
          <img src="/image/emoticon2.png" alt="emoticon1" />
        </StyleItemLink>
        <StyleItemLink to="/t/emoticon_name">
          <img src="/image/emoticon3.png" alt="emoticon1" />
        </StyleItemLink>
        <StyleItemLink to="/t/emoticon_name">
          <img src="/image/emoticon4.png" alt="emoticon1" />
        </StyleItemLink>
        <StyleItemLink to="/t/emoticon_name">
          <img src="/image/emoticon5.png" alt="emoticon1" />
        </StyleItemLink>
      </StyleImageBlock>
    </StyleItemWrapper>
  );
};

export default HomeStyleItem;
