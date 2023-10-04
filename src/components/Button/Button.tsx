import './Button.scss';
import { ButtonHTMLAttributes, FC } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  active?: boolean;
}

export const Button: FC<ButtonProps> = ({ active, children, ...restProps }) => {
  const classes = ['btn'];

  if (active) {
    classes.push('active');
  }

  return (
    <button className={classes.join(' ')} {...restProps}>
      {children}
    </button>
  );
};