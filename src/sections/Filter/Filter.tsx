import { ChangeEvent } from 'react';

import { FormLabel, Input } from 'components/Form';
import { useDispatch } from 'react-redux';
import { filterBeneficiaryTransactions } from 'models/transactions';
import { BasicSection } from 'components/Containers';

const Filter = () => {
  const dispatcher = useDispatch();

  const changeFilter = (event: ChangeEvent<HTMLInputElement>) => {
    dispatcher(filterBeneficiaryTransactions(event.target.value));
  }

  return (
      <BasicSection style={{gridArea: 'D'}}>
        <FormLabel htmlFor='Beneficiary' offsetBottom>Beneficiary Filter</FormLabel>
        <Input id='Beneficiary' name='Beneficiary' onChange={changeFilter} fullWidth />
    </BasicSection>
)};

export default Filter;
