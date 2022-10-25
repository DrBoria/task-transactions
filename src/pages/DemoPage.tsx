import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { TRootState } from 'rootReducer';
import { ThemeProvider } from 'styled-components';



import { THeaderCol } from 'components/Table';



import { fetchTransactions } from 'models/transactions';



import Header from 'sections/Header';
import Transactions from 'sections/Transactions';



import { dark } from 'styles/themes';
import { PageContainer } from 'components/Containers';


const menuFields = [
  {
    id:    '1',
    title: 'title',
    url:   'url',
  },
  {
    id:    '2',
    title: 'title',
    url:   'url',
  },
  {
    id:    '3',
    title: 'title',
    url:   'url',
  },
  {
    id:    '4',
    title: 'title',
    url:   'url',
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
];

const TeacherSubmit = () => {
  const dispatcher = useDispatch();

  const { transactionsList } = useSelector((state: TRootState) => state.transactions);

  useEffect(() => {
    dispatcher(fetchTransactions());
  }, []);

  return (
    <>
      <Header menu={menuFields} />

      <ThemeProvider theme={dark}>
        <PageContainer>
          <Transactions transactionsList={transactionsList} ordersRows={transactionColumns} />
        </PageContainer>
      </ThemeProvider>
    </>
  );
};
export default TeacherSubmit;