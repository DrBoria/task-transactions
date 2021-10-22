import { loginAdminQuery, IAdminCredentials, ILoginAdminResponse } from 'api/admin';
/* eslint-disable import/no-cycle */
import { AppThunk } from 'store';
import { headers } from 'utils/getBasicHeaders';

import { loadingStart, loadingSuccess, loadingFailure } from './ui';

/**
 * Login admin and put token to every new query
 * @param adminCredentials
 */
export const loginAdmin =
  (adminCredentials: IAdminCredentials): AppThunk =>
  async (dispatch) => {
    try {
      dispatch(loadingStart());
      const updatedStudent: ILoginAdminResponse = await loginAdminQuery(adminCredentials);

      // Set bearer after successfull login
      headers.set('bearer', `${updatedStudent.token?.accessToken}`);
      dispatch(loadingSuccess());
    } catch (err) {
      dispatch(loadingFailure(`${err}`));
    }
  };
