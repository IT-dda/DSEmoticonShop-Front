import React from 'react';
import NewItemList from '../components/new/NewItemList';
import Banner from '../components/common/Banner';
import Header from '../components/common/Header';

const NewPage = () => {
  return (
    <>
      <Header menu="new"></Header>
      <Banner></Banner>
      <NewItemList></NewItemList>
    </>
  );
};

export default NewPage;
