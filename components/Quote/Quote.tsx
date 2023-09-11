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
      <QuoteSymbol quotes={redDoubleQuotes} />
      <p className={`cu-quote ${styles.quote}`}>{children}</p>
      {redDoubleQuotes && (
        <>
          <QuoteSymbol quotes={redDoubleQuotes} />
        </>
      )}
    </>
  )
}

export const Quote = Object.assign(QuoteWrapper, {
  Content: QuoteContent,
})
