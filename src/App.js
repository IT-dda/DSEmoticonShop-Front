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

const App = () => {
  return (
    <>
      <Route component={HomePage} path="/" exact />
      <Route component={NewPage} path="/item/new" />
      <Route component={HotPage} path="/item/hot" />
      <Route component={StylePage} path="/item/style" />
      <Route component={MyPage} path="/mypage" />
      <Route component={NoticePage} path="/notices" />
      <Route component={FaQPage} path="/faq" />
      <Route component={NumberPage} path="/number" />
      <Route component={LoginPage} path="/login" />
      <Route component={SearchPage} path="/search" />
    </>
  );
};

export default App;
