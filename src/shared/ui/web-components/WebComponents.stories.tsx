import type { Meta, StoryObj } from '@storybook/react-vite';

import './index';

/**
 * Web Components обёртки для Vue-консьюмеров.
 *
 * Подключение в Vue-проекте:
 * ```ts
 * // main.ts
 * import '@xopa/ui-kit/web-components';
 * ```
 * ```ts
 * // vite.config.ts
 * vue({ template: { compilerOptions: { isCustomElement: (tag) => tag.startsWith('xopa-') } } })
 * ```
 *
 * Использование в шаблоне:
 * ```html
 * <xopa-input label="Email" placeholder="example@mail.com" />
 * <xopa-input-password label="Пароль" />
 * ```
 */

const WebComponentsDoc = () => (
  <div style={{ display: 'flex', flexDirection: 'column', gap: 24, padding: 32 }}>
    <div>
      <p style={{ opacity: 0.5, marginBottom: 8 }}>xopa-input</p>
      <xopa-input label="Email" placeholder="example@mail.com" />
    </div>
    <div>
      <p style={{ opacity: 0.5, marginBottom: 8 }}>xopa-input (error)</p>
      <xopa-input label="Email" placeholder="example@mail.com" error="Неверный формат" />
    </div>
    <div>
      <p style={{ opacity: 0.5, marginBottom: 8 }}>xopa-input (disabled)</p>
      <xopa-input label="Имя" placeholder="Заблокировано" disabled />
    </div>
    <div>
      <p style={{ opacity: 0.5, marginBottom: 8 }}>xopa-input-password</p>
      <xopa-input-password label="Пароль" placeholder="Введите пароль" />
    </div>
    <div>
      <p style={{ opacity: 0.5, marginBottom: 8 }}>xopa-input-password (error)</p>
      <xopa-input-password label="Пароль" error="Пароль слишком короткий" />
    </div>
  </div>
);

const meta: Meta = {
  title: 'Web Components/Input',
  component: WebComponentsDoc,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          'Web Components обёртки над React-компонентами Input/InputPassword/EyeToggle для использования в Vue-консьюмерах.',
      },
    },
  },
};

export default meta;
type Story = StoryObj;

export const AllInputs: Story = {
  name: 'Все варианты',
};
