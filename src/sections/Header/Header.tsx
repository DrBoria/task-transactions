import { TDefaultTheme, ThemeProvider } from 'styled-components';

import Button from 'components/Button';

import { dark } from 'styles/themes';

import { HeaderSection } from './Header.styles';
import { Link } from 'react-router-dom';

type TMenu = {
  id: string;
  title: string;
  url: string;
};

export type THeaderProps = {
  menu: TMenu[];
};

const Header = ({ menu }: THeaderProps) => (
  <ThemeProvider theme={{ colors: dark } as TDefaultTheme}>
    <HeaderSection>
      {menu.map((field, index) => (
        <Link to={field.url} key={index}>
          <Button offsetRight>{field.title}</Button>
        </Link>
      ))}
    </HeaderSection>
  </ThemeProvider>
);

export default Header;
