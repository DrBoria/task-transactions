import styled from 'styled-components';

import { TWithBasicElementOffsets, withOffsetBottom, withOffsetsRight } from 'styles/helpers';

export const PaginationContainer = styled.div`
  display: flex;
  justify-content: center;
`;

export const TableWrapper = styled.div<TWithBasicElementOffsets>`
  display: grid;
  grid-gap: ${({ theme }) => `calc(${theme.offsets.batweenElements} / 4)`};

  align-items: center;

  background-color: ${({ theme }) => theme.colors.sectionContent};

  margin-right: ${withOffsetsRight};
  margin-bottom: ${withOffsetBottom};
`;
