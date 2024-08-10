import React from 'react'
import { TextMediaContent } from './TextMediaContent'
import { TextMediaAside } from './TextMediaAside'

import { utils } from '@carletonuniversity/rds'
const { gridGapClasses, maxWidthClasses, flexRowClasses } = utils

type maxWidthKeys = keyof typeof maxWidthClasses
type gridGapKeys = keyof typeof gridGapClasses
type flexRowKeys = keyof typeof flexRowClasses

export interface TextMediaProps {
  children?: React.ReactNode
  maxWidth?: maxWidthKeys
  gridGap?: gridGapKeys
  flexRow?: flexRowKeys
  reverse?: boolean
}

export const TextMediaWrapper = ({
  children,
  maxWidth = '5xl',
  gridGap = '10',
  flexRow = 'lg',
  reverse,
}: TextMediaProps) => {
  const reverseLayout = reverse ? 'lg:flex-row-reverse' : ''

  return (
    <>
      <div
        className={`cu-textmedia cu-component flex flex-col not-contained mx-auto ${gridGapClasses[gridGap]} ${maxWidthClasses[maxWidth]} ${flexRowClasses[flexRow]} ${reverseLayout}`}
      >
        {children}
      </div>
    </>
  )
}

export const TextMedia = Object.assign(TextMediaWrapper, {
  Content: TextMediaContent,
  Aside: TextMediaAside,
})

TextMediaWrapper.displayName = 'TextMedia'
