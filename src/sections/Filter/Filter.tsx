import { ChangeEvent, FC } from 'react';

import { FormLabel, Input } from 'components/Form';
import { useDispatch } from 'react-redux';
import { filterBeneficiaryTransactions } from 'models/transactions';

const Filter: FC<any> = ({ submit }) => {
  const dispatcher = useDispatch();

  const changeFilter = (event: ChangeEvent<HTMLInputElement>) => {
    dispatcher(filterBeneficiaryTransactions(event.target.value));
  }

  return (
      <div>
        <FormLabel htmlFor='Beneficiary'>Beneficiary</FormLabel>
        <Input id='Beneficiary' name='Beneficiary' onChange={changeFilter} offsetBottom />
    </div>
)};

export default Filter;
