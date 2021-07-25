import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const FaQMenuBlock = styled.div``;

const FaQList = styled.ul`
  padding: 0;
  display: flex;
`;

const Item = styled.li`
  margin-right: 5px;
`;

const ButtonFaQ = styled(Link)`
  background: #ffffff;
  border: 0.3px solid #eeeeee;
  font-size: 15px;

  display: inline-block;
  height: 36px;
  padding: 0 18px;
  border-radius: 19px;
  line-height: 36px;
  vertical-align: top;

  &:hover {
    color: #ffffff;
    background: rgb(59, 59, 59);
    border: 0.3px solid rgb(59, 59, 59);
    font-size: 15px;
    font-weight: bold;
  }
`;

const FaQMenu = () => {
  return (
    <FaQMenuBlock>
      <div className="my_btns">
        <FaQList>
          <Item>
            <ButtonFaQ to="/faq">서비스안내</ButtonFaQ>
          </Item>
          <Item>
            <ButtonFaQ to="/faq">가입탈퇴</ButtonFaQ>
          </Item>
          <Item>
            <ButtonFaQ to="/faq">서비스이용</ButtonFaQ>
          </Item>
          <Item>
            <ButtonFaQ to="/faq">결제취소/환불</ButtonFaQ>
          </Item>
          <Item>
            <ButtonFaQ to="/faq">기타</ButtonFaQ>
          </Item>
        </FaQList>
      </div>
    </FaQMenuBlock>
  );
};

export default FaQMenu;
