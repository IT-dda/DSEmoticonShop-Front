import React from 'react';
import CpHavePage from './CpHavePage';
import CpUsedPage from './CpUsedPage';

const CouponsPage = ({ match }) => {
  const { cpMenu } = match.params;

  if (!cpMenu) {
    return <div>존재하지 않는 메뉴!</div>;
  }

  switch (cpMenu) {
    case 'used':
      return <CpUsedPage />;
    default:
      return <CpHavePage />;
  }
};

export default CouponsPage;
