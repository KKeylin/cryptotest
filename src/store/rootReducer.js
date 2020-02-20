import { combineReducers } from 'redux';

import { transactionsReducer } from './transactions/reducer';
import { settingsReducer } from './settings/reducer';

export default combineReducers({
  transactions: transactionsReducer,
  settings: settingsReducer,
});
