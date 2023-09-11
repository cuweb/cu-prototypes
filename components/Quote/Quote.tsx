import React from 'react'
import styles from './Quote.styles'

export interface QuoteProps {
  children?: React.ReactNode
}

const QuoteBase = ({ children }: QuoteProps) => {
  return <p className={`cu-quote ${styles.quote}`}>{children}</p>
}

QuoteBase.displayName = 'LinkItem'

export const Quote = Object.assign(QuoteBase, {})
