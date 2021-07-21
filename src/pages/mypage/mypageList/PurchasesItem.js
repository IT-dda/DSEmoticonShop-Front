import React from 'react';
import styled from 'styled-components';

const PurchasesItemBlock = styled.div`
  /* TODO: border 삭제 */
  /* border: 1px solid blue; */

  width: 50%;
  height: 240px;
  padding: 20px 0px;

  .date_item {
    font-size: 15px;
    line-height: 3rem;
  }

  .area_itemlist {
    display: flex;

    .item_list {
      display: grid;
      grid-template-columns: 30% 70%;
      grid-template-rows: 20px 20px;
      width: 50%;
      font-size: 13px;

      .item_tit {
        color: #7f7f7f;
      }
      .item_val {
        color: #3b3b3b;
      }
      .item_price {
        color: #fa4637;
      }
    }
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

const PurchasesItem = () => {
  return (
    <PurchasesItemBlock>
      <span className="date_item">2019.02.09</span>
      <div className="area_itemlist">
        <div className="item_list">
          <span className="item_tit">결제번호</span>
          <span className="item_val">1805907495</span>
          <span className="item_tit">결제금액</span>
          <span className="item_price">2200원</span>
        </div>
        <div className="item_list">
          <span className="item_tit">결제수단</span>
          <span className="item_val">카카오페이머니</span>
          <span className="item_tit">상태</span>
          <span className="item_val">결제완료</span>
        </div>
      </div>

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
    </PurchasesItemBlock>
  );
};

export default PurchasesItem;
