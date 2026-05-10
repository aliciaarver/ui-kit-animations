import type React from 'react';

type XopaInputProps = React.HTMLAttributes<HTMLElement> & {
  label?: string;
  error?: string;
  placeholder?: string;
  value?: string;
  type?: string;
  disabled?: boolean | string;
  rounded?: boolean | string;
  inputSize?: string;
  variant?: string;
};

type XopaInputPasswordProps = React.HTMLAttributes<HTMLElement> & {
  label?: string;
  error?: string;
  placeholder?: string;
  value?: string;
  disabled?: boolean | string;
  rounded?: boolean | string;
  inputSize?: string;
  variant?: string;
};

type XopaEyeToggleProps = React.HTMLAttributes<HTMLElement> & {
  open?: boolean | string;
};

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements {
      'xopa-input': XopaInputProps;
      'xopa-input-password': XopaInputPasswordProps;
      'xopa-eye-toggle': XopaEyeToggleProps;
    }
  }
}
