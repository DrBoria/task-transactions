import { combineReducers } from '@reduxjs/toolkit';
// Used for generating type based on reducer
import uiReducer from 'models/ui';

const RootReducer = combineReducers({
  ui: uiReducer,
});

export type TRootState = ReturnType<typeof RootReducer>;

export default RootReducer;
