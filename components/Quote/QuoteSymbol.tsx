import React from 'react'
import { styles } from './Quote.styles'

export interface QuoteSymbolProps {
  quotes?: boolean
}

export const QuoteSymbol = ({ quotes }: QuoteSymbolProps) => {
  const redSymbols = quotes ? `text-red-600` : ''

  return (
    <>
      <span className={`cu-quote ${styles.symbol} ${redSymbols}`}>"</span>
    </>
  )
}

QuoteSymbol.displayName = 'Quote.Symbol'
