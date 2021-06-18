import React from 'react';
import PurchasesPage from './PurchasesPage';
import PresentsPage from './PresentsPage';
import CouponsPage from './CouponsPage';
import LikesPage from './LikesPage';

const MyPage = ({ match }) => {
  const { mypgMenu } = match.params;

  if (!mypgMenu) {
    return <div>존재하지 않는 메뉴!</div>;
  }

  switch (mypgMenu) {
    case 'purchases':
      return <PurchasesPage />;
    case 'presents':
      return <PresentsPage />;
    case 'coupons':
      return <CouponsPage />;
    case 'likes':
      return <LikesPage />;
  }
};

export default MyPage;
