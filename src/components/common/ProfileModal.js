import React from 'react';
import styled from 'styled-components';

const ProfileFullscreen = styled.div`
  display: flex;
  justify-content: flex-end;
  position: fixed;
  width: 100%;
  height: 100%;
`;

const ProfileModalBlock = styled.div`
  width: 200px;
  height: 170px;
  padding-top: 20px;
  background: white;
  z-index: 30;
  position: absolute;
  top: 60px;
  right: 20px;
  border-radius: 5px;
  box-shadow: 0px 0px 4px #dfdfdf;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  .textBox {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 5px;

    .name {
    }
    .email {
      font-size: 13px;
      color: #7e7e7e;
    }
  }
  .logout {
    width: 200px;
    height: 40px;
    border-top: 1px solid #cacaca;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    font-size: 13px;

    &:hover {
      background-color: #ebebeb;
    }
  }
`;

const ProfileBox = styled.div`
  width: 35px;
  height: 35px;
  margin-top: 5px;

  img {
    width: 35px;
    height: 35px;
    border-radius: 10px;
  }
`;

const ProfileModal = ({ onProfileClose }) => {
  return (
    <ProfileFullscreen onClick={onProfileClose}>
      <ProfileModalBlock>
        <ProfileBox>
          <img alt="프로필 사진" src="/image/profile_default.png" />
        </ProfileBox>
        <div className="textBox">
          <span className="name">user_name</span>
          <span className="email">email</span>
        </div>
        <div className="logout">로그아웃</div>
      </ProfileModalBlock>
    </ProfileFullscreen>
  );
};

export default ProfileModal;
