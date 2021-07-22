import React from 'react';
import styled from 'styled-components';

const CpUsedItemBlock = styled.div`
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

const CpUsedItem = () => {
  return (
    <CpUsedItemBlock>
      <div className="area_coupons">
        <span className="ico_coupons ico_usedcoupon20"></span>
      </div>

      <div className="area_tit">
        <span className="txt_tit">[파격특가] 처음 만나는 웰컴백 할인쿠폰!</span>
        <p className="desc_coupon">
          <span className="txt_en">2019.02.09</span>
          사용
        </p>
      </div>
    </CpUsedItemBlock>
  );
};

export default CpUsedItem;
