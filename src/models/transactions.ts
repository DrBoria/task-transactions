import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { TAppThunk } from 'store';



import { GetTransactions, TTransaction } from 'api/transactions';



import { toggleLoading, showHideMessage } from './ui';


export type TUIState = {
  loadedTransactionsList: TTransaction[];
  displayedTransactionsList: TTransaction[];
  currentPage: number,
  rowsPerPage: number,
};

const initialState: TUIState = {
  loadedTransactionsList: [],
  displayedTransactionsList: [],
  currentPage: 0,
  rowsPerPage: 20,
};

const transactions = createSlice({
  name: 'transactions',
  initialState,
  reducers: {
    addTransactions(state, action) {
      state.loadedTransactionsList = [...state.loadedTransactionsList, ...(action.payload || [])];
      state.displayedTransactionsList = state.loadedTransactionsList;
    },
    filterBeneficiaryTransactions(state, action) {
      state.displayedTransactionsList = state.loadedTransactionsList.filter((transaction) =>
        transaction.beneficiary.toLowerCase().includes(action.payload.toLowerCase())
      );
      state.currentPage = 0;
    },
    setCurrentPage(state, action: PayloadAction<number>) {
      state.currentPage = action.payload;
    },
    setRowsPerPage(state, action: PayloadAction<number>) {
      state.rowsPerPage = action.payload;
    },
  },
});

export const { addTransactions, filterBeneficiaryTransactions, setCurrentPage, setRowsPerPage } = transactions.actions;
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