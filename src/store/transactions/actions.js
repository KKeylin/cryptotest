import { createActions } from 'redux-actions';

export const { usersInstruments } = createActions(
  {
    USERS_INSTRUMENTS: {
      GET: {
        START: data => data,
        SUCCESS: data => data,
        FAILURE: data => data,
      },
    },
  },
);
