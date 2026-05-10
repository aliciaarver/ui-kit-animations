import type { Meta, StoryObj } from '@storybook/react-vite';

import { Typography } from './Typography';

const meta: Meta<typeof Typography> = {
  title: 'Typography',
  component: Typography,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['title', 'subtitle', 'body', 'caption', 'label', 'link', 'code'],
      table: {
        type: {
          summary: "'title' | 'subtitle' | 'body' | 'caption' | 'label' | 'link' | 'code'",
        },
        defaultValue: { summary: '"body"' },
      },
    },
    as: {
      control: 'select',
      options: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'p', 'span', 'label', 'a', 'code', 'div'],
    },
    className: { control: false },
    children: { control: 'text' },
  },
};

export default meta;
type Story = StoryObj<typeof Typography>;

export const Title: Story = {
  args: {
    variant: 'title',
    children: 'Заголовок Title',
  },
};
