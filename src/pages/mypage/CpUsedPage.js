import React from 'react';
import styled from 'styled-components';
import MenuCoupons from '../../components/common/MenuCoupons';
import CpUsedItem from './mypageList/CpUsedItem';

const CpUsedPageBlock = styled.div`
  margin: 0 20%;
`;

const CautionBox = styled.div`
  ul {
    padding-left: 0;
    margin-left: 0;
    li {
      color: #7f7f7f;
      font-size: 14px;
      line-height: 1.5rem;
      li {
        font-size: 0.8rem;
        line-height: 1.2rem;
      }
    }
  }
  .caution::before {
    content: '· ';
  }
`;

const CpUsedPage = () => {
  return (
    <CpUsedPageBlock>
      <MenuCoupons />
      <hr />
      <CpUsedItem />
      <CautionBox>
        <ul>
          <li className="caution">
            쿠폰은 중복으로 사용할 수 없으며, 결제 횟수당 1개만 사용 가능합니다.
          </li>
          <li className="caution">
            일부 카테고리 상품은 할인쿠폰 적용이 불가능합니다.
          </li>
          <li className="caution">
            주문취소 및 환불시 이미 사용한 쿠폰은 재발급되지 않습니다.
          </li>
          <li className="caution">
            발급된 쿠폰의 유효기간은 조기종료 및 변경될 수 있습니다.
          </li>
        </ul>
      </CautionBox>
    </CpUsedPageBlock>
  );
};

export default CpUsedPage;
