import React from 'react';
import styled from 'styled-components';

const HotItemWrapper = styled.li`
  display: flex;
  flex-direction: row;
  list-style: none;
  align-items: center;
  padding: 0px;
  height: 120px;
  width: 450px;
  margin-right: 30px;

  .itemBlock {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 130px;
    border-bottom: 1px solid #ebebeb;
  }

  &:hover {
    img {
      display: block;
    }
    .title {
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

const HotTopBlock = styled.div`
  display: flex;
  align-items: center;
  width: 50px;
  font-size: 25px;

  span.redPoint {
    color: red;
  }
`;

const HotNameBlock = styled.div`
  .textBox {
    width: 200px;
    height: 120px;
    cursor: pointer;
    display: flex;
    justify-content: center;
    flex-direction: column;
  }

  .title {
    font-size: 1rem;
    padding: 0.5rem 0;
    color: #313131;
  }
  .author {
    font-size: 0.725rem;
    color: #7e7e7e;
  }
`;

const HotImageBlock = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
  height: 150px;

  margin-top: 0;
  list-style: none;
  padding-left: 10px;
  padding-right: 10px;

  img {
    width: 90px;
    height: 90px;
  }
  img:last-child {
    display: none;
  }
`;
const HomeHotItem = ({ top }) => {
  return (
    <HotItemWrapper>
      <HotTopBlock>
        <span className={top < 4 ? 'redPoint' : ''}>{top}</span>
      </HotTopBlock>
      <div className="itemBlock">
        <HotNameBlock>
          <div className="textBox">
            <span className="title">이모티콘 제목</span>
            <span className="author">작가 이름</span>
          </div>
        </HotNameBlock>
        <HotImageBlock>
          <img src="/image/emoticon2.png" alt="emoticon1" />
          <img src="/image/emoticon3.png" alt="emoticon1" />
        </HotImageBlock>
      </div>
    </HotItemWrapper>
  );
};

export default HomeHotItem;
