import styled, { css } from 'styled-components';



import { devices } from 'styles/baseTheme';
import { TWithBasicElementOffsets, withOffsetBottom, withOffsetsRight, TFullWidth, withFullWidth } from 'styles/helpers';


type TContainersProps = {
  className?: string;
  style?: any;
};

type TSectionProps = {
  noHeightLimit?: boolean;
} & TContainersProps;

/**
 * @visibleName Containers
 */

const WithoutHeightLimit = (noHeightLimit?: boolean) =>
  noHeightLimit &&
  css`
    height: auto;
    min-height: ${({ theme }) => `calc(${theme.screens.tablet.height} - ${theme.elements.header.height})`};
    max-height: unset;
  `;

// Use this conteiner for wrapping any section on page
// No usage restrictions
export const BasicSection = styled.div<TSectionProps>`
  padding: ${({ theme: { offsets } }) => offsets.section};

  background-color: ${({ theme }) => theme.colors.section};

  @media ${devices.desktop} {
    padding: ${({ theme }) => `${theme.offsets.section} ${theme.offsets.container}`};
  }

  ${({ noHeightLimit }) => WithoutHeightLimit(noHeightLimit)}
`;

// Use this container for wrapping all page content
// Should be used only once per page
export const PageContainer = styled.div`
  min-height: 100vh;
  padding-top: ${({ theme }) => theme.elements.header.height};
  padding-bottom: ${({ theme }) => theme.elements.footer.height};
`;

export const HeadingContainer = styled.div<TWithBasicElementOffsets & TFullWidth>`
  width: 40%;

  text-align: left;

  ${withFullWidth}
  margin-right: ${withOffsetsRight};
  margin-bottom: ${withOffsetBottom};
`;


export const FlexibleSectionContainer = styled(BasicSection)`
  display: grid;
  grid-gap: ${({ theme }) => theme.offsets.section};
  grid-template-areas:
    "A A"
    "B B"
    "C C"
    "D D";

  @media ${devices.tablet} {
    grid-template-areas:
    "A A B B B"
    "C C B B B"
    "D D B B B";
  }
`;