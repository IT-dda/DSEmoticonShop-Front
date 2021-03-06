import React from 'react';
import styled from 'styled-components';
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai';
import { Link } from 'react-router-dom';

const HotItemLink = styled(Link)`
  display: flex;
  flex-direction: row;
  list-style: none;
  align-items: center;
  padding: 0px;
  height: 130px;
  width: 450px;

  .itemBlock {
    display: flex;
    align-items: center;
    height: 130px;
    border-bottom: 1px solid #ebebeb;
  }

  &:hover {
    .like {
      display: block;
    }
    .title {
      color: #000000;
      font-weight: bold;
      text-decoration: underline;
    }
    .thumbnail {
      img:first-child {
        display: none;
      }
      img:last-child {
        display: inline;
      }
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
    font-size: 1.025rem;
    padding-bottom: 0.5rem;
    color: #313131;
  }
  .author {
    font-size: 0.725rem;
    padding-bottom: 0.3rem;
    color: #7e7e7e;
  }
  .like {
    display: none;
    width: 30px;
    height: 30px;
    padding: 5px;
    cursor: pointer;
    border: 1px solid #ebebeb;
    border-radius: 20px;
  }
  &:hover {
    display: block;
  }
`;

const HotImageBlock = styled.ul`
  cursor: pointer;
  display: flex;
  align-items: center;
  height: 150px;

  li {
    margin-top: 0;
    list-style: none;
    padding-left: 10px;
    padding-right: 10px;

    img {
      width: 100px;
      height: 100px;
    }
    img:last-child {
      display: none;
    }
  }
`;
const HotItem = ({ top }) => {
  return (
    <HotItemLink to="/t/emoticon_name">
      <HotTopBlock>
        <span className={top < 4 ? 'redPoint' : ''}>{top}</span>
      </HotTopBlock>
      <div className="itemBlock">
        <HotNameBlock>
          <div className="textBox">
            <span className="title">???????????? ??????</span>
            <span className="author">?????? ??????</span>
            <AiOutlineHeart className="like"></AiOutlineHeart>
          </div>
        </HotNameBlock>
        <HotImageBlock>
          <li className="thumbnail">
            <img src="/image/emoticon1.png" alt="emoticon1" />
            <img src="/image/emoticon2.png" alt="emoticon1" />
          </li>
        </HotImageBlock>
      </div>
    </HotItemLink>
  );
};

export default HotItem;
