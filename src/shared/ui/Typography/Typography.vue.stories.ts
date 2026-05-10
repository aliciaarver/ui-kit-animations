import type { Meta, StoryObj } from '@storybook/vue3'
import Typography from './Typography.vue'

const meta: Meta<typeof Typography> = {
  title: 'Typography/Vue',
  component: Typography,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['title', 'subtitle', 'body', 'caption', 'label', 'link', 'code', 'button'],
      table: {
        type: {
          summary: "'title' | 'subtitle' | 'body' | 'caption' | 'label' | 'link' | 'code' | 'button'",
        },
        defaultValue: { summary: '"body"' },
      },
    },
    as: {
      control: 'select',
      options: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'p', 'span', 'label', 'a', 'code', 'div'],
    },
    class: { control: false },
  },
}

export default meta
type Story = StoryObj<typeof Typography>

export const Title: Story = {
  args: {
    variant: 'title',
  },
  render: (args) => ({
    components: { Typography },
    setup() {
      return { args }
    },
    template: '<Typography v-bind="args">Заголовок Title</Typography>',
  }),
}

export const Subtitle: Story = {
  args: {
    variant: 'subtitle',
  },
  render: (args) => ({
    components: { Typography },
    setup() {
      return { args }
    },
    template: '<Typography v-bind="args">Подзаголовок Subtitle</Typography>',
  }),
}

export const Body: Story = {
  args: {
    variant: 'body',
  },
  render: (args) => ({
    components: { Typography },
    setup() {
      return { args }
    },
    template: '<Typography v-bind="args">Основной текст Body</Typography>',
  }),
}

export const Caption: Story = {
  args: {
    variant: 'caption',
  },
  render: (args) => ({
    components: { Typography },
    setup() {
      return { args }
    },
    template: '<Typography v-bind="args">Подпись Caption</Typography>',
  }),
}

export const Label: Story = {
  args: {
    variant: 'label',
  },
  render: (args) => ({
    components: { Typography },
    setup() {
      return { args }
    },
    template: '<Typography v-bind="args">Подпись Label</Typography>',
  }),
}

export const Link: Story = {
  args: {
    variant: 'link',
    as: 'a',
  },
  render: (args) => ({
    components: { Typography },
    setup() {
      return { args }
    },
    template: '<Typography v-bind="args">Ссылка Link</Typography>',
  }),
}

export const Code: Story = {
  args: {
    variant: 'code',
  },
  render: (args) => ({
    components: { Typography },
    setup() {
      return { args }
    },
    template: '<Typography v-bind="args">code()</Typography>',
  }),
}
