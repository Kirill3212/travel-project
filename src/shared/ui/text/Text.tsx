import { FC, HTMLAttributes, createElement, ReactNode } from 'react';
import classNames from 'classnames';
import styles from './Text.module.scss';

interface TextProps extends HTMLAttributes<HTMLElement> {
  tag: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span';
  size?: 'xs' | 's' | 'm' | 'l' | 'xl' | 'ml' | 'xss' | 'sxs';
  weight?: 'light' | 'regular' | 'medium' | 'semibold' | 'bold';
  color?: 'blue' | 'green' | 'purple' | 'gold' | 'orange' | 'white';
  align?: 'center' | 'start' | 'end' | 'justify';
  children: ReactNode;
}

export const Text: FC<TextProps> = ({ tag, weight, size, color, align, children }) => {
  const Text = ({ ...props }: HTMLAttributes<HTMLElement>) => {
    return createElement(tag, { ...props }, children);
  };

  const textClasses = classNames(styles.text, styles[`text_${tag}`], {
    [styles[`text_${weight}`]]: weight,
    [styles[`text_${size}`]]: size,
    [styles[`text_${color}`]]: color,
    [styles[`text_${align}`]]: align,
  });

  return <Text className={textClasses}>{children}</Text>;
};
