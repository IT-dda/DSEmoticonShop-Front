import React from 'react';
import styled from 'styled-components';

const StyleItemBlock = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 160px;
  height: 200px;
  margin: 10px;
  cursor: pointer;

  .thumbnail {
    img {
      width: 150px;
      height: 150px;
    }
    img:last-child {
      display: none;
    }
  }

  .textBox {
    display: flex;
    align-items: center;
    width: 150px;
    height: 45px;
    justify-content: space-between;

    .likeImg {
      display: none;
    }

    .text {
      display: flex;
      flex-direction: column;

      .author {
        color: #7e7e7e;
        font-size: 12px;
      }
    }
  }

  &:hover {
    .thumbnail {
      img:first-child {
        display: none;
      }
      img:last-child {
        display: inline;
      }
    }
    .likeImg {
      display: inline-block;
      width: 40px;
      height: 40px;
    }

    .titleBox {
      span:first-child {
        display: none;
      }
      span:last-child {
        display: inline;
      }
    }
  }
`;

const ItemTitleBlock = styled.div`
  span:last-child {
    display: none;
    font-weight: bold;
    text-decoration: underline;
  }
`;

const StyleGroupItem = ({ title }) => {
  return (
    <StyleItemBlock>
      <div className="thumbnail">
        <img src="/image/emoticon1.png" alt="emoticon1" />
        <img src="/image/emoticon2.png" alt="emoticon1" />
      </div>
      <div className="textBox">
        <div className="text">
          <ItemTitleBlock>
            <div className="titleBox">
              <span>
                {title.length > 10 ? title.substring(0, 10) + '...' : title}
              </span>
              <span>
                {title.length > 6 ? title.substring(0, 6) + '...' : title}
              </span>
            </div>
          </ItemTitleBlock>
          <span className="author">작가 이름</span>
        </div>
        <img className="likeImg" src="/image/like1.png" alt="like" />
      </div>
    </StyleItemBlock>
  );
};

export default StyleGroupItem;
