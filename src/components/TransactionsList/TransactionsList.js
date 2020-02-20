import React, { useEffect, useState } from 'react';
import {
  Paper,
  Container,
  TablePagination,
  Typography,
} from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import * as Scroll from 'react-scroll';
import * as transactionActions from 'store/transactions/actions';
import * as txSelectors from 'store/transactions/selectors';
import { getSettings } from 'store/settings/selectors';
import { Spinner } from 'components/Spinner';
import { LIMIT } from 'constants/main';
import { Transaction } from 'components/Transaction';
import useStyles from './TransactionsList.styles';

export default function Variants() {
  const classes = useStyles();
  const [nextPage, setNextPage] = useState([0, 0]);
  const {
    totalItems,
    page,
    before,
    after,
  } = useSelector(getSettings);
  const items = useSelector(txSelectors.getTransactionsTX);
  const dispatch = useDispatch();
  const scroll = Scroll.animateScroll;

  useEffect(() => {
    const params = {
      limit: LIMIT,
    };
    const [nextPageSwitcher, stepValue] = nextPage;

    if (nextPageSwitcher > 0) {
      params.before = stepValue;
    } else {
      params.after = stepValue;
    }

    const actionDirection = nextPageSwitcher > 0 ? 'next' : 'previus';
    if (nextPageSwitcher !== 0) {
      dispatch(transactionActions.addressData[actionDirection].start(params));
      scroll.scrollToTop();
    }
  }, [dispatch, nextPage, scroll]);

  const handlePagination = (e, i) => {
    const direction = i - page;
    return setNextPage([direction, direction > 0 ? before : after]);
  };

  return (
    <Container maxWidth="md">
      <Paper variant="outlined" className={classes.root}>
        <Spinner isLoadingSelector={txSelectors.getTransactionsLoading} />
        {items.length ? (
          items.map(data => <Transaction key={data.block_hash ? data.block_hash : data.hash} data={data} />)
        ) : (
          <Typography align="center" variant="h6" component="h5" color="error">
            To items yet
          </Typography>
          )}
        {totalItems > LIMIT && (
          <TablePagination
            component="div"
            className={classes.pagination}
            rowsPerPageOptions={[LIMIT]}
            colSpan={3}
            count={totalItems}
            rowsPerPage={LIMIT}
            page={page}
            onChangePage={handlePagination}
          />
        )}
      </Paper>
    </Container>
  );
}
