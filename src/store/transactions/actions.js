import { createActions } from 'redux-actions';

export const { addressData } = createActions({
  ADDRESS_DATA: {
    GET: {
      START: data => data,
      SUCCESS: data => data,
      FAILURE: data => data,
    },
    UPDATE: {
      START: data => data,
      SUCCESS: data => data,
      FAILURE: data => data,
    },
    NEXT: {
      START: data => data,
      SUCCESS: data => data,
      FAILURE: data => data,
    },
    PREVIUS: {
      START: data => data,
      SUCCESS: data => data,
      FAILURE: data => data,
    },
  },
});
