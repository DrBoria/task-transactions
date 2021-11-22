import { DemoQuery, TDemoCredentials, TDemoResponse } from 'api/demoQuery';
import { TAppThunk } from 'store';

import { headers } from 'utils/getBasicHeaders';

import { toggleLoading, showHideMessage } from './ui';

/**
 * Demo login and put token to every new query
 * @param demoCredentials
 */
export const fetchDemoLogin =
  (demoCredentials: TDemoCredentials): TAppThunk =>
  async (dispatch) => {
    try {
      dispatch(toggleLoading({ isLoading: true }));
      const demoResponse: TDemoResponse = await DemoQuery(demoCredentials);

      // Set bearer after successfull login
      headers.set('bearer', `${demoResponse.token?.accessToken}`);
      dispatch(showHideMessage({ type: 'success', text: 'Logged in successfully' }));
    } catch (error) {
      dispatch(toggleLoading({ isLoading: false }));
      dispatch(showHideMessage({ type: 'error', text: `${error}` }));
    }
  };
