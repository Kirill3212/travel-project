import styles from './input.module.scss';
import { forwardRef } from 'react';
import classNames from 'classnames';
import { Icon } from '../../ui/icon/Icon';

interface InputProps {
  placeholder?: string;
  theme: 'standart' | 'primary' | 'secondary' | 'third';
  width: 'max' | 'auto';
  size?: 's' | 'm' | 'l';
  readOnly?: boolean;
  disabled?: boolean;
  maxLength?: number;
  type: string;
  svg?: string;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    { placeholder, theme, width, size, readOnly, disabled = false, maxLength, type, svg },
    ref,
  ): JSX.Element => {
    const getInput = (): JSX.Element => (
      <input
        placeholder={placeholder}
        readOnly={readOnly}
        disabled={disabled}
        maxLength={maxLength}
        className={classNames(
          styles['input'],
          styles[`theme_${theme}`],
          styles[`input-width_${width}`],
          styles[`size_${size}`],
        )}
        type={type}
        ref={ref}
      />
    );

    return (
      <div>
        {svg ? (
          <div className={styles.inputSVGContainer}>
            {getInput()} <Icon icon={svg} />
          </div>
        ) : (
          getInput()
        )}
      </div>
    );
  },
);

Input.displayName = 'Input';
