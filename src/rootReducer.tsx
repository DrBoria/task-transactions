/* eslint-disable import/no-cycle */
import { combineReducers } from '@reduxjs/toolkit';

// Used for generating type based on reducer
import uiReducer from 'models/ui';

const rootReducer = combineReducers({
  ui: uiReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
