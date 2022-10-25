import fetchApi from 'utils/fetch';
import getBasicHeaders from 'utils/getBasicHeaders';

// *********************************************************
// ********************* API TYPES *************************
// *********************************************************
export type TTransaction = {
  id: number,
  amount: number,
  beneficiary: string,
  account: string,
  address: string,
  date: Date,
  description: string
};

// *********************************************************
// ********************* API ENDPOINTS *********************
// *********************************************************
const TransactionsUrl = `${process.env.REACT_APP_BASIC_URL}/transactions`;

// *********************************************************
// ********************* API QUERIES ***********************
// *********************************************************

/**
 * This is demo query
 * @param demoCredentials
 */
export const GetTransactions = async (): Promise<TTransaction[]> => {
  const headers = getBasicHeaders();
  const response: TTransaction[] = await fetchApi(TransactionsUrl, headers, 'GET');
  return response;
};
