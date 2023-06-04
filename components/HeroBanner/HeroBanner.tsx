/* eslint-disable @next/next/no-img-element */
import React from 'react'
import { HeroBannerContent } from './HeroBannerContent'
import { HeroBannerFigure } from './HeroBannerFigure'

// import { styles } from './HeroBanner.Styles'

export const rdsMaxWidth = {
  '5xl': 'max-w-5xl',
  '7xl': 'max-w-7xl',
  max: 'max-w-screen-2xl',
}

export interface HeroBannerProps {
  children?: React.ReactNode
  title?: string
  maxWidth?: 'max' | '5xl' | '7xl'
}

// const styles = {
//   base: 'mx-auto rounded-lg',
// }

// MQ / CQ
// sm:640px /
// md:768px (48rem) / @3xl
// lg:1024px (64rem) / @5xl
// xl:1280px (80rem) / @7xl
// 2xl:1536px /

export const HeroBannerWrapper = ({
  children,
  maxWidth = '5xl',
}: HeroBannerProps) => {
  let imageSize = ''
  switch (maxWidth) {
    case '5xl':
      imageSize = ''
      break
    case '7xl':
      imageSize = 'xl:grid-cols-hero-md'
      break
    case 'max':
      imageSize = 'xl:grid-cols-hero-md 2xl:grid-cols-hero-lg'
      break
    default:
      imageSize = ''
  }

  return (
    <div
      className={`cu-herobanner not-contained @container not-prose mx-auto ${rdsMaxWidth[maxWidth]}`}
    >
      <div
        className={`grid gap-6 md:gap-10 lg:grid-cols-hero-sm items-start sm:items-center ${imageSize}`}
      >
        {children}
      </div>
    </div>
  )
}

export const HeroBanner = Object.assign(HeroBannerWrapper, {
  Content: HeroBannerContent,
  Figure: HeroBannerFigure,
})
