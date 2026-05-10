import { forwardRef, useId, type InputHTMLAttributes } from 'react';

import clsx from 'clsx';

import styles from './checkbox.module.scss';

export interface CheckboxProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'type'> {
  label?: string;
  indeterminate?: boolean;
  error?: string;
}

export const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(
  ({ label, indeterminate = false, error, disabled, className, ...rest }, ref) => {
    const id = useId();

    return (
      <div className={clsx(styles.wrapper, className)}>
        <label
          htmlFor={id}
          className={clsx(styles.label, {
            [styles.disabled]: disabled,
            [styles.hasError]: !!error,
          })}
        >
          <input
            ref={ref}
            id={id}
            type="checkbox"
            className={styles.input}
            disabled={disabled}
            data-indeterminate={indeterminate || undefined}
            {...rest}
          />
          <span
            className={clsx(styles.box, {
              [styles.indeterminate]: indeterminate,
            })}
            aria-hidden="true"
          />
          {label && <span className={styles.text}>{label}</span>}
        </label>
        {error && <span className={styles.errorMsg}>{error}</span>}
      </div>
    );
  }
);

Checkbox.displayName = 'Checkbox';
