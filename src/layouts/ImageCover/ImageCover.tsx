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
  wave?: 'red' | 'black'
}

export default function ImageCover({
  children,
  maxWidth = '7xl',
  wave = 'red',
  imageUrl,
  imageZoom = 0,
  focalPointX = '50',
  focalPointY = '50',
}: ImageCoverProps) {
  const bottomWave =
    wave === 'red'
      ? 'border-b-[120px] border-b-cu-red'
      : 'border-b-[120px] border-b-cu-black-900'
  const inlineImageStyles = {
    backgroundImage: `url(${imageUrl})`,
    backgroundPosition: `${focalPointX}% ${focalPointY}%`,
    transform: `scale(1.${imageZoom})`,
  }

  // Needs to be a class for consistency in RDS
  const innerPadding = 'py-4 md:py-6 lg:py-12 px-6 md:px-8 lg:px-10'

  return (
    <section
      className={`cu-imagecover relative ${innerPadding} bg-cover bg-no-repeat cu-browsers-edge not-contained ${bottomWave}`}
      style={inlineImageStyles}
    >
      <div className={`relative ${maxWidthClasses[maxWidth]} mx-auto z-30`}>
        {children}
      </div>
      <div className="absolute top-0 left-0 w-full h-full bg-white/85 z-10"></div>
    </section>
  )
}
