import React from 'react';
import styled from 'styled-components';
import { FiArrowUp } from 'react-icons/fi';

const FooterBlock = styled.div`
  background: #ffffff;
  color: #a7a7a7;
  font-size: 13px;
  margin: 0 20%;

  ul {
    padding-left: 0;
    padding-bottom: 5px;
  }

  div {
    display: block;
    /* margin: 10px 0px; */
  }

  button {
    /* FooterBlock내 Button 중앙 배치 */
    margin: auto;
    display: block;

    margin-top: 50px;
    width: 44px;
    height: 44px;
    border-radius: 22px;
    border: 1px solid #a7a7a7;
    background: #ffffff;
  }

  .ico_btn {
    font-size: 22px;
    text-align: center;
    vertical-align: center;
  }
`;

const ListBlock = styled('li')`
  list-style: none;
  float: left; // 가로 정렬
  margin-right: 20px;
`;

const Spacer = styled.div`
  height: 20px;
`;

const footerMenus = [
  '이용약관',
  '유료이용약관',
  '개인정보처리방침',
  '기업고객',
  '문의하기',
];

const Footer = () => {
  return (
    <FooterBlock>
      <Spacer />
      <Spacer />

      <ul>
        {footerMenus.map((menu, index) => (
          <ListBlock key={index}>{menu}</ListBlock>
        ))}
      </ul>
      <br />
      <div>
        카카오 이모티콘샵에서 판매되는 콘텐츠의 저작권은 콘텐츠 제공자에게
        있으며, 이를 무단 이용하는 경우 저작권법 등에 따라 처벌될 수 있습니다.
      </div>
      <div>© kakao Crop.</div>
      <div>
        <button onClick={() => window.scrollTo(0, 0)}>
          <FiArrowUp className="ico_btn" />
        </button>
      </div>
      <Spacer />
    </FooterBlock>
  );
};

export default Footer;
