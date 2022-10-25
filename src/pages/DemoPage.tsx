import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { TRootState } from 'rootReducer';
import { ThemeProvider } from 'styled-components';



import { FlexibleSectionContainer, PageContainer } from 'components/Containers';
import { THeaderCol } from 'components/Table';



import { fetchTransactions } from 'models/transactions';



import Filter from 'sections/Filter';
import Header from 'sections/Header';
import Transactions from 'sections/Transactions';



import { dark, light } from 'styles/themes';
import Balance from 'sections/Balance';
import AddTransactionForm from 'sections/AddTransactionForm';


const menuFields = [
  {
    id:    '1',
    title: 'Home',
    url:   '/',
  },
  {
    id:    '2',
    title: 'Same home for navbar',
    url:   '/',
  },
];

const transactionColumns: THeaderCol[] = [
  {
    text: 'Amount',
  },
  {
    text: 'Beneficiary',
  },
  {
    text: 'Account',
  },
  {
    text: 'Address',
  },
  {
    text: 'Date',
  },
  {
    text: 'Description',
  },
  {
    text: 'Delete',
  },
];

const TeacherSubmit = () => {
  const dispatcher = useDispatch();

  const { displayedTransactionsList } = useSelector((state: TRootState) => state.transactions);

  useEffect(() => {
    dispatcher(fetchTransactions());
  }, []);

  return (
    <>
      <Header menu={menuFields} />
      <ThemeProvider theme={{ colors: light }}>
        <ThemeProvider theme={{ colors: dark }}>
          <FlexibleSectionContainer noHeightLimit>
            <Balance />
            <Filter />
            <AddTransactionForm />
          </FlexibleSectionContainer>
        </ThemeProvider>

        <Transactions transactionsList={displayedTransactionsList} ordersRows={transactionColumns} />
      </ThemeProvider>
    </>
  );
};

export default TeacherSubmit;