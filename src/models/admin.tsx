import { loginAdminQuery, IAdminCredentials, ILoginAdminResponse } from 'api/admin';
import { AppThunk } from 'store';
import { headers } from 'utils/getBasicHeaders';

import { toggleLoading, showHideMessage } from './ui';

/**
 * Login admin and put token to every new query
 * @param adminCredentials
 */
export const loginAdmin =
  (adminCredentials: IAdminCredentials): AppThunk =>
  async (dispatch) => {
    try {
      dispatch(toggleLoading({ isLoading: true }));
      const updatedStudent: ILoginAdminResponse = await loginAdminQuery(adminCredentials);

      // Set bearer after successfull login
      headers.set('bearer', `${updatedStudent.token?.accessToken}`);
      dispatch(showHideMessage({ type: 'success', text: 'Logged in successfully' }));
    } catch (err) {
      dispatch(toggleLoading({ isLoading: false }));
      dispatch(showHideMessage({ type: 'error', text: `${err}` }));
    }
  };
