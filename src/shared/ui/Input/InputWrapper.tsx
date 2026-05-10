import { type ReactNode } from 'react';

import clsx from 'clsx';

import styles from './inputWrapper.module.scss';

import { Typography } from '../Typography/Typography';
import { InputSize, InputVariant } from './types';

export interface InputWrapperProps {
  children: ReactNode;
  label?: string;
  error?: string;
  rounded?: boolean;
  inputSize?: InputSize;
  variant?: InputVariant;
  disabled?: boolean;
  labelId: string;
  className?: string;
  inputWrapperClassName?: string;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
  labelTop?: boolean;
}
export const InputWrapper = ({
  children,
  label,
  error,
  className = '',
  inputWrapperClassName = '',
  rounded = true,
  disabled,
  inputSize = InputSize.md,
  labelId,
  variant = InputVariant.filled,
  leftIcon,
  rightIcon,
  labelTop,
}: InputWrapperProps) => {
  return (
    <div className={clsx(styles.wrapper, className)}>
      <div
        className={clsx(
          styles.inputWrapper,
          disabled && styles.inputWrapper_disabled,
          error && styles.inputWrapper_error,
          rounded && styles.inputWrapper_rounded,
          styles[`inputWrapper_${inputSize}`],
          styles[`inputWrapper_${variant}`],
          inputWrapperClassName
        )}
      >
        {leftIcon}
        {children}
        {rightIcon}
        {label && (
          <Typography
            variant="label"
            htmlFor={labelId}
            className={clsx(
              styles.label,
              labelTop && styles.label_top,
              label && styles.label_visible
            )}
          >
            {label}
          </Typography>
        )}
      </div>
      {error && (
        <Typography variant="caption" as="div" className={styles.errorText}>
          {error}
        </Typography>
      )}
    </div>
  );
};
