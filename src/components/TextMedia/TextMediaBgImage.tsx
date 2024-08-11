import React from 'react'
import { borderWidthClasses } from '@/utils/optionClasses'

type borderWidthKeys = keyof typeof borderWidthClasses

export interface TextMediaBgImageProps {
  imageUrl: string
  contentWidth?: number
  imageZoom?: number
  focalPointX?: string
  focalPointY?: string
  border?: borderWidthKeys
}

export const TextMediaBgImage = ({
  imageUrl,
  imageZoom = 0,
  focalPointX = '50',
  focalPointY = '50',
  border = 'none',
}: TextMediaBgImageProps) => {
  const inlineImageStyles = {
    backgroundImage: `url(${imageUrl})`,
    backgroundPosition: `${focalPointX}% ${focalPointY}%`,
    transform: `scale(1.${imageZoom})`,
  }

  return (
    <div
      className={`cu-textmedia-aside flex-1 rounded-lg bg-no-repeat bg-cover border-solid border-white ${borderWidthClasses[border]}`}
      style={inlineImageStyles}
    />
  )
}

TextMediaBgImage.displayName = 'TextMedia.BgImage'
