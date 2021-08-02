import React from 'react';
import PurchasesPage from './PurchasesPage';
import PresentsPages from './PresentsPages';
import CouponsPages from './CouponsPages';
import LikesPage from './LikesPage';
import MyPages from './MyPages';

const MyPage = ({ match }) => {
  const { mypgMenu } = match.params;

  if (!mypgMenu) {
    return <div>존재하지 않는 메뉴!</div>;
  }

  switch (mypgMenu) {
    case 'purchases':
      return <PurchasesPage />;
    case 'presents':
      return <PresentsPages />;
    case 'coupons':
      return <CouponsPages />;
    case 'likes':
      return <LikesPage />;
    default:
      return <MyPages />;
  }
};

export default MyPage;
