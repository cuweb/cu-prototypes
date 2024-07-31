import React from 'react'
import { maxWidthClasses } from '@/utils/optionClasses'

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
      className={`${maxWidthClasses[maxWidth]} m-auto h-28 md:h-48 lg:h-60 grid border-dashed border-2 border-cu-black-200 rounded-lg items-center justify-center`}
    >
      {name}
    </div>
  )
}
