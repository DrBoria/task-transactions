import { css } from 'styled-components';

import theme from './theme';

export type IWithBasicElementOffsets = {
  offsetRight?: boolean | number;
  offsetBottom?: boolean | number;
};

// Every element can have only right and bottom offsets
export const withBasicElementOffsets = css`
  ${({ offsetRight }: IWithBasicElementOffsets) => `margin-right: ${theme.offsets.basic * Number(offsetRight)}px`};

  ${({ offsetBottom }: IWithBasicElementOffsets) => `margin-bottom: 
    ${theme.offsets.basic * Number(offsetBottom)}px`};
`;

export type IFullWidth = {
  fullWidth?: boolean;
};

export const withFullWidth = css`
  ${({ fullWidth }: IFullWidth) => (fullWidth ? 'width: 100%' : '')};
`;
