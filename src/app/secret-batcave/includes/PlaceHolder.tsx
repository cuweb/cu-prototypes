import React from 'react'
import { utils } from '@carletonuniversity/rds'

// Deconstruct propClass utils
const { maxWidthClasses } = utils

type maxWidthKeys = keyof typeof maxWidthClasses

export interface PlaceHolderProps {
  name?: string
  maxWidth?: maxWidthKeys
}

export default function PlaceHolder({
  name = 'TBD',
  maxWidth = '5xl',
}: PlaceHolderProps) {
  return (
    <div
      className={`${maxWidthClasses[maxWidth]} cu-component-spacing m-auto h-28 md:h-48 lg:h-60 grid border-dashed border-2 border-cu-black-200 rounded-lg items-center justify-center`}
    >
      {name}
    </div>
  )
}
