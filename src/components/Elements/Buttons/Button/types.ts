import { ButtonHTMLAttributes } from 'react';

export type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
  /** expand component into full width */
  fullWidth?: boolean;
  /** alignment options */
  variant?: 'filled' | 'outlined' | 'floating';
  /** color options
   * @override
   * */
  color?: 'primary' | 'secondary' | 'destructive';
};
