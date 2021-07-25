import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { AiOutlineClose } from 'react-icons/ai';

const LoginModalBlock = styled.div`
  width: 350px;
  height: 150px;
  background-color: white;
  padding: 20px;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  .closeBlock {
    display: flex;
    justify-content: flex-end;
    .closeIcon {
      width: 20px;
      height: 20px;
      color: #7e7e7e;
      cursor: pointer;
    }
  }

  .loginText {
    font-size: 15px;
    margin-top: 5px;
  }

  .buttonBox {
    display: flex;
    justify-content: space-between;
    button {
      width: 152px;
      height: 38px;
      border: none;
      border-radius: 5px;
      cursor: pointer;
      font-size: 14px;
    }
    .closeBtn {
      background: #ebebeb;
    }
    .closeBtn:hover {
      background: #dfdfdf;
    }
  }
`;

const LoginLink = styled(Link)`
  width: 152px;
  height: 38px;
  font-size: 14px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  border-radius: 5px;
  background: #ffdf27;
  &:hover {
    background: #f1d221;
  }
`;
const LoginModal = ({ onClickClose }) => {
  return (
    <LoginModalBlock>
      <div className="closeAndText">
        <div className="closeBlock" onClick={onClickClose}>
          <AiOutlineClose className="closeIcon"></AiOutlineClose>
        </div>
        <div className="loginText">로그인 후 이용해주세요.</div>
      </div>
      <div className="buttonBox">
        <button className="closeBtn" onClick={onClickClose}>
          취소
        </button>
        <LoginLink to="/login">로그인</LoginLink>
      </div>
    </LoginModalBlock>
  );
};

export default LoginModal;
