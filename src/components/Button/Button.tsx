import './Button.scss';
import { ButtonHTMLAttributes, FC } from 'react';

export const Button: FC<ButtonHTMLAttributes<HTMLButtonElement>> = ({ children, ...restProps }) => {
  return (
    <button className="btn" {...restProps}>
      {children}
    </button>
  );
};