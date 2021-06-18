import React from 'react';
import { Link, Route } from 'react-router-dom';

import MyPage from './MyPage';

const MyPages = () => {
  return (
    <>
      <div>마이페이지</div>
      <ul>
        <li>
          <Link to="/mypage/purchases">구매내역</Link>
        </li>
        <li>
          <Link to="/mypage/presents">선물함</Link>
        </li>
        <li>
          <Link to="/mypage/coupons">쿠폰함</Link>
        </li>
        <li>
          <Link to="/mypage/likes">좋아요</Link>
        </li>
      </ul>

      <hr />

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
