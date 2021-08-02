import React, { useState } from 'react';
import styled from 'styled-components';
import {
  AiOutlineClose,
  AiFillCheckCircle,
  AiOutlineCheckCircle,
  AiOutlineDown,
} from 'react-icons/ai';

const BuyModalBlock = styled.div`
  width: 400px;
  height: 650px;
  background-color: white;
  padding: 25px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  .title {
    display: flex;
    justify-content: space-between;
  }
  .buyTitle {
    font-size: 18px;
    font-weight: bold;
  }

  .closeIcon {
    width: 22px;
    height: 22px;
    color: #7e7e7e;
    cursor: pointer;
  }

  .emoticon {
    display: flex;
    justify-content: space-between;
    margin: 20px 0px;

    .infoBox {
      display: flex;
      flex-direction: column;

      .author {
        font-size: 13px;
        color: #7e7e7e;
      }

      .price {
        font-size: 14px;
      }
    }

    img {
      width: 70px;
      height: 70px;
    }
  }

  hr {
    border: 0;
    width: 100%;
    height: 8px;
    background: #f7f7f7;
  }

  .subTitle {
    font-size: 16px;
    font-weight: bold;
  }

  .coupon {
    .subTitle {
      margin-bottom: 5px;
    }

    .selectCoupon {
      border: 1px solid #c5c5c5;
      height: 42px;
      cursor: pointer;
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 0 8px;
      font-size: 14px;

      .downIcon {
        color: #7e7e7e;
      }
    }
  }

  .listBox {
    position: fixed;
    z-index: 30;
    background-color: white;
    border: 1px solid #c5c5c5;
    border-top: 0;
    width: 350px;
    border-collapse: collapse;

    .couponList {
      height: 42px;
      display: flex;
      align-items: center;
      padding-left: 8px;
      font-size: 14px;
      &:hover {
        background-color: #f7f7f7;
      }
    }
  }

  .paymentBox {
    .payPrice {
      margin-top: 15px;
    }
    .subPaymentBox {
      font-size: 13px;

      .payTitle {
        color: #7e7e7e;
      }
    }

    .finalPrice {
      color: red;
      font-weight: bold;
      margin-top: 5px;
      .payTitle {
        font-size: 13px;
      }
    }

    .subPaymentBox,
    .finalPrice {
      display: flex;
      justify-content: space-between;
    }
  }

  .checkBox {
    display: flex;
    align-items: flex-end;
    cursor: pointer;
    .checkIcon {
      width: 30px;
      height: 30px;
      margin-right: 10px;
      color: #7e7e7e;
    }
    .checked {
      color: #ffdf27;
    }
  }

  ul {
    padding: 0;
  }
  .description {
    font-size: 13px;
    color: #7e7e7e;
  }

  button {
    width: 100%;
    height: 50px;
    border: 0;
    border-radius: 5px;
  }
  .agreeBtn {
    background-color: #ffdf27;
    cursor: pointer;
  }
`;

const BuyModal = ({ onBuyClose, isPresent, price, onCompleteBuy }) => {
  const [list, setList] = useState(false);
  const [agree, setAgree] = useState(false);
  const [selectedCoupon, setSelectedCoupon] = useState('쿠폰 선택 안함');
  const [salePrice, setSalePrice] = useState(0);
  const [totalPrice, setTotalPrice] = useState(price);

  const onlistClick = () => {
    if (list) {
      setList(false);
    } else {
      setList(true);
    }
  };

  {
    /* TODO : 가격을 천 단위로 표시하도록 수정해야 함. */
  }

  const onCouponClick = (coupon) => {
    if (list) {
      setList(false);
    } else {
      setList(true);
    }

    setSelectedCoupon(coupon);

    if (coupon === '쿠폰 선택 안함') {
      setSalePrice(() => 0);
      setTotalPrice(() => price - 0);
    } else {
      setSalePrice(() => 500);
      setTotalPrice(() => price - 500);
    }
  };

  const onAgreeClick = () => {
    if (agree) {
      setAgree(false);
    } else {
      setAgree(true);
    }
  };

  return (
    <BuyModalBlock>
      <div className="title">
        <span className="buyTitle">{isPresent ? '선물하기' : '구매하기'}</span>
        <AiOutlineClose
          className="closeIcon"
          onClick={onBuyClose}
        ></AiOutlineClose>
      </div>
      <div className="emoticon">
        <div className="infoBox">
          <span className="title">이모티콘 제목</span>
          <span className="author">작가</span>
          <span className="price">{price} 원</span>
        </div>
        <img src="/image/emoticon1.png" alt="emoticon1" />
      </div>
      <hr />
      <div className="paymentBox">
        <div className="coupon">
          <div className="subTitle">할인쿠폰</div>
          <div className="couponBox">
            <div className="selectCoupon" onClick={onlistClick}>
              <span>{selectedCoupon}</span>
              <AiOutlineDown className="downIcon"></AiOutlineDown>
            </div>
            {list && (
              <div className="listBox">
                <div
                  className="couponList"
                  onClick={() => {
                    onCouponClick('쿠폰 선택 안함');
                  }}
                >
                  쿠폰 선택 안함
                </div>
                <div
                  className="couponList"
                  onClick={() => {
                    onCouponClick('7월, 전상품 20% 할인 (20%)');
                  }}
                >
                  7월, 전상품 20% 할인 (20%)
                </div>
              </div>
            )}
          </div>
          <div className="subTitle payPrice">결제금액</div>
          <div className="subPaymentBox">
            <span className="payTitle">판매금액</span>
            <span>{price}원</span>
          </div>
          <div className="subPaymentBox">
            <span className="payTitle">할인금액</span>
            <span>- {salePrice}원</span>
          </div>
          <div className="finalPrice">
            <span className="payTitle">최종 결제금액</span>
            <span>{totalPrice}원</span>
          </div>
        </div>
      </div>
      <hr />
      <div className="checkBox" onClick={onAgreeClick}>
        {agree ? (
          <AiFillCheckCircle className="checkIcon checked"></AiFillCheckCircle>
        ) : (
          <AiOutlineCheckCircle className="checkIcon"></AiOutlineCheckCircle>
        )}
        <span className="subTitle">아래 내용에 동의합니다.</span>
      </div>
      <ul>
        <li className="description">
          - 쿠폰은 중복사용 불가하며, 일부 결제수단은 할인쿠폰 적용이
          불가합니다.
        </li>
        <li className="description">
          - 주문취소 및 환불 시 이미 사용한 쿠폰은 재발급되지 않습니다.
        </li>
      </ul>
      {agree ? (
        <button
          className="agreeBtn"
          onClick={() => onCompleteBuy(isPresent ? '선물' : '구매')}
        >
          {isPresent ? '선물하기' : '구매하기'}
        </button>
      ) : (
        <button>{isPresent ? '선물하기' : '구매하기'}</button>
      )}
    </BuyModalBlock>
  );
};

export default BuyModal;
