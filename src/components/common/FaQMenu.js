import React from 'react';
import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components';

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

  ${(props) =>
    props.active &&
    css`
      color: #ffffff;
      background: rgb(59, 59, 59);
      border: 0.3px solid rgb(59, 59, 59);
      font-size: 15px;
      font-weight: bold;
    `}
`;

const faqMenus = [
  {
    category_name: 'INFO',
    text: '서비스안내',
  },
  {
    category_name: 'REGISTER',
    text: '가입탈퇴',
  },
  {
    category_name: 'SERVICE',
    text: '서비스이용',
  },
  {
    category_name: 'PAYMENT',
    text: '결제취소/환불',
  },
  {
    category_name: 'ETC',
    text: '기타',
  },
];

const FaQMenu = ({ category, onSelect }) => {
  return (
    <FaQMenuBlock>
      <div className="my_btns">
        <FaQList>
          {faqMenus.map((menu, index) => (
            <Item>
              <ButtonFaQ
                to={`/faq?category_name=${menu.category_name}`}
                key={index}
                active={category === menu.category_name}
                onClick={() => onSelect(menu.category_name)}
              >
                {menu.text}
              </ButtonFaQ>
            </Item>
          ))}
        </FaQList>
      </div>
    </FaQMenuBlock>
  );
};

export default FaQMenu;
