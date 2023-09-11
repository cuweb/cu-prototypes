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
  render: () => (
    <>
      <Quote redDoubleQuotes>
        <Quote.Content attribution="William Shakespeare, Hamlet">
          There is nothing either good or bad, but thinking makes it so.
        </Quote.Content>
      </Quote>
    </>
  ),
}
