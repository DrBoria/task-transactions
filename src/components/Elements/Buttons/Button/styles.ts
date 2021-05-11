import styled, { css } from 'styled-components';
import addAlpha from 'utils/addAlpha';
import { withBasicElementOffsets, IWithBasicElementOffsets } from 'styles/helpers';

import { Props } from './types';

// TODO: TFR-45:Button make unique name or do not export
const Button = styled.button<Props & IWithBasicElementOffsets>`
  outline: none;
  cursor: pointer;
  border: none;
  border-radius: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.1875rem;
  font-weight: 600;
  height: 2rem;
  line-height: 1.6625rem;
  padding: 1rem 2.5rem;
  ${withBasicElementOffsets}

  ${({ color }) => {
    switch (color) {
      case 'destructive':
        return css`
          background-color: ${({ theme }) => theme.colors.redMedium};
          color: ${({ theme }) => theme.colors.redDark};
          :hover:not(:disabled) {
            background-color: ${({ theme }) => theme.colors.redLight};
            color: ${({ theme }) => theme.colors.redLight};
          }
          :active:not(:disabled) {
            background-color: ${({ theme }) => theme.colors.redDark};
            color: ${({ theme }) => theme.colors.redExtraDark};
          }
        `;
      case 'secondary':
        return css`
          background-color: ${({ theme }) => theme.colors.navyGreen};
          color: ${({ theme }) => theme.colors.navyGreen};
          :hover:not(:disabled) {
            background-color: ${({ theme }) => theme.colors.gray5};
            color: ${({ theme }) => theme.colors.gray5};
          }
          :active:not(:disabled) {
            background-color: ${({ theme }) => theme.colors.gray6};
            color: ${({ theme }) => theme.colors.gray6};
          }
        `;
      case 'primary':
      default:
        return css`
          background-color: ${({ theme }) => theme.colors.greenMedium};
          color: ${({ theme }) => theme.colors.greenDark};
          :hover:not(:disabled) {
            background-color: ${({ theme }) => theme.colors.greenLight};
            color: ${({ theme }) => theme.colors.greenMedium};
          }
          :active:not(:disabled) {
            background-color: ${({ theme }) => theme.colors.greenDark};
            color: ${({ theme }) => theme.colors.greenExtraDark};
          }
        `;
    }
  }}

  ${({ variant }) => {
    switch (variant) {
      case 'floating':
        return css`
          background-color: transparent;
          :hover:not(:disabled) {
            background-color: transparent;
          }
          :active:not(:disabled) {
            background-color: transparent;
          }
          :disabled {
            color: ${({ theme }) => addAlpha(theme.colors.navyGreen, 0.3)};
          }
        `;
      case 'outlined':
        return css`
          background-color: transparent;
          border: 0.0625rem solid ${({ theme }) => theme.colors.gray2};
          :hover:not(:disabled) {
            background-color: transparent;
          }
          :active:not(:disabled) {
            background-color: transparent;
          }
          :disabled {
            color: ${({ theme }) => addAlpha(theme.colors.navyGreen, 0.3)};
          }
        `;
      case 'filled':
      default:
        return css`
          color: ${({ theme }) => theme.colors.white};
          :hover:not(:disabled) {
            color: ${({ theme }) => theme.colors.white};
          }
          :active:not(:disabled) {
            color: ${({ theme }) => theme.colors.white};
          }
          :disabled {
            background-color: ${({ theme }) => addAlpha(theme.colors.navyGreen, 0.3)};
          }
        `;
    }
  }}


  ${({ fullWidth }) =>
    fullWidth &&
    css`
      width: 100%;
    `}
`;
export default Button;
