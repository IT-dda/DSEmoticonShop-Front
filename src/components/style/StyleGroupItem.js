import React from 'react';
import styled from 'styled-components';
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai';
import { Link } from 'react-router-dom';

const StyleItemBlock = styled(Link)`
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

    .like {
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
    .like {
      display: inline-block;
      width: 30px;
      height: 30px;
      padding: 5px;
      cursor: pointer;
      border: 1px solid #ebebeb;
      border-radius: 20px;
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
    <StyleItemBlock to="/t/emoticon_name">
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
        <AiOutlineHeart className="like"></AiOutlineHeart>
      </div>
    </StyleItemBlock>
  );
};

export default StyleGroupItem;
