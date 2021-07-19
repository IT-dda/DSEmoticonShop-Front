import React from 'react';
import styled from 'styled-components';

const StyleItemBlock = styled.div`
  display: flex;
  flex-direction: column;
  width: 170px;
  height: 210px;
  border-radius: 5px;
  padding: 20px;
  background-color: #fadfdfff;
  cursor: pointer;

  .title {
    margin-bottom: 20px;
  }
  span {
    font-size: 13px;
    font-weight: bold;
    color: white;
    border-radius: 20px;
    padding: 7px 12px;
    background-color: #ff8989;
  }

  .thumbnail {
    display: flex;
    flex-direction: row;
    width: 170px;
    height: 100%;
    justify-content: space-between;
    align-content: space-between;
    padding-left: 0;
    margin: 0;
    flex-wrap: wrap;

    li {
      list-style: none;
    }
    img {
      width: 80px;
      height: 80px;
    }
  }

  &:hover {
    box-shadow: 0px 0px 10px #dadada;
  }
`;

const StyleItem = ({ title }) => {
  return (
    <StyleItemBlock>
      <div className="title">
        <span>{title}</span>
      </div>
      <ul className="thumbnail">
        <li>
          <img src="/image/emoticon1.png" alt="emoticon1" />
        </li>
        <li>
          <img src="/image/emoticon2.png" alt="emoticon1" />
        </li>
        <li>
          <img src="/image/emoticon3.png" alt="emoticon1" />
        </li>
        <li>
          <img src="/image/emoticon4.png" alt="emoticon1" />
        </li>
      </ul>
    </StyleItemBlock>
  );
};

export default StyleItem;
