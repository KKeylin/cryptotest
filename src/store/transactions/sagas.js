import { call, put, takeLatest } from 'redux-saga/effects';

import { api, getUrlWithSearchParams } from 'api';
import { handleRequestError } from 'helpers/utils';
import * as actions from './actions';

export const getUsersInstrumentsReq = params => {
  const url = getUrlWithSearchParams('/api/user/instruments', params);
  return api.get(url);
};

function* getUsersInstruments({ payload }) {
  try {
    const data = yield call(getUsersInstrumentsReq, payload);

    yield put(actions.usersInstruments.get.success(data));
  } catch (error) {
    yield put(actions.usersInstruments.get.failure());
    handleRequestError(error);
  }
}

export function* usersTransactionsSagas() {
  yield takeLatest(actions.usersInstruments.get.start, getUsersInstruments);
}
