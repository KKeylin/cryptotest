import { call, put, takeLatest } from 'redux-saga/effects';
import { getUrlWithSearchParams } from 'api';
import { handleRequestError } from 'helpers/utils';

import * as actions from './actions';

function* getStats({ payload }) {
  let data;
  try {
    data = yield call(getUrlWithSearchParams(payload));
  } catch (error) {
    yield put(actions.addressData.get.failure());
    handleRequestError(error);
  }
  yield put(actions.addressData.get.success(data));
}

function* nextPage({ payload }) {
  let data;
  try {
    data = yield call(getUrlWithSearchParams(payload));
  } catch (error) {
    yield put(actions.addressData.next.failure());
    handleRequestError(error);
  }
  yield put(actions.addressData.next.success(data));
}

function* previusPage({ payload }) {
  let data;
  try {
    data = yield call(getUrlWithSearchParams(payload));
  } catch (error) {
    yield put(actions.addressData.previus.failure());
    handleRequestError(error);
  }
  yield put(actions.addressData.previus.success(data));
}

export function* usersTransactionsSagas() {
  yield takeLatest(actions.addressData.get.start, getStats);
  yield takeLatest(actions.addressData.next.start, nextPage);
  yield takeLatest(actions.addressData.previus.start, previusPage);
}
