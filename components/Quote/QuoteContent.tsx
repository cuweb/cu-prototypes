import React from 'react'
import { styles } from './Quote.styles'

export interface QuoteContentProps {
  children: React.ReactNode
  attribution?: string
}

export const QuoteContent = ({ children }: QuoteContentProps) => {
  return (
    <>
      <span className={`${styles.quote}`}>{children}</span>
    </>
  )
}

QuoteContent.displayName = 'Quote.Content'
