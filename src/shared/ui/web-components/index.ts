import r2wc from '@r2wc/react-to-web-component';

import { EyeToggle } from '../EyeToggle';
import { Input } from '../Input/Input';
import { InputPassword } from '../Input/InputPassword';

const XopaInput = r2wc(Input, {
  props: {
    label: 'string',
    error: 'string',
    placeholder: 'string',
    value: 'string',
    type: 'string',
    disabled: 'boolean',
    rounded: 'boolean',
    inputSize: 'string',
    variant: 'string',
  },
});

const XopaInputPassword = r2wc(InputPassword, {
  props: {
    label: 'string',
    error: 'string',
    placeholder: 'string',
    value: 'string',
    disabled: 'boolean',
    rounded: 'boolean',
    inputSize: 'string',
    variant: 'string',
  },
});

const XopaEyeToggle = r2wc(EyeToggle, {
  props: {
    open: 'boolean',
  },
});

if (!customElements.get('xopa-input')) {
  customElements.define('xopa-input', XopaInput);
}
if (!customElements.get('xopa-input-password')) {
  customElements.define('xopa-input-password', XopaInputPassword);
}
if (!customElements.get('xopa-eye-toggle')) {
  customElements.define('xopa-eye-toggle', XopaEyeToggle);
}
