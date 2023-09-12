import React from 'react'
import { QuoteContent } from './QuoteContent'
import { QuoteSymbol } from './QuoteSymbol'
import { styles } from './Quote.styles'

export interface QuoteProps {
  children?: React.ReactNode
  redDoubleQuotes?: boolean
}

const QuoteWrapper = ({ children, redDoubleQuotes }: QuoteProps) => {
  return (
    <>
      <div className={`cu-quote ${styles.container}`}>
        <QuoteSymbol quotes={redDoubleQuotes} />
        <div className={``}>{children}</div>
        {redDoubleQuotes && (
          <>
            <QuoteSymbol quotes={redDoubleQuotes} bottomQuote />
          </>
        )}
      </div>
    </>
  )
}

export const Quote = Object.assign(QuoteWrapper, {
  Content: QuoteContent,
})
