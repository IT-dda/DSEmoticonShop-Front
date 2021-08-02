import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import styled from 'styled-components';

const MenuPresentBlock = styled.div`
  display: flex;

  .title_my {
    margin-right: 1rem;
  }
`;

const Item = styled.li`
  margin: 20px 0;
  color: ${(props) => (props.current ? '#191919' : '#999999')};
`;

const Title = styled.span`
  display: inline-block;
  padding: 20px 0;
  font-size: 18px;
  line-height: 27px;
  font-weight: bold;
`;

const MenuPresnet = ({ location: { pathname } }) => {
  return (
    <MenuPresentBlock>
      <Item current={pathname === '/mypage/presents/received'}>
        <Link className="title_my" to="/mypage/presents/received">
          <Title>받은 선물함</Title>
        </Link>
      </Item>
      <Item current={pathname === '/mypage/presents/sent'}>
        <Link className="title_my" to="/mypage/presents/sent">
          <Title>보낸 선물함</Title>
        </Link>
      </Item>
    </MenuPresentBlock>
  );
};

export default withRouter(MenuPresnet);
