import React from 'react';
import styled from 'styled-components';
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai';
import { Link } from 'react-router-dom';

const SearchItemLink = styled(Link)`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
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

const SearchNameBlock = styled.div`
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

const SearchImageBlock = styled.ul`
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

const SearchItem = () => {
  return (
    <SearchItemLink to="/t/emoticon_name">
      <div className="itemBlock">
        <SearchNameBlock>
          <div className="textBox">
            <span className="title">이모티콘 제목</span>
            <span className="author">작가 이름</span>
            <AiOutlineHeart className="like"></AiOutlineHeart>
          </div>
        </SearchNameBlock>
        <SearchImageBlock>
          <li className="thumbnail">
            <img src="/image/emoticon1.png" alt="emoticon1" />
            <img src="/image/emoticon2.png" alt="emoticon1" />
          </li>
        </SearchImageBlock>
      </div>
    </SearchItemLink>
  );
};

export default SearchItem;
