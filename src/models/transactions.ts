import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { TAppThunk } from 'store';



import { GetTransactions, TTransaction } from 'api/transactions';



import { toggleLoading, showHideMessage } from './ui';


export type TUIState = {
  transactionsList: TTransaction[];
};

const initialState: TUIState = {
  transactionsList: [],
};

const transactions = createSlice({
  name: 'transactions',
  initialState,
  reducers: {
    addTransactions(state, action) {
      state.transactionsList = [...state.transactionsList, ...(action.payload || [])];
    },
  },
});

export const { addTransactions } = transactions.actions;
export default transactions.reducer;

/**
 * Demo login and put token to every new query
 * @param demoCredentials
 */
export const fetchTransactions = (): TAppThunk => async (dispatch) => {
  try {
    dispatch(toggleLoading({ isLoading: true }));
    const transactionResponse: TTransaction[] = await GetTransactions();

    dispatch(addTransactions(transactionResponse));
    dispatch(showHideMessage({ type: 'success', text: 'Transactions fetched successfully' }));
  } catch (error) {
    dispatch(toggleLoading({ isLoading: false }));
    dispatch(showHideMessage({ type: 'error', text: `${error}. Probably server is down. Try to run 'yarn server'` }));
  }
};