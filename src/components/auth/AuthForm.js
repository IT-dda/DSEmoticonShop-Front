import React from 'react';
import styled from 'styled-components';

const AuthBlock = styled.div`
  width: 900px;
  display: flex;
  justify-content: center;

  .description {
    width: 460px;
    height: 430px;
    padding: 30px;
    font-size: 20px;
    line-height: 25px;

     {
      /* 드래그 방지 */
    }
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;

    b {
      font-size: 35px;
    }

    .space {
      height: 210px;
    }

    .tip {
      font-size: 15px;
      b {
        font-size: 18px;
        color: red;
      }
    }
  }
`;

const LoginBlock = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 390px;
  height: 430px;
  border: 1px solid #ebebeb;
  margin: 0;

  .login {
    display: flex;
    flex-direction: column;
    width: 290px;
    height: 330px;

    span {
      font-size: 27px;
      font-weight: bold;
      margin-bottom: 50px;

      -webkit-user-select: none;
      -moz-user-select: none;
      -ms-user-select: none;
      user-select: none;
    }

    button {
      cursor: pointer;
      border: none;
      height: 40px;
      border-radius: 5px;
      margin-bottom: 5px;
    }

    .kakao {
      background: #ffdf27;
    }
    .google {
      background: #2a9fff;
      color: white;
    }
    .naver {
      background: #4bb836;
      color: white;
    }

    hr {
      width: 100%;
    }
  }
`;

const AuthForm = () => {
  return (
    <AuthBlock>
      <div className="description">
        DS
        <br />
        <b>
          emoticon
          <br />
          shop
        </b>
        <div className="space"></div>
        <hr />
        <span className="tip">
          <b>TIP </b> 카카오 계정과 구글 계정으로 로그인 할 수 있어요.
        </span>
      </div>
      <LoginBlock>
        <div className="login">
          <span>DS</span>
          <button className="kakao">kakao 계정으로 로그인</button>
          <button className="google">google 계정으로 로그인</button>
          <button className="naver">naver 계정으로 로그인</button>
          <hr />
          <button className="kakao">kakao 계정으로 회원가입</button>
          <button className="google">google 계정으로 회원가입</button>
          <button className="naver">naver 계정으로 회원가입</button>
        </div>
      </LoginBlock>
    </AuthBlock>
  );
};

export default AuthForm;
