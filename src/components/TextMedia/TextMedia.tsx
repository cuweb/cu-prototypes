import React from 'react'
import { TextMediaContent } from './TextMediaContent'
import { TextMediaBgImage } from './TextMediaBgImage'

import { utils } from '@carletonuniversity/rds'
const { gridGapClasses, maxWidthClasses, flexRowClasses } = utils

type maxWidthKeys = keyof typeof maxWidthClasses
type gridGapKeys = keyof typeof gridGapClasses

export interface TextMediaProps {
  children?: React.ReactNode
  maxWidth?: maxWidthKeys
  gridGap?: gridGapKeys
  reverse?: boolean
}

export const TextMediaWrapper = ({
  children,
  maxWidth = '5xl',
  gridGap = '10',
  reverse,
}: TextMediaProps) => {
  const reverseLayout = reverse ? 'lg:flex-row-reverse' : ''

  return (
    <>
      <div
        className={`cu-textmedia cu-component flex flex-col lg:flex-row mx-auto ${gridGapClasses[gridGap]} ${maxWidthClasses[maxWidth]} ${reverseLayout}`}
      >
        {children}
      </div>
    </>
  )
}

export const TextMedia = Object.assign(TextMediaWrapper, {
  Content: TextMediaContent,
  BgImage: TextMediaBgImage,
})

TextMediaWrapper.displayName = 'TextMedia'
