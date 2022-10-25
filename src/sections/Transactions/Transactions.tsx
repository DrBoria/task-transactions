import { FC, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { TRootState } from 'rootReducer';
import { CSSTransition } from 'react-transition-group';

import { TTransaction } from 'api/transactions';

import { BasicSection, GridContainer } from 'components/Containers';
import TableContainer, { THeaderCol } from 'components/Table';
import { TextDisplayCell } from 'components/Table/TableCels';

import { deleteTransaction, setCurrentPage, setRowsPerPage } from 'models/transactions';

import WithPagination from 'utils/withPagination';
import Button from 'components/Button';
import { animations } from 'styles/baseTheme';

type TTransactionSection = {
  transactionsList: TTransaction[];
  ordersRows?: THeaderCol[];
  currentPage?: number;
};

const Transactions: FC<TTransactionSection> = ({ transactionsList, ordersRows }) => {
  const dispatcher = useDispatch();

  const [deletingTransactionId, setDeletingTransactionId] = useState(Number.NaN);
  const { currentPage, rowsPerPage } = useSelector((state: TRootState) => state.transactions);

  const changePage = (pageNumber: number) => {
    dispatcher(setCurrentPage(pageNumber));
  };

  const changeElementsPerPage = (rowsPerPageCount: number) => {
    dispatcher(setRowsPerPage(rowsPerPageCount));
  };

  const handleDeleteElement = (transactionId: number) => {
    setDeletingTransactionId(transactionId);
    dispatcher(deleteTransaction(transactionId));
  };

  return (
    <BasicSection>
      <TableContainer
        colsTemplate={`repeat(${ordersRows?.length}, minmax(0, 1fr));`}
        headerCols={ordersRows}
        pagination={{ current: currentPage, totalPages: Math.ceil(transactionsList.length / rowsPerPage), changePage }}
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
          <CSSTransition
            key={transaction.id}
            timeout={animations.time.deletion}
            in={transaction.id !== deletingTransactionId}
            out={transaction.id === deletingTransactionId}
            classNames='transaction'
            unmountOnExit
          >
            <GridContainer colsTemplate={`repeat(${ordersRows?.length}, minmax(0, 1fr));`}>
              {/* Amount */}
              <TextDisplayCell text={transaction.amount} />

              {/* Beneficiary */}
              <TextDisplayCell text={transaction.beneficiary} />

              {/* Account */}
              <TextDisplayCell text={transaction.account} />

              {/* Address */}
              <TextDisplayCell text={transaction.address} />

              {/* Date */}
              <TextDisplayCell text={new Date(transaction.date).toLocaleDateString('en-US')} />

              {/* Description */}
              <TextDisplayCell text={transaction.description} />

              {/* Deletion */}
              <TextDisplayCell text={<Button onClick={() => handleDeleteElement(transaction.id)}>Delete</Button>} />
            </GridContainer>
          </CSSTransition>
        ))}
      </TableContainer>
    </BasicSection>
  );
};

export default Transactions;
