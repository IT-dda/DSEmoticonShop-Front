import React from 'react';
import { Route } from 'react-router-dom';

import BannerMy from '../../components/common/BannerMy';
import Header from '../../components/common/Header';
import MyPage from './MyPage';

const MyPages = () => {
  return (
    <>
      <Header />
      <BannerMy />

      <Route
        path="/mypage"
        exact
        render={() => <div>존재하지 않는 링크</div>}
      />

      <Route path="/mypage/:mypgMenu" component={MyPage} />
    </>
  );
};

export default MyPages;
