import React from 'react'
import { styles } from './Quote.styles'

export interface QuoteAttributionProps {
  children: React.ReactNode
  attribution?: string
}

export const QuoteAttribution = ({ children }: QuoteAttributionProps) => {
  return (
    <>
      <div className="mt-4">
        <span className={`${styles.attribution}`}>{children}</span>
      </div>
    </>
  )
}

QuoteAttribution.displayName = 'Quote.Attribution'
