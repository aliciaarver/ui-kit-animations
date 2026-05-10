import r2wc from '@r2wc/react-to-web-component';

import { Button } from '@/shared/ui/Button/Button';
import { EyeToggle } from '@/shared/ui/EyeToggle/index';
import { Input } from '@/shared/ui/Input/Input';
import { InputPassword } from '@/shared/ui/Input/InputPassword';
import { Typography } from '@/shared/ui/Typography/Typography';

const XopaButton = r2wc(Button, {
  props: {
    variant: 'string',
    disabled: 'boolean',
  },
});

const XopaTypography = r2wc(Typography, {
  props: {
    variant: 'string',
    color: 'string',
    as: 'string',
  },
});

const XopaInput = r2wc(Input, {
  props: {
    label: 'string',
    error: 'string',
    placeholder: 'string',
    type: 'string',
    inputSize: 'string',
    variant: 'string',
    rounded: 'boolean',
    disabled: 'boolean',
    value: 'string',
    name: 'string',
  },
});

const XopaInputPassword = r2wc(InputPassword, {
  props: {
    label: 'string',
    error: 'string',
    placeholder: 'string',
    inputSize: 'string',
    variant: 'string',
    rounded: 'boolean',
    disabled: 'boolean',
    value: 'string',
    name: 'string',
  },
});

const XopaEyeToggle = r2wc(EyeToggle, {
  props: {
    open: 'boolean',
  },
});

customElements.define('xopa-button', XopaButton);
customElements.define('xopa-typography', XopaTypography);
customElements.define('xopa-input', XopaInput);
customElements.define('xopa-input-password', XopaInputPassword);
customElements.define('xopa-eye-toggle', XopaEyeToggle);
