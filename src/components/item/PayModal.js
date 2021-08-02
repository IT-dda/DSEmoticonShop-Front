import React from 'react';
import styled from 'styled-components';
import { AiOutlineClose } from 'react-icons/ai';

const PayModalBlock = styled.div`
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
  .payTitle {
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

    .radioBox {
      margin-bottom: 10px;

      label {
        font-size: 14px;
      }
    }

    input[type='radio'],
    input[type='radio']:checked {
      appearance: none;
      width: 13px;
      height: 13px;
      border-radius: 100%;
      margin-right: 10px;
    }

    input[type='radio'] {
      background-color: white;
      border: 2px solid #7e7e7e;
    }

    input[type='radio']:checked {
      background-color: #ffdf27;
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
`;

const PayModal = ({ isPresent, onCompletePay, onPayClose }) => {
  const selectedRadio = () => {
    const radioLength = document.getElementsByName('pay').length;
    for (var i = 0; i < radioLength; i++) {
      if (document.getElementsByName('pay')[i].checked === true) {
        return document.getElementsByName('pay')[i].id;
      }
    }
  };
  return (
    <PayModalBlock>
      <div className="title">
        <span className="payTitle">결제방법</span>
        <AiOutlineClose
          className="closeIcon"
          onClick={onPayClose}
        ></AiOutlineClose>
      </div>
      <div className="content">
        <div className="radioBox">
          <input type="radio" name="pay" id="kakaomoney" />
          <label htmlFor="kakaomoney">카카오페이 머니</label>
        </div>
        <div className="radioBox">
          <input type="radio" name="pay" id="kakaocard" />
          <label htmlFor="kakaocard">카카오페이 카드</label>
        </div>
        <div className="radioBox">
          <input type="radio" name="pay" id="credit" />
          <label htmlFor="credit">일반 신용카드</label>
        </div>
        <div className="radioBox">
          <input type="radio" name="pay" id="tel" />
          <label htmlFor="tel">일반 휴대폰</label>
        </div>
      </div>
      <button
        onClick={() => {
          const select = selectedRadio();
          onCompletePay(isPresent ? '선물' : '구매', select);
        }}
      >
        결제하기
      </button>
    </PayModalBlock>
  );
};

export default PayModal;
