import React from 'react'

export interface TextMediaContentProps {
  children: React.ReactNode
  contentWidth?: number
}

export const TextMediaContent = ({
  children,
  contentWidth = 60,
}: TextMediaContentProps) => {
  const inlineContentStyles = {
    flex: `0 0 ${contentWidth}%`,
  }
  return (
    <div
      className="flex-[0_0_100%] md:flex-1 cu-textmedia-content"
      style={inlineContentStyles}
    >
      {children}
    </div>
  )
}

TextMediaContent.displayName = 'TextMedia.Content'
