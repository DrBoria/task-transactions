/* eslint-disable import/no-cycle */
import { combineReducers } from '@reduxjs/toolkit';
// Used for generating type based on reducer
import adminReducer from 'features/admin';

const rootReducer = combineReducers({
  admin: adminReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
