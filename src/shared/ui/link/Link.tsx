import { FC, ReactNode } from 'react';
import { Link as LinkTo } from 'react-router-dom';
import classNames from 'classnames';
import styles from './link.module.scss';

interface LinkProps {
  to: string;
  children: ReactNode;
  size?: 'xs' | 's' | 'm' | 'l';
  color?: 'blue' | 'green' | 'purple' | 'gold' | 'orange' | 'white';
}

export const Link: FC<LinkProps> = ({ to, children, size, color }) => {
  return (
    <LinkTo
      to={to}
      className={classNames(
        styles['link'],
        styles[`link_size_${size}`],
        styles[`link_color_${color}`],
      )}
    >
      {children}
    </LinkTo>
  );
};
