import styled from 'styled-components';

import { devices } from 'styles/baseTheme';

export const FooterSection = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  z-index: ${({ theme }) => theme.zIndex.navigation};

  display: flex;
  width: 100%;
  padding: ${({ theme }) => `calc(${theme.offsets.section} / 2) ${theme.offsets.section}`};

  background: ${({ theme }) => theme.colors.section};
  @media ${devices.desktop} {
    padding: ${({ theme }) => `calc(${theme.offsets.section} / 4) ${theme.offsets.container}`};
  }
`;
