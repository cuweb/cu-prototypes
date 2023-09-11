import type { Meta, StoryObj } from '@storybook/react'
import { Quote } from './Quote'
const meta: Meta<typeof Quote> = {
  title: 'Components/Quote',
  component: Quote,
  tags: ['autodocs'],
  parameters: {
    controls: {
      sort: 'requiredFirst',
    },
  },
}

export default meta

type Story = StoryObj<typeof Quote>

export const Default: Story = {
  render: () => <Quote>Multi-Day</Quote>,
}

export const SingleItemPanel: Story = {
  render: () => (
    <>
      <Quote>Multi-Day</Quote>
      <Quote>Orientation</Quote>
      <Quote>Faculty</Quote>
    </>
  ),
}
