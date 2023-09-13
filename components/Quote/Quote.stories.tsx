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
      <Quote>
        <Quote.Content>
          Nobis voluptatem dolorum et eum doloremque cupiditate velit.
          Praesentium architecto a distinctio aut reprehenderit ducimus.
        </Quote.Content>
        <Quote.Attribution>William Shakespeare, Hamlet</Quote.Attribution>
      </Quote>
    </>
  ),
}

export const Alternate: Story = {
  render: () => (
    <>
      <Quote setBlack useQuote>
        <Quote.Content>
          Nobis voluptatem dolorum et eum doloremque cupiditate velit.
          Praesentium architecto a distinctio aut reprehenderit ducimus.
        </Quote.Content>
        <Quote.Attribution>William Shakespeare, Hamlet</Quote.Attribution>
      </Quote>
    </>
  ),
}
