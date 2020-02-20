import { handleActions } from 'redux-actions';
import { criptoNormalizer } from 'helpers/utils';

import * as actions from './actions';

const initialState = {
  loading: false,
  txs: [],
  total_sent: 0,
  total_received: 0,
  balance: 0,
  error: false,
  errorMessage: '',
};

function loadingStart(state) {
  return {
    ...state,
    loading: true,
  };
}

function loadingFailure(state, { payload }) {
  return {
    ...state,
    loading: false,
    error: true,
    errorMessage: payload,
  };
}

function loadingSuccess(state, action) {
  const { txs, total_received, total_sent, final_balance } = action.payload;
  return {
    ...state,
    loading: false,
    txs: txs.length ? txs : [],
    total_received: criptoNormalizer(total_received),
    total_sent: criptoNormalizer(total_sent),
    balance: criptoNormalizer(final_balance),
  };
}

function loadingAfterChangeOfPage(state, { payload }) {
  const { txs } = payload;

  return {
    ...state,
    loading: false,
    txs: txs.length ? txs : [],
  };
}

export const transactionsReducer = handleActions(
  {
    [actions.addressData.get.start]: state => loadingStart(state),
    [actions.addressData.update.start]: state => loadingStart(state),
    [actions.addressData.next.start]: state => loadingStart(state),
    [actions.addressData.previus.start]: state => loadingStart(state),

    [actions.addressData.get.failure]: state => loadingFailure(state),
    [actions.addressData.update.failure]: state => loadingFailure(state),
    [actions.addressData.next.failure]: state => loadingFailure(state),
    [actions.addressData.previus.failure]: state => loadingFailure(state),

    [actions.addressData.get.success]: (state, action) => loadingSuccess(state, action),
    [actions.addressData.update.success]: (state, action) => loadingSuccess(state, action),
    [actions.addressData.next.success]: (state, action) => loadingAfterChangeOfPage(state, action),
    [actions.addressData.previus.success]: (state, action) =>
      loadingAfterChangeOfPage(state, action),
  },
  initialState
);
