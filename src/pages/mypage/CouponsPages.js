import React from 'react';
import { Route } from 'react-router-dom';
import CouponsPage from './CouponsPage';
import CpHavePage from './CpHavePage';

const CouponsPages = () => {
  return (
    <>
      <Route path="/mypage/coupons" exact render={() => <CpHavePage />} />
      <Route path="/mypage/coupons/:cpMenu" component={CouponsPage} />
    </>
  );
};

export default CouponsPages;
