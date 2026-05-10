import r2wc from '@r2wc/react-to-web-component';

import { Button } from '@/shared/ui/Button/Button';

const XopaButton = r2wc(Button, {
  props: {
    variant: 'string',
    disabled: 'boolean',
  },
});

customElements.define('xopa-button', XopaButton);
