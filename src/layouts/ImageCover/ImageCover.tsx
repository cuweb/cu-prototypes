import React from 'react'
import { utils } from '@carletonuniversity/rds'
const { maxWidthClasses } = utils

type maxWidthKeys = keyof typeof maxWidthClasses

export interface ImageCoverProps {
  children?: React.ReactNode
  maxWidth?: maxWidthKeys
  imageUrl: string
  imageZoom?: number
  focalPointX?: string
  focalPointY?: string
}

export default function ImageCover({
  children,
  maxWidth = '7xl',
  imageUrl,
  imageZoom = 0,
  focalPointX = '50',
  focalPointY = '50',
}: ImageCoverProps) {
  const inlineImageStyles = {
    backgroundImage: `url(${imageUrl})`,
    backgroundPosition: `${focalPointX}% ${focalPointY}%`,
    transform: `scale(1.${imageZoom})`,
  }

  // Needs to be a class for consistency in RDS
  const innerPadding =
    'pt-4 md:pt-6 lg:pt-12 xl:pt-16 pb-24 md:pb-44 lg:pb-56 px-6 md:px-8 lg:px-10'

  return (
    <section
      className={`cu-imagecover relative ${innerPadding} bg-cover bg-no-repeat cu-browsers-edge not-contained`}
      style={inlineImageStyles}
    >
      <div className={`relative ${maxWidthClasses[maxWidth]} mx-auto z-30`}>
        {children}
      </div>

      <div className="absolute z-10 top-0 left-0 w-full h-full bg-white/85 bg-cu-waves-repeating-bottom-red bg-[length:195px] md:bg-[length:319px] lg:bg-[length:402px] bg-repeat-x bg-bottom" />
    </section>
  )
}
