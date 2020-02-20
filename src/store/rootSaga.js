/* eslint-disable import/no-cycle */
import { fork } from 'redux-saga/effects';

import { usersTransactionsSagas } from './transactions/sagas';
// import { stats } from './stats/sagas';

export default function* rootSaga() {
  yield fork(usersTransactionsSagas);
  // yield fork(stats);
}
