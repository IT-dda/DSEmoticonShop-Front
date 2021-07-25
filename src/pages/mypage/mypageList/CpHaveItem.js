import React from 'react';
import styled from 'styled-components';

const CpHaveItemBlock = styled.div`
  padding: 20px 0px;
  display: grid;
  grid-template-columns: 10% 90%;

  .area_coupons {
    width: 64px;
    margin-right: 1rem;

    .ico_usedcoupon20 {
      width: 64px;
      height: 44px;
      background-position: -140px -50px;
    }
    .ico_coupons {
      display: inline-block;
      overflow: hidden;
      font-size: 1px;
      line-height: 0;
      color: transparent;
      vertical-align: top;
      background: url('/image/ico_coupon.png') no-repeat;
      background-size: 280px 100px;
    }
  }

  .area_tit {
    .desc_coupon {
      color: #7f7f7f;
      font-size: 13px;
      margin-top: 0;

      .txt_en {
        margin-right: 0.3rem;
      }
    }
  }
`;

const CpHaveItem = () => {
  return (
    <CpHaveItemBlock>
      {' '}
      <div className="area_coupons">
        <span className="ico_coupons ico_usedcoupon20"></span>
      </div>
      <div className="area_tit">
        <span className="txt_tit">8월, 전상품 10% 할인</span>
        <p className="desc_coupon">
          <span className="txt_en">2021.08.31</span>
          까지
        </p>
      </div>
    </CpHaveItemBlock>
  );
};

export default CpHaveItem;
