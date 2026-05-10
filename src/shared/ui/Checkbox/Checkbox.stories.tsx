import type { Meta, StoryObj } from '@storybook/react-vite';

import { Checkbox } from './Checkbox';

const meta: Meta<typeof Checkbox> = {
  title: 'Form/Checkbox',
  component: Checkbox,
  tags: ['autodocs'],
  argTypes: {
    label: { control: 'text', description: 'Текст метки' },
    checked: { control: 'boolean' },
    disabled: { control: 'boolean' },
    indeterminate: { control: 'boolean', description: 'Промежуточное состояние' },
    error: { control: 'text', description: 'Сообщение об ошибке' },
  },
};

export default meta;
type Story = StoryObj<typeof Checkbox>;

export const Default: Story = {
  args: {
    label: 'Принять условия',
  },
};

export const Checked: Story = {
  args: {
    label: 'Выбрано',
    defaultChecked: true,
  },
};

export const Indeterminate: Story = {
  args: {
    label: 'Промежуточное',
    indeterminate: true,
  },
};

export const Disabled: Story = {
  args: {
    label: 'Отключено',
    disabled: true,
  },
};

export const DisabledChecked: Story = {
  args: {
    label: 'Отключено и выбрано',
    disabled: true,
    defaultChecked: true,
  },
};

export const WithError: Story = {
  args: {
    label: 'Обязательное поле',
    error: 'Необходимо подтвердить',
  },
};

export const NoLabel: Story = {
  args: {},
};
