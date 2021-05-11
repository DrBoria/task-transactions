import React, { FC } from 'react';

import Component from './styles';
import { Props } from './types';

// TODO: TFR-45 make unique name or do not export
const Button: FC<Props> = ({ children, fullWidth, variant, color, onClick, ...props }) => {
  return (
    <Component fullWidth={fullWidth} variant={variant} color={color} onClick={onClick} {...props}>
      {children}
    </Component>
  );
};

export default Button;
