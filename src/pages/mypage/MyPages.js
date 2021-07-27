import React from 'react';
import { Route } from 'react-router-dom';

import BannerMy from '../../components/common/BannerMy';
import Footer from '../../components/common/Footer';
import Header from '../../components/common/Header';
import MyPage from './MyPage';
import styled from 'styled-components';

const Content = styled.div`
  /* viewport_height - Hader_height - MyBanner_height - Foter_height */
  min-height: calc(100vh - 110px - 190px - 50px);
`;

const MyFooter = styled(Footer)`
  height: 50px;
`;

const MyPages = () => {
  return (
    <>
      <Header />
      <Content>
        <BannerMy />

        <Route
          path="/mypage"
          exact
          render={() => <div>존재하지 않는 링크</div>}
        />

        <Route path="/mypage/:mypgMenu" component={MyPage} />
      </Content>
      <MyFooter />
    </>
  );
};

export default MyPages;
