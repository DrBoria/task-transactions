import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { loginAdminQuery, IAdminCredentials, ILoginAdminResponse } from 'api/admin';
/* eslint-disable import/no-cycle */
import { AppThunk } from 'store';
import { headers } from 'utils/getBasicHeaders';

interface IUserListState {
  loading: boolean;
  error: string | null;
  success: boolean;
}

const initialState: IUserListState = {
  loading: false,
  error: null,
  success: false,
};

const comments = createSlice({
  name: 'admin',
  initialState,
  reducers: {
    loginAdminStart(state) {
      state.loading = true;
      state.error = null;
      state.success = false;
    },
    loginAdminSuccess(state) {
      state.loading = false;
      state.error = null;
      state.success = true;
    },
    loginAdminFailure(state, action: PayloadAction<string>) {
      state.loading = false;
      state.error = action.payload;
      state.success = false;
    },
  },
});

export const { loginAdminStart, loginAdminSuccess, loginAdminFailure } = comments.actions;
export default comments.reducer;

/**
 * Login admin and put token to every new query
 * @param adminCredentials
 */
export const loginAdmin =
  (adminCredentials: IAdminCredentials): AppThunk =>
  async (dispatch) => {
    try {
      dispatch(loginAdminStart());
      const updatedStudent: ILoginAdminResponse = await loginAdminQuery(adminCredentials);

      // Set bearer after successfull login
      headers.set('bearer', `${updatedStudent.token?.accessToken}`);
      dispatch(loginAdminSuccess());
    } catch (err) {
      dispatch(loginAdminFailure(err));
    }
  };
