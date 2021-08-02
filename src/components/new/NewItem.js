import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai';

const NewItemLink = styled(Link)`
  list-style: none;
  padding: 0px;
  display: flex;
  height: 180px;
  width: 900px;
  align-items: center;
  border-bottom: 1px solid #ebebeb;

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

const ItemNameBlock = styled.div`
  .textBox {
    width: 300px;
    height: 120px;
    cursor: pointer;
    display: flex;
    justify-content: center;
    flex-direction: column;
  }

  .title {
    font-size: 1.125rem;
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

const ItemImageBlock = styled.ul`
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
      width: 120px;
      height: 120px;
    }
    img:last-child {
      display: none;
    }
  }
`;

const NewItem = () => {
  return (
    <>
      <NewItemLink to="/t/emoticon_name">
        <ItemNameBlock>
          <div className="textBox">
            <span className="title">이모티콘 제목</span>
            <span className="author">작가 이름</span>
            <AiOutlineHeart className="like"></AiOutlineHeart>
          </div>
        </ItemNameBlock>
        <ItemImageBlock>
          <li className="thumbnail">
            <img src="/image/emoticon1.png" alt="emoticon1" />
            <img src="/image/emoticon5.png" alt="emoticon1" />
          </li>
          <li className="thumbnail">
            <img src="/image/emoticon2.png" alt="emoticon2" />
            <img src="/image/emoticon6.png" alt="emoticon1" />
          </li>
          <li className="thumbnail">
            <img src="/image/emoticon3.png" alt="emoticon3" />
            <img src="/image/emoticon7.png" alt="emoticon1" />
          </li>
          <li className="thumbnail">
            <img src="/image/emoticon4.png" alt="emoticon4" />
            <img src="/image/emoticon8.png" alt="emoticon1" />
          </li>
        </ItemImageBlock>
      </NewItemLink>
    </>
  );
};

export default NewItem;
