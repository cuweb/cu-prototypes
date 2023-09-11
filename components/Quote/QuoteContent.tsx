import React from 'react'

export interface QuoteContentProps {
  children: React.ReactNode
  attribution?: string
}

export const QuoteContent = ({ children, attribution }: QuoteContentProps) => {
  return (
    <>
      <span>{children}</span>
      {attribution && (
        <>
          <br />
          <span>{attribution}</span>
        </>
      )}
    </>
  )
}

QuoteContent.displayName = 'Quote.Content'
