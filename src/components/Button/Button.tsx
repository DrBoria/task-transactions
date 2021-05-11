/* eslint-disable react/button-has-type */
import React, { FC } from 'react';

type ButtonProps = {
  children: string;
  onClick?: () => void;
  disabled?: boolean;
  buttonType?: string;
};

const Button: FC<ButtonProps> = ({ children, onClick, disabled = false }) => (
  <>
    <button type="submit" onClick={onClick} disabled={disabled}>
      {children}
    </button>
  </>
);

export default Button;
