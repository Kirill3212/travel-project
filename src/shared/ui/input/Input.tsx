import styles from './input.module.scss';
import { forwardRef } from 'react';
import classNames from 'classnames';
import { Icon } from '../../ui/icon/Icon';

interface InputProps {
  placeholder?: string;
  theme: 'standart' | 'primary' | 'secondary' | 'third';
  width: 'max' | 'auto';
  size: 's' | 'm' | 'l';
  readOnly?: boolean;
  disabled?: boolean;
  maxLength: number;
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

// export const Input: InputProps = () => {
//   return <input />;
// };

// import { useState, useRef, forwardRef, MouseEvent, FormEvent, FocusEvent, useEffect } from 'react';
// import classNames from 'classnames';
// import { Icon, useCombinedRef } from '../..';
// import { IInput } from './model/types.ts';
// import styles from './Input.module.scss';

// export const Input = forwardRef<HTMLInputElement, IInput>(
//   (
//     {
//       label,
//       isError = false,
//       placeholder,
//       onBlur,
//       onChange,
//       onFocus,
//       onInput,
//       handleSearch,
//       value,
//       type,
//       maxLength,
//       className,
//       white,
//       required = false,
//       id,
//       defaultValue,
//       wrappDataTestid,
//       size = 'm',
//       textAlign,
//       readOnly,
//       disabled = false,
//       svg,
//       dataTestId,
//       paintedWIthDark,
//       ...rest
//     },
//     ref,
//   ): JSX.Element => {
//     const initialValue = value || defaultValue;
//     const [focus, setFocus] = useState<boolean>(false);
//     const [valueInput, setValueInput] = useState<string | undefined>(initialValue);
//     const [typeInput, setTypeInput] = useState<string | undefined>(type);

//     const inputRef = useRef<HTMLInputElement>(null);
//     const passwordBtnRef = useRef<HTMLButtonElement>(null);
//     const inputRefCombine = useCombinedRef(ref, inputRef);

//     useEffect(() => {
//       if (inputRef.current && initialValue) {
//         inputRef.current.value = initialValue;
//       }
//     }, [initialValue]);

//     const boxClasses = classNames(styles.inputWrapper, {
//       [styles.error]: isError && !disabled,
//       [styles.focus]: !isError && focus,
//       [styles.white]: white,
//       [styles[size]]: size,
//       [styles.svg]: !!svg,
//       [className as string]: className,
//     });

//     const labelClasses = classNames(styles.label, {
//       [styles.error]: isError,
//       [styles.focus]: focus || valueInput || inputRef.current?.value || initialValue,
//       [styles.readOnly]: readOnly,
//     });

//     const inputClasses = classNames(styles.input, {
//       [styles.error]: isError,
//       [styles[`search_${size}`]]: type === 'search',
//       [styles.placeholdered]: (placeholder && type !== 'search') || !label,
//       [styles.sms]: type === 'sms',
//       [styles.textAlign]: textAlign === 'left',
//       [styles.svg]: !!svg,
//       [styles.paintedWIthDark]: paintedWIthDark,
//       [styles.readOnly]: readOnly,
//     });

//     const buttonClasses = classNames(styles.buttonInput, {
//       [styles.error]: isError,
//       [styles.search]: type === 'search',
//     });

//     const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>): void => {
//       if (e.key === 'Enter' && type === 'replace') {
//         e.preventDefault();
//       }
//     };

//     const handleChangeValue: (e: FormEvent<HTMLInputElement>) => void = (e) => {
//       setValueInput(e.currentTarget.value);
//       onChange?.(e);
//     };

//     const handleOnInputValue: (e: FormEvent<HTMLInputElement>) => void = (e) => {
//       setValueInput(e.currentTarget.value);
//       onInput?.(e);
//     };

//     const handleFocus: (e: FocusEvent<HTMLInputElement>) => void = (e) => {
//       setFocus(true);
//       onFocus?.(e);
//     };

//     const handleFocusLabel: (e: MouseEvent<HTMLLabelElement>) => void = () => {
//       if (!disabled) {
//         setFocus(true);
//         inputRef.current?.focus();
//       }
//     };

//     const handleFocusDisable: (e: FocusEvent<HTMLInputElement>) => void = (e) => {
//       e.preventDefault();

//       if (type !== 'password' || e.relatedTarget !== passwordBtnRef.current) {
//         setFocus(false);
//         onBlur?.(e);
//       }
//     };

//     const handleClickSearch: (event: MouseEvent<HTMLButtonElement>) => void = (e) => {
//       e.stopPropagation();
//       e.preventDefault();

//       handleSearch?.();
//     };

//     const getInput = (): JSX.Element => (
//       <input
//         maxLength={maxLength}
//         type={typeInput}
//         onBlur={handleFocusDisable}
//         onChange={handleChangeValue}
//         onFocus={handleFocus}
//         onInput={handleOnInputValue}
//         onKeyDown={handleKeyPress}
//         className={inputClasses}
//         ref={inputRefCombine}
//         placeholder={placeholder}
//         required={required}
//         defaultValue={defaultValue}
//         id={id}
//         readOnly={readOnly}
//         disabled={disabled}
//         data-testid={dataTestId}
//         {...rest}
//       />
//     );

//     return (
//       <div data-testid={wrappDataTestid} className={boxClasses}>
//         {!placeholder && type !== 'search' && label && (
//           <label
//             htmlFor={id}
//             onClick={handleFocusLabel}
//             className={classNames(labelClasses, { [styles['label_required']]: required })}
//           >
//             {label}
//           </label>
//         )}
//         {svg ? (
//           <div className={styles.body}>
//             {getInput()}
//             <Icon {...svg} />
//           </div>
//         ) : (
//           getInput()
//         )}
//       </div>
//     );
//   },
// );

// Input.displayName = 'Input';
