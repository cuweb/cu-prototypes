import React from 'react'
import { QuoteContent } from './QuoteContent'
import { QuoteSymbol } from './QuoteSymbol'
import { QuoteAttribution } from './QuoteAttribution'
import { styles } from './Quote.styles'

export interface QuoteProps {
  children?: React.ReactNode
  cite?: string
  symbol?: 'default' | 'quote'
}

const QuoteWrapper = ({ children, cite, symbol = 'default' }: QuoteProps) => {
  return (
    <>
      <blockquote className={`${styles.container} quote-${symbol}`}>
        {children}
        {cite && <cite>{cite}</cite>}
      </blockquote>

      {/* <blockquote className="relative flex w-1/2 my-10 cu-quote">
        <QuoteSymbol shape={useQuote} />
        <div>{children}</div>
      </blockquote> */}
    </>
  )
}

export const Quote = Object.assign(QuoteWrapper, {
  Content: QuoteContent,
  Attribution: QuoteAttribution,
})
