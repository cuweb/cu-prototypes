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
        <div className="mt-6">
          <span className={`${styles.attribution}`}>{attribution}</span>
        </div>
      )}
    </>
  )
}

QuoteContent.displayName = 'Quote.Content'
