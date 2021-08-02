import React, { useRef } from 'react';
import styled from 'styled-components';
import { AiOutlineClose, AiOutlineCopy } from 'react-icons/ai';
const ReceiptModalBlock = styled.div`
  width: 400px;
  height: 350px;
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

  .content {
    display: flex;
    flex-direction: column;

    span + span {
      margin-top: 5px;
    }
  }

  button {
    width: 100%;
    height: 50px;
    border: 0;
    border-radius: 5px;
    background-color: #ffdf27;
    cursor: pointer;
  }

  .codeBox {
    display: flex;
    align-items: center;

    input {
      margin-left: 5px;
    }

    .copyIcon {
      margin-left: 5px;
      cursor: pointer;
      color: #7e7e7e;
    }
  }
`;

const ReceiptModal = ({ onReceiptClose, isPresent, pay }) => {
  const presentCode = useRef();
  const onCopy = () => {
    const el = presentCode.current;
    el.select();
    document.execCommand('copy');
  };

  return (
    <ReceiptModalBlock>
      <div className="title">
        <span className="buyTitle">구매내역</span>
        <AiOutlineClose
          className="closeIcon"
          onClick={onReceiptClose}
        ></AiOutlineClose>
      </div>
      <div className="content">
        <span className="date">2021.07.28</span>
        <span className="number">
          <b>결제번호</b> 123456789
        </span>
        <span className="price">
          <b>결제금액</b> 2000원 {/* TODO : 아직 데이터 못 넘겨받았음 */}
        </span>
        <span className="pay">
          <b>결제수단</b>{' '}
          {pay === 'kakaomoney'
            ? '카카오페이 머니'
            : pay === 'kakaocard'
            ? '카카오페이 카드'
            : pay === 'credit'
            ? '일반 신용카드'
            : '일반 휴대폰'}
        </span>
      </div>
      {isPresent ? (
        <div className="codeBox">
          <span>
            <b>선물코드</b>
            <input
              type="text"
              value="3AVD-D3G8-D9W3"
              ref={presentCode}
              readOnly
            />
          </span>
          <AiOutlineCopy className="copyIcon" onClick={onCopy}></AiOutlineCopy>
        </div>
      ) : (
        ''
      )}
      <button onClick={onReceiptClose}>확인</button>
    </ReceiptModalBlock>
  );
};

export default ReceiptModal;
