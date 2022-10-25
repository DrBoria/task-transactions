import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { TAppThunk } from 'store';



import { GetTransactions, PostTransaction, TTransaction } from 'api/transactions';



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
    setTransactions(state, action) {
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

export const { setTransactions, filterBeneficiaryTransactions, setCurrentPage, setRowsPerPage } = transactions.actions;
export default transactions.reducer;

/**
 * Fetch and store transactions
 */
export const fetchTransactions = (): TAppThunk => async (dispatch) => {
  try {
    dispatch(toggleLoading({ isLoading: true }));
    const transactionList: TTransaction[] = await GetTransactions();

    dispatch(setTransactions(transactionList));
    dispatch(showHideMessage({ type: 'success', text: 'Transactions fetched successfully' }));
  } catch (error) {
    dispatch(toggleLoading({ isLoading: false }));
    dispatch(showHideMessage({ type: 'error', text: `Probably server is down. Try to run 'yarn server' ${error}` }));
  }
};

/**
 * Fetch and store transactions
 */
export const addTransaction =
  ({
    amount,
    account,
    address,
    description,
  }: {
    amount: number;
    account: string;
    address?: string;
    description?: string;
  }): TAppThunk =>
  async (dispatch) => {
    try {
      dispatch(toggleLoading({ isLoading: true }));
      const createdTransaction: TTransaction = await PostTransaction({
        amount,
        account,
        address,
        description,
        beneficiary: 'John Doe',
        date: new Date(),
        id: Date.now() // TODO: replace with UUID
      });

      dispatch(setTransactions([createdTransaction]));
      dispatch(showHideMessage({ type: 'success', text: 'Transactions added successfully' }));
    } catch (error) {
      dispatch(toggleLoading({ isLoading: false }));
      dispatch(showHideMessage({ type: 'error', text: `Error While adding transaction: ${error}` }));
    }
  };