import React, { ButtonHTMLAttributes } from 'react';

import { Container } from './styles';

const Button: React.FC<ButtonHTMLAttributes<HTMLButtonElement>> = ({
  children,
  ...rest
}) => {
  return <Container {...rest}>{children}</Container>;
};

export default Button;
