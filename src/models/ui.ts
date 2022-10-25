import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { TAppThunk } from 'store';



import { TMessage } from 'api/types';


export type TUIState = {
  loading: boolean;
  successStatus: number | null;
  errorStatus: number | null;
  messages: TMessage[];
};

const initialState: TUIState = {
  loading: false,
  successStatus: null,
  errorStatus: null,
  messages: [],
};

const ui = createSlice({
  name:     'ui',
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
  (message: TMessage): TAppThunk =>
  async (dispatch) => {
    const messageShowTime = 3000;

    dispatch(showMessage(message));

    setTimeout(() => {
      dispatch(hideFirstMessage());
    }, messageShowTime);
  };
