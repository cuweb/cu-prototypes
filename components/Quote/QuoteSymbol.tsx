import React from 'react'
import { styles } from './Quote.styles'

export interface QuoteSymbolProps {
  quotes?: boolean
  bottomQuote?: boolean
}

export const QuoteSymbol = ({ quotes, bottomQuote }: QuoteSymbolProps) => {
  const redSymbols = quotes ? `text-red-600` : ''
  const bottomSymbolClass = bottomQuote ? styles.symbolend : styles.symbol

  return (
    <>
      <span className={`${bottomSymbolClass} ${redSymbols}`}>"</span>
    </>
  )
}

QuoteSymbol.displayName = 'Quote.Symbol'
