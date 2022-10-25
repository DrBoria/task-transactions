import { useState } from 'react';
import { useDispatch } from 'react-redux';



import { BasicSection } from 'components/Containers';
import { Form, FormLabel, Input, Submit } from 'components/Form';
import { TextArea } from 'components/Form/TextArea';
import { ErrorText, SubTitle } from 'components/Typography';



import { addTransaction } from 'models/transactions';



import { hasNumber, isNumeric } from 'utils/validations';


const AddTransactionForm = () => {
  const dispatcher = useDispatch();
  const [validation, setValidation] = useState({
    amount: '',
    account: '',
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);

    // Validation
    const validationErrors = { amount: '', account: '' };
    const amount = formData.get('amount');
    const account = formData.get('account');
    if (!isNumeric(amount) || Number(amount) <= 0) {
      // Is positive number
      validationErrors.amount = 'Amount value must me positive';
    }
    if (!hasNumber(account) || !account) {
      // Has numbers and non empty
      validationErrors.account = 'Account value must contain numbers and be not empty';
    }
    if (validationErrors.amount || validationErrors.account) {
      setValidation(validationErrors);
      return;
    }

    const formValues = {
      amount: Number(amount),
      account: `${account}`,
      address: `${formData.get('address')}`,
      description: `${formData.get('description')}`,
    };

    dispatcher(addTransaction(formValues));
  };

  return (
    <BasicSection>
      <Form onSubmit={handleSubmit}>
        <SubTitle>Add Transaction</SubTitle>
        <div>
          {/* amount (must be positive) */}
          <FormLabel htmlFor='amount'>Amount *</FormLabel>
          {validation.amount && <ErrorText>{validation.amount}</ErrorText>}
          <Input id='amount' name='amount' offsetBottom />

          {/* account number (not empty, numbers) */}
          <FormLabel htmlFor='account'>Account Number *</FormLabel>
          {validation.account && <ErrorText>{validation.account}</ErrorText>}
          <Input id='account' name='account' offsetBottom />

          {/* address */}
          <FormLabel htmlFor='address'>Address</FormLabel>
          <Input id='address' name='address' offsetBottom />

          {/* description */}
          <FormLabel htmlFor='description'>Description</FormLabel>
          <TextArea id='description' name='description' offsetBottom />
        </div>
        <Submit name='Submit' value='Save' />
      </Form>
    </BasicSection>
  );
};

export default AddTransactionForm;