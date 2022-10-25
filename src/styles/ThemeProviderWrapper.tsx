import { useState, ReactNode } from 'react';
import styled, { createGlobalStyle, TDefaultTheme, ThemeProvider } from 'styled-components';
import StyledReset from 'styled-reset';



import themes from './baseTheme';


const MediaProvider = styled.div`
  ${({ theme: { animations, variables, screens, offsets } }) => `
    --border-radius: ${variables.border.radius}px;
    --border-size: ${variables.border.size}px;

    --container-offset: calc((100% - ${screens.desktop.width}px - ${offsets.section}) / 2);

    --height-header: ${variables.header.height.mobile}px;
    --height-footer: ${variables.footer.height.mobile}px;
    --offset-section: ${variables.offsets.section.mobile}px;
    --offset-between-elements: ${variables.offsets.betweenElements.mobile}px;
    --offset-element-content: ${variables.offsets.elementContent.mobile}px;

    @media (min-width: ${screens.tablet.width}px) {
      --height-header: ${variables.header.height.tablet}px;
      --height-footer: ${variables.footer.height.tablet}px;
      --offset-section: ${variables.offsets.section.tablet}px;
      --offset-between-elements: ${variables.offsets.betweenElements.tablet}px;
      --offset-element-content: ${variables.offsets.elementContent.tablet}px;
    }

    @media (min-width: ${screens.desktop.width}px) {
      --height-header: ${variables.header.height.desktop}px;
      --height-footer: ${variables.footer.height.desktop}px;
      --offset-section: ${variables.offsets.section.desktop}px;
      --offset-between-elements: ${variables.offsets.betweenElements.desktop}px;
      --offset-element-content: ${variables.offsets.elementContent.desktop}px;
    }

    .transaction-enter {
      opacity: 0;
      transform: scale(0);
    }
    .transaction-enter-active {
      opacity: 1;
      transform: scale(1);
      transition: all ${animations.time.deletion}ms ease-out;
    }
    .transaction-exit {
      opacity: 1;
      transform: scale(1);
    }
    .transaction-exit-active {
      opacity: 0;
      transform: scale(0);
      transition: all ${animations.time.deletion}ms ease-in;
    }
  `}
`;

const ResetStyle = createGlobalStyle`
${StyledReset}
  
html,
body {
  margin: 0;
  padding: 0;
}

* {
  box-sizing: border-box;
}
`;

const ThemeProviderWrapper = ({ children }: { children: ReactNode }) => {
  const [theme] = useState<TDefaultTheme>(themes);

  return (
    <ThemeProvider theme={{ ...theme }}>
      <ResetStyle />
      <MediaProvider>{children}</MediaProvider>
    </ThemeProvider>
  );
};

export default ThemeProviderWrapper;