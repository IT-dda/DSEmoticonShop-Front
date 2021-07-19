import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai';

const LikesItemBlock = styled.div`
  display: inline-block;
  width: 12rem;
  height: 12rem;

  .link_product {
    .unit_emot {
      display: block;
      text-align: center;
      .img_emot {
        margin-top: 0.5em;
        width: 65%;
      }
    }
  }

  .area_tit {
    display: grid;
    grid-template-columns: 75% 25%;

    overflow: hidden;
    vertical-align: middle;
    margin-top: 0.5rem;

    .link_tit {
      .tit_product {
        display: block;
        font-size: 16px;
        line-height: 22px;
        margin-left: 0.5rem;
      }
      .txt_author {
        display: block;
        color: #7f7f7f;
        font-size: 13px;
        line-height: 19px;
        margin-left: 0.5rem;
      }
    }

    button {
      display: flex;
      width: 2rem;
      height: 2rem;
      border-radius: 1rem;
      border: 1px solid rgba(0, 0, 0, 0.14);
      background-color: white;

      .btn_true {
        color: #e85443;
        margin: auto;
        font-size: 1rem;
      }
      .btn_false {
        color: #171717;
        margin: auto;
        font-size: 1rem;
      }
    }
  }

  &:hover {
    .tit_product {
      font-weight: bold;
      text-decoration: underline;
    }
  }
`;

const LikesItem = () => {
  const [isImgHover, setIsImgHover] = useState(false);
  const [isBtnClick, setIsBtnClick] = useState(true);

  const btnClick = () => {
    setIsBtnClick(!isBtnClick);
  };

  return (
    <LikesItemBlock>
      <div classNaem="list_new">
        {/* TODO: Link 태그의 올바른 경로 설정 */}
        <Link className="link_product" to="/item/style">
          <span
            className="unit_emot"
            onMouseOver={() => setIsImgHover(true)}
            onMouseOut={() => setIsImgHover(false)}
          >
            {isImgHover ? (
              <img
                className="img_emot"
                src="/image/emoticon2.png"
                alt="좋아요 아이템"
              />
            ) : (
              <img
                className="img_emot"
                src="/image/emoticon.png"
                alt="좋아요 아이템"
              />
            )}
          </span>
        </Link>
        <div className="area_tit">
          <Link className="link_tit" to="/item/style">
            <span className="tit_product">이모티콘 제목</span>
            <span className="txt_author">제작자</span>
          </Link>

          <button type="button" onClick={btnClick}>
            {isBtnClick ? (
              <AiFillHeart className="btn_true" />
            ) : (
              <AiOutlineHeart className="btn_false" />
            )}
          </button>
        </div>
      </div>
    </LikesItemBlock>
  );
};

export default LikesItem;
