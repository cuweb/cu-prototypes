import React from 'react'
import { QuoteContent } from './QuoteContent'
import { QuoteSymbol } from './QuoteSymbol'
import { QuoteAttribution } from './QuoteAttribution'
import { styles } from './Quote.styles'

export interface QuoteProps {
  children?: React.ReactNode
  setBlack?: boolean
  useQuote?: boolean
}

const QuoteWrapper = ({ children, setBlack, useQuote }: QuoteProps) => {
  return (
    <>
      <div className={`cu-quote ${styles.container}`}>
        <QuoteSymbol colour={setBlack} shape={useQuote} />
        <div>{children}</div>
      </div>
    </>
  )
}

export const Quote = Object.assign(QuoteWrapper, {
  Content: QuoteContent,
  Attribution: QuoteAttribution,
})
