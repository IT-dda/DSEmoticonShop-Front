import React from 'react';
import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';
import palette from '../../lib/styles/palette';

const StyleItemWrapper = styled.li`
  display: flex;
  flex-direction: row;
  list-style: none;
  padding: 0px;
  height: 120px;
  width: 900px;
  margin-bottom: 30px;
`;

const StyleNameBlock = styled(Link)`
  display: flex;
  flex-direction: column;
  width: 150px;

  .category {
    font-size: 20px;
    font-weight: bold;
    margin-top: 5px;
    margin-bottom: 10px;
    ${(props) => {
      return css`
        color: ${palette.categoryHover[props.id]};
      `;
    }};
  }

  .group {
    span {
      color: white;
      font-size: 14px;
      border-radius: 15px;
      padding: 7px 12px;
      ${(props) => {
        return css`
          background-color: ${palette.categoryHover[props.id]};
        `;
      }};
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

const HomeStyleItem = ({ category, group, categoryId, groupId }) => {
  return (
    <StyleItemWrapper>
      <StyleNameBlock
        to={`/style/categories?id=${categoryId}&group=${groupId}`}
        id={categoryId}
      >
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
