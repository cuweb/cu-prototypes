import React from 'react'
import { QuoteContent } from './QuoteContent'
import { styles } from './Quote.styles'

export interface QuoteProps {
  children?: React.ReactNode
  cite?: string
  symbol?: 'default' | 'quote'
  align?: 'default' | 'middle' | 'right'
}

const QuoteWrapper = ({
  children,
  cite,
  symbol = 'default',
  align = 'default',
}: QuoteProps) => {
  return (
    <>
      <div className="not-prose">
        <blockquote
          className={`${styles.container} ${styles.symbol[symbol]} ${styles.align[align]}`}
        >
          {children}
          {cite && <cite className={`${styles.cite[symbol]}`}>{cite}</cite>}
        </blockquote>
      </div>
    </>
  )
}

export const Quote = Object.assign(QuoteWrapper, {
  Content: QuoteContent,
})
