import React from 'react';

import { useSelector } from 'react-redux';
import useStyles from './Spinner.styles';

export default function Spinner({ isLoadingSelector }) {
  const classes = useStyles();

  const isLoading = useSelector(isLoadingSelector);

  return (
    <>
      {isLoading && (
        <div className={classes.overlay}>
          <div className={classes.ldsEllipsis}>
            <div />
            <div />
            <div />
            <div />
          </div>
        </div>
      )}
    </>
  );
}
