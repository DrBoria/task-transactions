import { demoQuery, TDemoCredentials, TDemoResponse } from 'api/demoQuery';
import { AppThunk } from 'store';
import { headers } from 'utils/getBasicHeaders';

import { toggleLoading, showHideMessage } from './ui';

/**
 * Demo login and put token to every new query
 * @param demoCredentials
 */
export const demoLogin =
  (demoCredentials: TDemoCredentials): AppThunk =>
  async (dispatch) => {
    try {
      dispatch(toggleLoading({ isLoading: true }));
      const demoResponse: TDemoResponse = await demoQuery(demoCredentials);

      // Set bearer after successfull login
      headers.set('bearer', `${demoResponse.token?.accessToken}`);
      dispatch(showHideMessage({ type: 'success', text: 'Logged in successfully' }));
    } catch (err) {
      dispatch(toggleLoading({ isLoading: false }));
      dispatch(showHideMessage({ type: 'error', text: `${err}` }));
    }
  };
