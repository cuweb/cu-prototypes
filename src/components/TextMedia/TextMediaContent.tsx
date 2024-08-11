import React from 'react'
import { PageHeader, utils } from '@carletonuniversity/rds'
const { justifyContentClasses } = utils

type justifyContentKeys = keyof typeof justifyContentClasses

export interface TextMediaContentProps {
  children: React.ReactNode
  title: string
  headerType?: 'h1' | 'h2'
  width?: number
  align?: justifyContentKeys
  hasUnderline?: boolean
}

export const TextMediaContent = ({
  children,
  title,
  headerType = 'h2',
  width = 60,
  align = 'start',
  hasUnderline,
}: TextMediaContentProps) => {
  const inlineContentStyles = {
    flex: `0 0 ${width}%`,
  }

  return (
    <div
      className={`cu-textmedia-content ${justifyContentClasses[align]}`}
      style={inlineContentStyles}
    >
      <PageHeader
        as={headerType}
        header={title}
        size="md"
        noUnderline={hasUnderline ? false : true}
        isWhite
      />
      {children}
    </div>
  )
}

TextMediaContent.displayName = 'TextMedia.Content'
