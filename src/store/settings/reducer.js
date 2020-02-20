/* eslint-disable camelcase */
import { handleActions } from 'redux-actions';
import { LIMIT } from 'constants/main';
import * as actions from '../transactions/actions';

const initialState = {
  before: null,
  after: null,
  page: 0,
  totalItems: 0,
  areIncomeNewTransactions: false,
  needToBeReload: false,
};

export const settingsReducer = handleActions(
  {
    [actions.addressData.get.success]: (state, action) => {
      const { n_tx, txs } = action.payload;
      const before = txs[LIMIT - 1] ? txs[LIMIT - 1].block_height : null;

      return {
        ...state,
        loading: false,
        totalItems: n_tx,
        page: 0,
        data: txs,
        before,
      };
    },

    [actions.addressData.next.success]: (state, { payload }) => {
      const { n_tx, txs } = payload;
      const { page } = state;
      const newPage = page + 1;
      const after = txs[0].block_height;
      const before = txs[LIMIT - 1] ? txs[LIMIT - 1].block_height : null;

      return {
        ...state,
        totalItems: n_tx,
        data: txs,
        page: newPage,
        after,
        before,
      };
    },

    [actions.addressData.previus.success]: (state, { payload }) => {
      const { n_tx, txs } = payload;
      const { page } = state;
      const newPage = page - 1;
      const after = page ? txs[0].block_height : null;
      const before = txs[LIMIT - 1] ? txs[LIMIT - 1].block_height : null;

      return {
        ...state,
        totalItems: n_tx,
        page: newPage,
        after,
        before,
      };
    },
  },
  initialState,
);
