import { Link } from 'react-router-dom';

import Button from 'components/Button';

import { HeaderSection } from './Header.styles';

type TMenu = {
  id: string;
  title: string;
  url: string;
};

export type THeaderProps = {
  menu: TMenu[];
};

const Header = ({ menu }: THeaderProps) => (
  <HeaderSection>
    {menu.map((field, index) => (
      <Link to={field.url} key={index}>
        <Button offsetRight>{field.title}</Button>
      </Link>
    ))}
  </HeaderSection>
);

export default Header;