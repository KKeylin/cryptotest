import React from 'react';
import { Grid, Paper } from '@material-ui/core';
import { criptoNormalizer } from 'helpers/utils';
import { ADDRESS } from 'constants/main';
import useStyles from './Transaction.styles';

export default function OutputsItem({ item }) {
  const classes = useStyles();
  const { script, addresses, value } = item;
  return (
    <Paper key={script} className={classes.fundsOut}>
      <Grid container justify="space-between">
        <Grid
          item
          xs={8}
          sm={8}
          className={
            addresses && addresses[0] === ADDRESS ? classes.primaryAddres : classes.secondaryAddres
          }
        >
          {addresses}
        </Grid>
        <Grid item xs={4} sm={4} className={classes.txValue}>
          {criptoNormalizer(value)}
        </Grid>
      </Grid>
    </Paper>
  );
}
