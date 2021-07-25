import React from 'react';
import styled from 'styled-components';

const ReceivedItemBlock = styled.div`
  /* TODO: border 삭제 */
  /* border: 1px solid blue; */

  /* width: 50%; */
  width: 30rem;
  height: 240px;

  padding: 20px 0px;

  .date_item {
    font-size: 15px;
    line-height: 3rem;
    float: left;
  }

  .txt_account {
    font-size: 15px;
    line-height: 3rem;
    margin-right: 1.5rem;
    float: right;
  }

  .account_id {
    font-weight: bold;
  }

  .area_item {
    width: 95%;
    border-radius: 6px;
    background-color: #fafafa;
    display: grid;
    grid-template-columns: 80% 20%;
    margin-top: 1rem;
    padding: 1.5rem;

    .area_tit {
      display: table-cell;
      overflow: hidden;
      vertical-align: middle;
      max-width: 200px;
      box-sizing: border-box;

      .tit_product {
        display: block;
        font-size: 16px;
        line-height: 22px;
      }
      .txt_author {
        display: block;
        color: #7f7f7f;
        font-size: 13px;
        line-height: 19px;
      }
    }

    .area_itememoticon {
      /* 이모티콘 이미지 크기 */
      width: 3.5rem;
      float: right;

      .img_emot {
        width: 100%;
      }
    }

    &:hover {
      background-color: #f5f5f5;

      .tit_product {
        font-weight: bold;
        text-decoration: underline;
      }
    }
  }
`;

const ReceivedItem = () => {
  return (
    <ReceivedItemBlock>
      {/* TODO: 받은 선물이 없는 경우, 안내문 보이기 */}
      <span className="date_item">2019.02.09</span>
      <span className="txt_account">
        From. <span className="account_id">김카톡</span>
      </span>

      <div className="area_item">
        {/* TODO: Link 태그로 item 연결 */}
        <div className="area_tit">
          <span className="tit_product">이모티콘 제목</span>
          <span className="txt_author">제작자</span>
        </div>
        <div className="area_itememoticon">
          <img
            className="img_emot"
            src="/image/my_emot1.png"
            alt="이모티콘 이미지"
          />
        </div>
      </div>
    </ReceivedItemBlock>
  );
};

export default ReceivedItem;
