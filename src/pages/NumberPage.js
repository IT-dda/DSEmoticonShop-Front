import React from 'react';
import styled from 'styled-components';

const NumberPageBlock = styled.div`
  width: 100%;
  height: 100%;
`;

const HeadCoupon = styled.div`
  background: rgb(253, 234, 89);
  padding: 20px;
  text-align: center;
  width: 100%;
`;
const InputNumber = styled.input`
  border: rgb(219, 219, 219);
  border-style: solid;
  border-width: 1px;
  border-radius: 4px;
  margin: 3rem;
  padding: 1rem;
  width: 100%;
`;

const CautionBox = styled.div`
  margin: 0 3rem;

  ul > li {
    color: #7f7f7f;
    font-size: 14px;
    line-height: 1.5rem;
    /* padding-left: 0px; */
    /* 들여쓰기 없애기 */
  }
`;

const BtnBox = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 80px;
  padding: 20px 28px;

  button {
    width: 100%;
    border: none;
    padding: 1rem;
    letter-spacing: 2px; /*글자사이 간격*/
    border-radius: 6px;
    &:hover {
      background-color: rgb(253, 234, 89);
    }
  }
`;

const NumberPage = () => {
  return (
    <NumberPageBlock>
      <HeadCoupon>
        <h2>이모티콘 일련번호 등록</h2>
      </HeadCoupon>
      <InputNumber placeholder="일련번호는 영문과 숫자만 등록 가능합니다."></InputNumber>

      <CautionBox>
        <h3>유의사항</h3>
        <ul>
          <li>등록기간이 지난 일련 번호는 등록 불가능합니다</li>
          <li>
            일련번호 등록 후부터 ‘사용기간’ 동안 해당 이모티콘을 사용
            가능합니다.
          </li>
          <li>한번 등록한 일련번호는 재등록이 불가합니다.</li>
          <li>
            이벤트 당첨 확인 및 지급여부와 관련된 문의는 해당 이벤트 주최측에
            문의바랍니다.
          </li>
          <li>
            이모티콘을 받으실 카카오톡이 전화번호에 연결되어 있고 카카오 계정
            로그인이 되어 있어야 다운로드가 가능합니다.
            <ul>
              <li>
                전화번호 확인 : 카카오톡 > 내 프로필 > 프로필관리 > 계정의
                전화번호
              </li>
              <li>
                계정 로그인 확인 : 카카오톡 > 더보기 > 설정 > 개인/보안 > 카카오
                계정 로그인
              </li>
            </ul>
          </li>
          <li>
            이미 해당 이모티콘을 보유 시 일련번호는 등록되지 않습니다. 해당
            아이템을 보유하고 있지 않은 친구에게 이모티콘을 선물하세요.
          </li>
          <li>
            일련번호 등록 과정에서 발생하는 오류문의는 카카오톡 더보기 > 설정 >
            고객센터로 문의하세요.
          </li>
          <li>
            일련번호 분실에 대한 책임은 소지자에게 있으며, 분실된 일련번호 또는
            고객의 실수로 사용된 일련번호에 대해 보상해드리지 않습니다.
          </li>
        </ul>
      </CautionBox>

      <BtnBox>
        {/* <button onclick={alert('등록되었습니다.')}>등록하기</button> */}
        <button>등록하기</button>
      </BtnBox>
    </NumberPageBlock>
  );
};

export default NumberPage;
