import React from 'react';
import styled from 'styled-components';

const ContentsBlock = styled.div`
  background: #fafafa;
  max-width: 1024px;
  height: 100%;
  margin: auto;
  padding: 0 40px;
  box-sizing: border-box;

  .section_top {
    display: flex;
    padding: 49px 0 42px;

    .tit_area {
      font-size: 28px;
      line-height: 41px;
      font-family: 'notokr-bold', sans-serif;
    }
    .img_notice {
      position: absolute;
      left: 784px;
      /* bottom: 0; */
      width: 100px;
      /* vertical-align: top; */
    }
  }

  .section_main {
    .list_notice li {
      background: #fff;
      /* list-style: none; */

      display: block;
      margin: 11px 10px 0 0;
      /* -webkit-align-self: flex-start; */
      align-self: flex-start;
    }
    .ico_notice {
      background: #666666;
      color: #fff;
      border-radius: 4px;
      font-size: 6px;
      padding: 3px;
      font-weight: bold;
      width: 36px;
      height: 16px;
    }
  }

  /* img {
    vertical-align: top;
  }
  div {
    display: block;
  }
  ul {
    display: block;
    list-style-type: disc;
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    padding-inline-start: 40px;
  }
  li {
    display: list-item;
    text-align: -webkit-match-parent;
  } */
`;

const Contents = ({ title }) => {
  return (
    <ContentsBlock className="area_notice">
      <div className="section_top">
        <h2 className="tit_area">{title}</h2>
        <img
          className="img_notice"
          src="/image/img_notice.png"
          alt="새소식 기본이미지"
        />
      </div>
      <div className="section_main">
        <ul className="list_notice">
          <li>
            <span className="ico_notice">NOTICE</span>
            <span className="tit_board">
              <span className="tit_in">
                [EVENT] 이모티콘샵은 언제나 전상품 20% 할인 중!
              </span>
            </span>
            <span className="txt_update">
              <span>2021.02.02</span>
            </span>
          </li>
        </ul>
      </div>
    </ContentsBlock>
  );
};

export default Contents;
