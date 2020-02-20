import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import UpdateIcon from '@material-ui/icons/Update';
import { IconButton } from '@material-ui/core';
import { ADDRESS, LIMIT, CONFIRMATIONS } from 'constants/main';
import * as transactionActions from 'store/transactions/actions';
import * as txSelectors from 'store/transactions/selectors';
import { getSettings } from 'store/settings/selectors';
import useStyles from './Header.styles';
import { Spinner } from 'components/Spinner';

export default function Header() {
  const classes = useStyles();
  const dispatch = useDispatch();

  const [fundUpdateTime, setFundUpdateTime] = useState(0);
  const itemsSent = useSelector(txSelectors.getTransactionsSent);
  const itemsReceived = useSelector(txSelectors.getTransactionsReceived);
  const itemsBalance = useSelector(txSelectors.getTransactionsBalance);
  const { totalItems } = useSelector(getSettings);

  useEffect(() => {
    const params = {
      limit: LIMIT,
      confirmations: CONFIRMATIONS,
    };
    dispatch(transactionActions.addressData.get.start(params));
  }, [dispatch, fundUpdateTime]);

  const handleRefreshClick = () => setFundUpdateTime(new Date().getTime());

  return (
    <>
      <h2 className={classes.title}>
        Information about address: <span className={classes.address}>{ADDRESS}</span>
      </h2>
      <div className={classes.rootWrapper}>
        <div className={classes.entry}>
          <Spinner isLoadingSelector={txSelectors.getTransactionsLoading} />
          <div className={classes.statsItem}>
            <div>
              <b>Confirmed tx count:</b>
            </div>
            <div>{totalItems}</div>
          </div>
          <div className={classes.statsItem}>
            <div>
              <b>Confirmed received:</b>
            </div>
            <div>{`${itemsReceived} tBTC`}</div>
          </div>
          <div className={classes.statsItem}>
            <div>
              <b>Confirmed spent:</b>
            </div>
            <div>{`${itemsSent} tBTC`}</div>
          </div>
          <div className={classes.statsItem}>
            <div>
              <b>Confirmed unspent(Current balans):</b>
            </div>
            <div>{`${itemsBalance} tBTC`}</div>
          </div>
          <IconButton
            className={classes.refreshButton}
            onClick={handleRefreshClick}
            color="primary"
            aria-label="Refresh"
          >
            <UpdateIcon fontSize="inherit" />
          </IconButton>
        </div>
      </div>
    </>
  );
}
