import React from 'react';
import styled from 'styled-components';

const ItemTitleBox = styled.div`
  width: 800px;
  height: 300px;
  display: flex;
  justify-content: center;
  align-items: center;

  .representImg {
    width: 200px;
    height: 200px;
    margin-right: 80px;
  }
`;

const ItemDescription = styled.div`
  display: flex;
  width: 450px;
  flex-direction: column;

  .description {
    display: flex;
    flex-direction: column;
    margin-bottom: 15px;

    .title {
      font-size: 30px;
      font-weight: bold;
      padding-bottom: 10px;
    }

    .author {
      color: #7e7e7e;
    }
  }

  .priceBox {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 15px;

    .price {
      display: flex;
      flex-direction: column;

      .priceSpan {
        font-size: 20px;
        font-weight: bold;
        color: red;
      }
    }
  }

  .imageBox {
    display: flex;

    img {
      width: 40px;
      height: 40px;
      margin-left: 5px;
      cursor: pointer;
    }
  }

  .buttonBox {
    display: flex;
    justify-content: space-between;
    button {
      cursor: pointer;
      border: 0.5px solid #ebebeb;
      width: 220px;
      height: 50px;
      border-radius: 5px;
      background: white;
    }

    .purchase {
      background: #ffdf27;
    }
  }
`;

const ItemTop = () => {
  return (
    <ItemTitleBox>
      <img className="representImg" src="/image/emoticon1.png" alt="emoticon" />
      <ItemDescription>
        <div className="description">
          <span className="title">이모티콘 제목</span>
          <span className="author">작가</span>
        </div>
        <div className="priceBox">
          <div className="price">
            <span>7월, 전상품 20% 할인</span>
            <span className="priceSpan">2,500원</span>
          </div>
          <div className="imageBox">
            <img src="/image/like1.png" alt="img1" />
            <img src="/image/like1.png" alt="img2" />
          </div>
        </div>
        <div className="buttonBox">
          <button className="purchase">구매하기</button>
          <button className="present">선물하기</button>
        </div>
      </ItemDescription>
    </ItemTitleBox>
  );
};

export default ItemTop;
