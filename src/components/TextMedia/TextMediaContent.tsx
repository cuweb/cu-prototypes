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
}

export const TextMediaContent = ({
  children,
  title,
  headerType = 'h2',
  width = 60,
  align = 'start',
}: TextMediaContentProps) => {
  const inlineContentStyles = {
    flex: `0 0 ${width}%`,
  }

  return (
    <div
      className={`flex-[0_0_100%] md:flex-1 cu-textmedia-content ${justifyContentClasses[align]}`}
      style={inlineContentStyles}
    >
      <PageHeader
        as={headerType}
        header={title}
        size="md"
        noUnderline
        isWhite
      />
      {children}
    </div>
  )
}

TextMediaContent.displayName = 'TextMedia.Content'
