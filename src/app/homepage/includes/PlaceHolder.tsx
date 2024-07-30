import { Section } from '@carletonuniversity/rds'
import React from 'react'

export interface PlaceHolderProps {
  name?: string
  maxWidth?: '5xl' | '7xl' | 'full'
}

export default function PlaceHolder({
  name = 'TBD',
  maxWidth = '5xl',
}: PlaceHolderProps) {
  let setMaxWidth
  switch (maxWidth) {
    case '5xl':
      setMaxWidth = 'max-w-5xl'
      break
    case '7xl':
      setMaxWidth = 'max-w-7xl'
      break
    case 'full':
      setMaxWidth = 'max-w-full'
      break
    default:
      setMaxWidth = 'max-w-5xl'
      break
  }

  return (
    <Section maxWidth={maxWidth}>
      <div
        className={`${setMaxWidth} m-auto h-28 md:h-48 lg:h-60 grid border-dashed border-2 border-cu-black-200 rounded-lg items-center justify-center`}
      >
        {name}
      </div>
    </Section>
  )
}
