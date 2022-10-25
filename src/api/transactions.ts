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
  address?: string,
  date: Date,
  description?: string
};

// *********************************************************
// ********************* API ENDPOINTS *********************
// *********************************************************
const TransactionsUrl = `${process.env.REACT_APP_BASIC_URL}/transactions`;

// *********************************************************
// ********************* API QUERIES ***********************
// *********************************************************

/**
 * Fetching all available transactions
 */
export const GetTransactions = async (): Promise<TTransaction[]> => {
  const headers = getBasicHeaders();
  const response: TTransaction[] = await fetchApi(TransactionsUrl, headers, 'GET');
  return response;
};

/**
 * Adding 1 transaction
 * @param transaction
 */
export const PostTransaction = async (transaction: TTransaction): Promise<TTransaction> => {
  const headers = getBasicHeaders();
  const response: TTransaction = await fetchApi(TransactionsUrl, headers, 'POST', transaction);
  return response;
};

/**
 * Remove transaction by id
 * @param transactionId
 */
export const DeleteTransaction = async (transactionId: number): Promise<TTransaction> => {
  const headers = getBasicHeaders();
  const response: TTransaction = await fetchApi(`${TransactionsUrl}/${transactionId}`, headers, 'DELETE');
  return response;
};
