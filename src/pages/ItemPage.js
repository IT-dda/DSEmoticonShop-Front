import React, { useState } from 'react';
import styled from 'styled-components';
import ItemTop from '../components/item/ItemTop';
import ItemBody from '../components/item/ItemBody';
import ItemBottom from '../components/item/ItemBottom';
import Header from '../components/common/Header';
import { AiOutlineClose } from 'react-icons/ai';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const FullScreen = styled.div`
  position: fixed;
  z-index: 30;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.25);
  display: flex;
  justify-content: center;
  align-items: center;
`;
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
    }
    .loginBtn {
      background: #ffdf27;
    }
    .loginBtn:hover {
      background: #f1d221;
    }
    .closeBtn {
      background: #ebebeb;
    }
    .closeBtn:hover {
      background: #dfdfdf;
    }
  }
`;

const ItemPage = ({ match }) => {
  const { emoticon_name } = match.params;
  const [loginOpen, setLoginOpen] = useState(false);

  const onClickClose = () => {
    setLoginOpen(false);
  };

  const onLoginOpen = () => {
    setLoginOpen(true);
  };

  return (
    <>
      <Header />
      <Wrapper>
        <ItemTop name={emoticon_name} onLoginOpen={onLoginOpen} />
        <ItemBody />
        <ItemBottom />
      </Wrapper>
      {loginOpen && (
        <FullScreen>
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
              <button className="loginBtn">로그인</button>
            </div>
          </LoginModalBlock>
        </FullScreen>
      )}
    </>
  );
};

export default ItemPage;
