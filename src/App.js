import React from 'react';
import { Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import NewPage from './pages/NewPage';
import HotPage from './pages/HotPage';
import StylePage from './pages/StylePage';
import MyPage from './pages/mypage/MyPages';
import NoticePage from './pages/NoticePage';
import FaQPage from './pages/FaQPage';
import NumberPage from './pages/NumberPage';
import LoginPage from './pages/LoginPage';
import SearchPage from './pages/SearchPage';
import ItemPage from './pages/ItemPage';
import StyleGroupPage from './pages/StyleGroupPage';

const App = () => {
  return (
    <>
      <Route component={HomePage} path="/" exact />
      <Route
        component={NewPage}
        path="/item/new"
        onUpdate={() => window.scrollTo(0, 0)}
      />
      <Route
        component={HotPage}
        path="/item/hot"
        onUpdate={() => window.scrollTo(0, 0)}
      />
      <Route
        component={StylePage}
        path="/item/style"
        onUpdate={() => window.scrollTo(0, 0)}
      />
      <Route component={MyPage} path="/mypage" />
      <Route component={NoticePage} path="/notices" />
      <Route component={FaQPage} path="/faq" />
      <Route component={NumberPage} path="/number" />
      <Route component={LoginPage} path="/login" />
      <Route component={SearchPage} path="/search" />
      <Route component={ItemPage} path="/t/:emoticon_name" />
      <Route component={StyleGroupPage} path="/style/categories/:id" />
    </>
  );
};

export default App;
