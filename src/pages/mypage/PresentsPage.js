import React from 'react';
import ReceivedPage from './ReceivedPage';
import SentPage from './SentPage';
import PresentsPages from './PresentsPages';

const PresentsPage = ({ match }) => {
  const { prstMenu } = match.params;

  if (!prstMenu) {
    return <div>존재하지 않는 메뉴!</div>;
  }

  switch (prstMenu) {
    case 'received':
      return <ReceivedPage />;
    case 'sent':
      return <SentPage />;
    default:
      return <PresentsPages />;
  }
};

export default PresentsPage;
