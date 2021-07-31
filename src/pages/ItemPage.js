import React, { useState } from 'react';
import styled from 'styled-components';
import ItemTop from '../components/item/ItemTop';
import ItemBody from '../components/item/ItemBody';
import ItemBottom from '../components/item/ItemBottom';
import Header from '../components/common/Header';
import BuyModal from '../components/item/BuyModal';
import LoginModal from '../components/item/LoginModal';
import ReceiptModal from '../components/item/ReceiptModal';
import PayModal from '../components/item/PayModal';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const FullScreen = styled.div`
  position: fixed;
  z-index: 30;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.25);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ItemPage = ({ match }) => {
  const { emoticon_name } = match.params;
  const [loginOpen, setLoginOpen] = useState(false); // 로그인 여부를 파악하여 로그인 창 띄움
  const [buyOpen, setBuyOpen] = useState(false); // 구매하기 클릭 시 구매 창 띄우기 위한 변수
  const [presentOpen, setPresentOpen] = useState(false); // 선물하기 클릭 시 선물 창 띄우기 위한 변수
  const [payOpen, setPayOpen] = useState(false); // 구매하기 창 다음으로 결제 방법 창을 띄우기 위한 변수
  const [presentPay, setPresentPay] = useState(false); // 선물하기 창 다음으로 결제 방법 창 띄우기 위한 변수
  const [receiptOpen, setReceiptOpen] = useState(false); // 구매하기 : 결제 후 결제 내역 창을 띄우기 위한 변수
  const [presentReceipt, setPresentReceipt] = useState(false); // 선물하기 : 결제 후 결제 내역 창을 띄우기 위한 변수
  const [selectedPay, setSelectedPay] = useState(''); // 결제 방법

  const onClickClose = () => {
    setLoginOpen(false);
  };

  const onBuyOpen = () => {
    setLoginOpen(true);
    setBuyOpen(true);
  };

  const onPresentOpen = () => {
    setLoginOpen(true);
    setPresentOpen(true);
  };

  const onBuyClose = () => {
    setBuyOpen(false);
    setPresentOpen(false);
  };

  const onCompleteBuy = (type) => {
    if (type === '선물') {
      setPresentOpen(false);
      setPresentPay(true);
    } else {
      setBuyOpen(false);
      setPayOpen(true);
    }
  };

  const onCompletePay = (type, pay) => {
    setSelectedPay(pay);

    if (type === '선물') {
      setPresentPay(false);
      setPresentReceipt(true);
    } else {
      setPayOpen(false);
      setReceiptOpen(true);
    }
  };

  const onPayClose = () => {
    setPresentPay(false);
    setPayOpen(false);
  };

  const onReceiptClose = () => {
    setReceiptOpen(false);
    setPresentReceipt(false);
  };

  return (
    <>
      <Header />
      <Wrapper>
        <ItemTop
          name={emoticon_name}
          onBuyOpen={onBuyOpen}
          onPresentOpen={onPresentOpen}
        />
        <ItemBody />
        <ItemBottom />
      </Wrapper>
      {/* TODO : 로그인 중인지 여부를 파악하여 로그인 창, 구매 창 중 하나를 열어야 한다. */}
      {false && loginOpen && (
        <FullScreen>
          <LoginModal onClickClose={onClickClose} />
        </FullScreen>
      )}

      {/* 구매 모달 */}
      {buyOpen && (
        <FullScreen>
          <BuyModal
            onBuyClose={onBuyClose}
            price={2500}
            onCompleteBuy={onCompleteBuy}
          />
        </FullScreen>
      )}
      {presentOpen && (
        <FullScreen>
          <BuyModal
            onBuyClose={onBuyClose}
            isPresent={true}
            price={2500}
            onCompleteBuy={onCompleteBuy}
          />
        </FullScreen>
      )}

      {/* 결제수단 모달 */}
      {payOpen && (
        <FullScreen>
          <PayModal onCompletePay={onCompletePay} onPayClose={onPayClose} />
        </FullScreen>
      )}
      {presentPay && (
        <FullScreen>
          <PayModal
            onCompletePay={onCompletePay}
            isPresent={true}
            onPayClose={onPayClose}
          />
        </FullScreen>
      )}

      {/* 결제내역 모달 */}
      {receiptOpen && (
        <FullScreen>
          <ReceiptModal onReceiptClose={onReceiptClose} pay={selectedPay} />
        </FullScreen>
      )}
      {presentReceipt && (
        <FullScreen>
          <ReceiptModal
            onReceiptClose={onReceiptClose}
            isPresent={true}
            pay={selectedPay}
          />
        </FullScreen>
      )}
    </>
  );
};

export default ItemPage;
