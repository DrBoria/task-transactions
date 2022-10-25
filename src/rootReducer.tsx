import { combineReducers } from '@reduxjs/toolkit';
// Used for generating type based on reducer
import uiReducer from 'models/ui';
import transactionsReducer from 'models/transactions';

const RootReducer = combineReducers({
  ui: uiReducer,
  transactions: transactionsReducer,
});

export type TRootState = ReturnType<typeof RootReducer>;

export default RootReducer;
