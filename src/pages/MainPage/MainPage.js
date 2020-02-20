import React from 'react';
import useStyles from './MainPage.styles';
import { Header } from 'components/Header';
import { TransactionsList } from 'components/TransactionsList';

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
