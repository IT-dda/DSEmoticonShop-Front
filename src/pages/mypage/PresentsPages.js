import React from 'react';
import { Route } from 'react-router-dom';
import PresentsPage from './PresentsPage';

const PresentsPages = () => {
  return (
    <>
      <Route
        path="/mypage/presents"
        exact
        render={() => <div>존재하지 않는 링크</div>}
      />

      <Route path="/mypage/presents/:prstMenu" component={PresentsPage} />
    </>
  );
};

export default PresentsPages;
