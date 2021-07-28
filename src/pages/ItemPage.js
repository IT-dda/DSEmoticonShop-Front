import React, { useState } from 'react';
import styled from 'styled-components';
import ItemTop from '../components/item/ItemTop';
import ItemBody from '../components/item/ItemBody';
import ItemBottom from '../components/item/ItemBottom';
import Header from '../components/common/Header';
import BuyModal from '../components/item/BuyModal';
import LoginModal from '../components/item/LoginModal';
import ReceiptModal from '../components/item/ReceiptModal';

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
  const [loginOpen, setLoginOpen] = useState(false);
  const [buyOpen, setBuyOpen] = useState(false);
  const [presentOpen, setPresentOpen] = useState(false);
  const [receiptOpen, setReceiptOpen] = useState(false);
  const [presentReceipt, setPresentReceipt] = useState(false);

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
      setPresentReceipt(true);
    } else {
      setBuyOpen(false);
      setReceiptOpen(true);
    }
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
      {receiptOpen && (
        <FullScreen>
          <ReceiptModal onReceiptClose={onReceiptClose} />
        </FullScreen>
      )}
      {presentReceipt && (
        <FullScreen>
          <ReceiptModal onReceiptClose={onReceiptClose} isPresent={true} />
        </FullScreen>
      )}
    </>
  );
};

export default ItemPage;
