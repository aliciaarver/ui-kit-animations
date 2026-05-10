import { forwardRef, type ButtonHTMLAttributes } from 'react';

import clsx from 'clsx';

import styles from './button.module.scss';

import { Typography } from '../Typography/Typography';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'gradient';
  // gradient?: boolean;
}
export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ children, variant = 'primary', disabled, ...props }, ref) => {
    const particles = Array(30)
      .fill(0)
      .map((_, i) => <span key={i} className={styles.particle} />);

    return (
      <Typography
        ref={ref}
        variant="button"
        as="button"
        className={clsx(styles.button, {
          [`${styles[variant]}`]: variant,
          [`${styles.disabled}`]: disabled,
        })}
        {...props}
      >
        {children}
        <span className={styles.particles}>{particles}</span>
      </Typography>
    );
  }
);
