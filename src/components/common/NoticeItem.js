import React, { useState } from 'react';
import styled from 'styled-components';

const NoticeItemBlock = styled.div`
  background: #fff;
  border-radius: 6px;
  display: block;
  margin-bottom: 10px;
  align-self: flex-start;
  padding: 20px 25px;
  align-items: center;
  margin: 0 25%;

  .ico_notice {
    margin: 11px 10px 0 0;
    background: #666666;
    color: #fff;
    border-radius: 4px;
    font-size: 6px;
    padding: 3px;
    font-weight: bold;
    width: 36px;
    height: 16px;
  }
  .tit {
    font-size: 16px;
  }
  &:hover {
    .tit {
      font-weight: bold;
      text-decoration: underline;
    }
  }

  .txt_update {
    color: #888888;
    font-size: 13px;
    float: right;
  }
`;

const NoticeImgBlock = styled.div`
  img {
    padding: 20px 0px;
    width: 100%;
  }
`;

const NoticeItem = ({ notice_tit }) => {
  const [showImg, setShowImg] = useState(false);

  const onClickNotice = () => {
    setShowImg(!showImg);
  };

  return (
    <NoticeItemBlock onClick={onClickNotice}>
      <span className="ico_notice">NOTICE</span>
      <span className="tit">{notice_tit}</span>
      <span className="txt_update">2021.02.02</span>
      <NoticeImgBlock>
        {showImg && (
          <img
            className="notice_img"
            src="/image/notice_img.png"
            alt="공지 이미지"
          />
        )}
      </NoticeImgBlock>
    </NoticeItemBlock>
  );
};

export default NoticeItem;
