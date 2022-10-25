import { useCallback, FormEvent, useState } from 'react';

import { Input } from 'components/Form/Input';

import { TWithBasicElementOffsets, TFullWidth } from 'styles/helpers';

import { Container, SearchIcon, CrossIcon, ButtonWrapper } from './styles';

export type TSearchInputProps = React.InputHTMLAttributes<HTMLInputElement> & {
  name: string;
  id?: string;
  value?: string;
  onChangeValue: (value?: string) => void;
} & TWithBasicElementOffsets &
  TFullWidth;

const SearchInput = ({ id, name, value, onChangeValue, ...props }: TSearchInputProps) => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const handleChange = useCallback(
    (event: FormEvent<HTMLInputElement>) => {
      const newValue = event.currentTarget.value;
      onChangeValue(newValue);
    },
    [onChangeValue]
  );

  const handleOpenSearchInput = () => {
    setIsSearchOpen(!isSearchOpen);
    if (isSearchOpen) {
      onChangeValue();
    }
  };

  return (
    <Container isOpen={isSearchOpen} {...props}>
      {isSearchOpen && (
        <Input placeholder='Search for an order' id={id} name={name} autoFocus value={value} onChange={handleChange} />
      )}
      <ButtonWrapper onClick={handleOpenSearchInput}>
        <SearchIcon />
        <CrossIcon />
      </ButtonWrapper>
    </Container>
  );
};

export { SearchInput };
