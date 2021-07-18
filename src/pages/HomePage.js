import React from 'react';
import DrawerMenu from '../components/DrawerMenu';

const HomePage = () => {
  return (
    <div>
      홈 (메인)
      {/* TODO: 메뉴바 버튼 클릭 -> 햄버거 메뉴 활성화 -> 외부 영역 클릭 -> 헴버거 메뉴 비활성화 */}
      <DrawerMenu />
    </div>
  );
};

export default HomePage;
