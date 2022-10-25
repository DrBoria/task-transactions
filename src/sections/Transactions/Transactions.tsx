import { FC, Fragment } from 'react';

import { TTransaction } from 'api/transactions';

import TableContainer, { THeaderCol } from 'components/Table';
import { TextDisplayCell } from 'components/Table/TableCels';

import WithPagination from 'utils/withPagination';

import { BasicSection } from 'components/Containers';

type TTransactionSection = {
  transactionsList: TTransaction[];
  ordersRows?: THeaderCol[];
};

const Transactions: FC<TTransactionSection> = ({ transactionsList, ordersRows }) => (
    <BasicSection>
      <TableContainer
        colsTemplate='repeat(6, minmax(0, 1fr));'
        headerCols={ordersRows}
        pagination={{ current: 2, totalPages: 10, changePage: console.log }}
        rowsPerPage={{
          options: [
            { value: 10, text: '10' },
            { value: 20, text: '20' },
          ],
          current: 20,
          changeElementsPerPage: console.log,
        }}
      >
        {WithPagination(transactionsList, 10, 0).map((transaction) => (
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
          </Fragment>
        ))}
      </TableContainer>
    </BasicSection>
);

export default Transactions;