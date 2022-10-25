import { useMemo } from 'react';

import { Highlighted, PlainText, SectionTitle } from 'components/Typography';

import { useSelector } from 'react-redux';
import { TRootState } from 'rootReducer';
import { BasicSection } from 'components/Containers';

const Balance = () => {
  const { loadedTransactionsList } = useSelector((state: TRootState) => state.transactions);
  
  const totalBalance = useMemo(() => {
    let balance = 0;
    loadedTransactionsList.forEach(transaction => {
      balance += transaction.amount;
    });
    return Math.ceil(balance);
  }, loadedTransactionsList)

  return (
    <BasicSection style={{gridArea: 'A'}}>
      <SectionTitle>Balance</SectionTitle>
      <Highlighted>
        <PlainText>{totalBalance}</PlainText>
      </Highlighted>
    </BasicSection>
)};

export default Balance;
