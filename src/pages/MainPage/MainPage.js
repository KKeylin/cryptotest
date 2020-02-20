import React from 'react';
import { Header } from 'components/Header';
import { TransactionsList } from 'components/TransactionsList';
import useStyles from './MainPage.styles';

function MainPage() {
  const classes = useStyles();

  return (
    <div className={classes.mainContentWrapper}>
      <Header />
      <TransactionsList />
    </div>
  );
}

export default MainPage;
