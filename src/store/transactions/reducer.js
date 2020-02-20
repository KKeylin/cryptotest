import { handleActions } from 'redux-actions';

import * as actions from './actions';

const initialState = {
  instruments: {
    loading: false,
    data: [],
    dataSequence: [],
    itemsReceived: 0,
    pageable: {
      offset: 0,
      pageNumber: 0,
      pageSize: 0,
      pagesTotal: 0,
      paged: false,
      unpaged: true,
      first: true,
      sort: {
        sorted: false,
        unsorted: false,
        empty: true,
      },
    },
    empty: true,
  },
};

export const transactionsReducer = handleActions(
  {
    [actions.usersInstruments.get.start]: state => ({
      ...state,
      instruments: {
        ...state.instruments,
        loading: true,
      },
    }),

    [actions.usersInstruments.get.success]: (state, { payload }) => {
      const data = normalizeusersInstrumentsResponse(payload);

      return {
        ...state,
        instruments: {
          ...state.instruments,
          loading: false,
          ...data,
        },
      };
    },
  },
  initialState
);

function normalizeusersInstrumentsResponse(payload) {
  const {
    content,
    pageable,
    totalPages,
    totalElements,
    first,
    last,
    paged,
    unpaged,
    pageable: { offset },
  } = payload;

  const instrumentsList = {};
  const dataSequence = [];
  content.forEach((item, index) => {
    const key = item.id || item.order_id || index;
    instrumentsList[key] = {
      ...item,
      index: index + offset + 1,
    };
    dataSequence.push(key);
  });

  return {
    data: instrumentsList,
    dataSequence,
    pageable: {
      ...pageable,
      totalPages,
      totalElements,
      first,
      last,
      paged,
      unpaged,
    },
  };
}
