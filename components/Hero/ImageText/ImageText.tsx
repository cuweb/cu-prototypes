/* eslint-disable @next/next/no-img-element */
import React from 'react'
// import { HeroBannerContent } from './TextImageAltContent'
// import { HeroBannerFigure } from './TextImageAltFigure'

// import { styles } from './HeroBanner.Styles'

export interface HeroBannerProps {
  children?: React.ReactNode
  title?: string
  maxWidth?: 'max' | '5xl' | '7xl'
}

export const rdsMaxWidth = {
  '5xl': 'max-w-5xl',
  '7xl': 'max-w-7xl',
  max: 'max-w-screen-2xl',
}

export const styles = {
  base: 'cu-herobanner not-contained not-prose lg:items-center',
  bottom: 'border-b border-cu-black-100 pb-12',
  grid: 'md:grid md:gap-10 md:grid-cols-hero-imgtxt-sm lg:grid-cols-hero-imgtxt mx-auto',
  header: 'font-semibold text-2xl md:text-3xl lg:text-4xl',
  image: 'hidden md:block md:bg-center md:bg-cover md:rounded-lg md:shadow-lg',
}

export const ImageText = ({
  children,
  title,
  maxWidth = '5xl',
}: HeroBannerProps) => {
  const headerSize = maxWidth === 'max' ? '2xl:text-5xl' : ''

  const backgroundImageUrl = 'https://picsum.photos/400/266'
  const inlineStyle = {
    backgroundImage: `url(${backgroundImageUrl})`,
  }

  return (
    <div
      className={`${styles.base} ${styles.grid} ${styles.bottom} ${rdsMaxWidth[maxWidth]}`}
    >
      <div className="grid gap-5">
        <h1 className={`${styles.header} ${headerSize}`}>{title}</h1>
        {children}
      </div>

      <div className={`md:min-h-[320px] ${styles.image}`} style={inlineStyle} />
    </div>
  )
}
