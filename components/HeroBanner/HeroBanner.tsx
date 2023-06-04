import { Column } from '@carletonuniversity/rds'
import React from 'react'

// import Image from 'next/image'
// import { styles } from './HeroBanner.Styles'

export const rdsMaxWidth = {
  '5xl': 'max-w-5xl',
  '7xl': 'max-w-7xl',
  max: 'max-w-screen-2xl',
  none: 'max-w-none',
}

export interface HeroBannerProps {
  children?: React.ReactNode
  title?: string
  maxWidth?: 'none' | 'max' | '5xl' | '7xl'
}

const styles = {
  base: 'py-4 md:py-6 px-4 md:px-6 mx-auto rounded-lg bg-cu-black-50',
}

export const HeroBannerWrapper = ({
  title,
  maxWidth = 'none',
}: HeroBannerProps) => {
  return (
    <div
      className={`cu-herobanner not-contained not-prose ${styles.base} ${rdsMaxWidth[maxWidth]}`}
    >
      <Column cols="2" maxWidth="full">
        <div className="bg-cu-red">{title}</div>
        <div className="bg-cu-red">Two</div>
      </Column>
    </div>
  )
}

export const HeroBanner = Object.assign(HeroBannerWrapper, {
  // Nav: HeroBannerFigure,
})
