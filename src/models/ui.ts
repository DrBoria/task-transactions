import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AppThunk } from 'store';
import { TMessage } from 'api/types';

export type IUIState = {
  loading: boolean;
  successStatus: number | null;
  errorStatus: number | null;
  messages: TMessage[];
};

const initialState: IUIState = {
  loading: false,
  successStatus: null,
  errorStatus: null,
  messages: [],
};

const ui = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    toggleLoading(state, action) {
      state.loading = action.payload.isLoading;
    },
    setSuccsesStatus(state, action: PayloadAction<number | null>) {
      state.successStatus = action.payload;
    },
    setErrorStatus(state, action: PayloadAction<number | null>) {
      state.errorStatus = action.payload;
    },
    showMessage(state, action: PayloadAction<TMessage>) {
      state.messages = [...state.messages, action.payload];
    },
    hideFirstMessage(state) {
      state.messages = state.messages.slice(1);
    },
    hideMessage(state, action: PayloadAction<TMessage>) {
      state.messages = state.messages.filter((message) => message.text !== action.payload.text);
    },
  },
});

export const { toggleLoading, setSuccsesStatus, setErrorStatus, showMessage, hideFirstMessage, hideMessage } =
  ui.actions;
export default ui.reducer;

export const showHideMessage =
  (message: TMessage): AppThunk =>
  async (dispatch) => {
    const messageShowTime = 3000;

    dispatch(showMessage(message));

    setTimeout(() => {
      dispatch(hideFirstMessage());
    }, messageShowTime);
  };
