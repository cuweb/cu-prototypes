import React from 'react'
import { styles } from './Quote.styles'

export interface QuoteContentProps {
  children: React.ReactNode
  attribution?: string
}

export const QuoteContent = ({ children, attribution }: QuoteContentProps) => {
  return (
    <>
      <span className={`${styles.quote}`}>{children}</span>
      {attribution && (
        <>
          <br />
          <span className={`${styles.attribution}`}>{attribution}</span>
        </>
      )}
    </>
  )
}

QuoteContent.displayName = 'Quote.Content'
