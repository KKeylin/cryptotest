import React from 'react';
import { Card, Grid, CircularProgress, CardContent, Typography, Chip } from '@material-ui/core';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import FlightLandIcon from '@material-ui/icons/FlightLand';
import FlightTakeoffIcon from '@material-ui/icons/FlightTakeoff';
import DoneAllIcon from '@material-ui/icons/DoneAll';
import { ADDRESS } from 'constants/main';
import useStyles from './Transaction.styles';

import InputsItem from './InputsItem';
import OutputsItem from './OutputsItem';
import { criptoNormalizer } from 'helpers/utils';

export default function Transactions({ data }) {
  const { hash, confirmations, inputs, outputs, total } = data;
  const classes = useStyles();
  let income = false;
  for (let i = 0; i < data.inputs.length; i++) {
    if (data.inputs[i].addresses && data.inputs[i].addresses[0] === ADDRESS) {
      income = true;
      break;
    }
  }

  return (
    <Card key={hash} className={classes.root}>
      <CardContent>
        <Typography variant="h6" component="h2" color="primary" className={classes.transactionName}>
          {hash}
        </Typography>
        <div className={classes.iconsLine}>
          <Chip
            icon={
              income ? <FlightTakeoffIcon className={classes.outcomeIcon} /> : <FlightLandIcon />
            }
            label={income ? 'Outcome TX' : ' Income TX'}
            component="span"
            color={income ? 'default' : 'primary'}
            size="small"
            className={income ? classes.outcomeBadge : classes.incomeBadge}
          />
          {confirmations === 0 && (
            <Chip
              icon={<CircularProgress size={16} />}
              label="Expected transaction"
              component="span"
              size="small"
              className={classes.incomeBadge}
            />
          )}
          {confirmations > 2 && (
            <Chip
              icon={<DoneAllIcon />}
              label={`${confirmations} Confirmations`}
              component="span"
              color="default"
              size="small"
              className={classes.incomeBadge}
            />
          )}
        </div>
        <Grid item xs={12}>
          <Grid container justify="space-between">
            <Grid item xs={5} sm={5}>
              {inputs.map(item => {
                return <InputsItem key={item.script} item={item} />;
              })}
            </Grid>
            <Grid item>
              <ArrowForwardIosIcon className={classes.icon} />
            </Grid>
            <Grid item xs={5} sm={5}>
              {outputs.map(item => {
                return item.value ? <OutputsItem key={item.script} item={item} /> : '';
              })}
            </Grid>
          </Grid>
        </Grid>
      </CardContent>
      <CardContent className={classes.total}>
        <Typography color="textSecondary">
          Total: <span className={classes.sum}>{criptoNormalizer(total)} tBTC</span>
        </Typography>
      </CardContent>
    </Card>
  );
}
