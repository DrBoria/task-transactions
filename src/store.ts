import { configureStore, Action } from '@reduxjs/toolkit';
import { ThunkAction } from 'redux-thunk';

import RootReducer, { TRootState } from './rootReducer';

const store = configureStore({
  reducer: RootReducer,
});

if (process.env.NODE_ENV === 'development' && module.hot) {
  /* eslint unicorn/prefer-module: "off" */
  module.hot.accept('./rootReducer', () => {
    /* eslint @typescript-eslint/no-var-requires: off */
    const newRootReducer = require('./rootReducer').default;
    store.replaceReducer(newRootReducer);
  });
}

export type TAppDispatch = typeof store.dispatch;

export type TAppThunk = ThunkAction<void, TRootState, unknown, Action<string>>;

export default store;
