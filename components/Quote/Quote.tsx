import React from 'react'
import { QuoteContent } from './QuoteContent'
import { styles } from './Quote.styles'

export interface QuoteProps {
  children?: React.ReactNode
  cite?: string
  symbol?: 'default' | 'quote'
}

const QuoteWrapper = ({ children, cite, symbol = 'default' }: QuoteProps) => {
  return (
    <>
      <blockquote className={`${styles.container} ${styles.symbol[symbol]}`}>
        {children}
        {cite && <cite className={`${styles.cite[symbol]}`}>{cite}</cite>}
      </blockquote>
    </>
  )
}

export const Quote = Object.assign(QuoteWrapper, {
  Content: QuoteContent,
})
