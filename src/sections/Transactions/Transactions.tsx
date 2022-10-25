import { FC, Fragment } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { TRootState } from 'rootReducer';

import { TTransaction } from 'api/transactions';

import { BasicSection } from 'components/Containers';
import TableContainer, { THeaderCol } from 'components/Table';
import { TextDisplayCell } from 'components/Table/TableCels';

import { deleteTransaction, setCurrentPage, setRowsPerPage } from 'models/transactions';

import WithPagination from 'utils/withPagination';
import { FiDelete } from 'react-icons/fi';
import Button from 'components/Button';

type TTransactionSection = {
  transactionsList: TTransaction[];
  ordersRows?: THeaderCol[];
  currentPage?: number;
};

const Transactions: FC<TTransactionSection> = ({ transactionsList, ordersRows }) => {
  const dispatcher = useDispatch();
  const { currentPage, rowsPerPage } = useSelector((state: TRootState) => state.transactions);

  const changePage = (pageNumber: number) => {
    dispatcher(setCurrentPage(pageNumber));
  }

  const changeElementsPerPage = (rowsPerPageCount: number) => {
    dispatcher(setRowsPerPage(rowsPerPageCount));
  };
  
  const handleDeleteElement = (transactionId: number) => {
    dispatcher(deleteTransaction(transactionId));
  };
  
  return (
    <BasicSection>
      <TableContainer
        colsTemplate='repeat(7, minmax(0, 1fr));'
        headerCols={ordersRows}
        pagination={{ current: currentPage, totalPages: Math.ceil(transactionsList.length / rowsPerPage), changePage}}
        rowsPerPage={{
          options: [
            { value: 10, text: '10' },
            { value: 20, text: '20' },
          ],
          current: rowsPerPage,
          changeElementsPerPage,
        }}
      >
        {WithPagination(transactionsList, rowsPerPage, currentPage).map((transaction) => (
          <Fragment key={transaction.id}>
            {/* Amount */}
            <TextDisplayCell text={transaction.amount} />

            {/* Beneficiary */}
            <TextDisplayCell text={transaction.beneficiary} />

            {/* Account */}
            <TextDisplayCell text={transaction.account} />

            {/* Address */}
            <TextDisplayCell text={transaction.address} />

            {/* Date */}
            <TextDisplayCell text={new Date(transaction.date).toLocaleDateString("en-US")} />

            {/* Description */}
            <TextDisplayCell text={transaction.description} />

            {/* Deletion */}
            <TextDisplayCell text={<Button onClick={() => handleDeleteElement(transaction.id)}>Delete</Button>} />
          </Fragment>
        ))}
      </TableContainer>
    </BasicSection>
)};

export default Transactions;