import React, { FC, ReactNode } from 'react';
import classNames from 'classnames';
import { Link } from 'react-router-dom';
import styles from './button.module.scss';

interface ButtonProps {
  children: ReactNode;
  width?: 'auto' | 'max';
  size?: 'xs' | 's' | 'm' | 'l';
  type?: 'button' | 'submit' | 'reset';
  theme?: 'primary' | 'secondary' | 'third' | 'neutral' | 'neutral_black';
  href?: string;
  disabled?: boolean;
  className?: string;
  onClick?: (e: React.MouseEvent<HTMLElement>) => void;
}

export const Button: FC<ButtonProps> = ({
  children,
  size = 'm',
  type = 'button',
  href = '',
  theme = 'primary',
  disabled = false,
  width = 'auto',
  onClick,
  ...rest
}) => {
  const button = (
    <button
      type={type}
      disabled={disabled}
      className={classNames(
        styles['btn'],
        styles[`theme_${theme}`],
        styles[`btn-size_${size}`],
        styles[`btn-width_${width}`],
      )}
      onClick={onClick}
      {...rest}
    >
      {children}
    </button>
  );

  return href ? <Link to={href}>{button}</Link> : button;
};
