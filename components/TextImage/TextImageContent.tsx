import React from 'react'
import { styles, mediaStyles } from './TextImage.Styles'

export interface TextImageContentProps {
  children?: React.ReactNode
  title?: string
  headerType?: 'h1' | 'h2'
  isCenter?: boolean
}

export interface TextImageMediaProps {
  imageUrl?: string
  angle?: 'left' | 'dual' | 'none'
  focalPointX?: string
  focalPointY?: string
  hasMobileImage?: boolean
}

export const TextImageContent = ({
  children,
  title,
  headerType = 'h2',
  isCenter,
  imageUrl,
  angle,
  focalPointX = '50',
  focalPointY = '50',
  hasMobileImage,
}: TextImageContentProps & TextImageMediaProps) => {
  // Spacing and alignment
  const contentPadding = imageUrl ? 'md:py-4' : ''
  const verticallyCenter = isCenter ? 'justify-center' : ''

  // Image options
  const hasImage = imageUrl ? mediaStyles.mediaBgImage : ''
  const noImageOnMobile = hasMobileImage ? '' : 'hidden md:block'
  const inlineStyle = hasImage
    ? {
        backgroundImage: `url(${imageUrl})`,
        backgroundPosition: `${focalPointX}% ${focalPointY}%`,
      }
    : {}

  // Image angle
  let leftSvg = null
  let rightSvg = null

  switch (angle) {
    case 'left':
      leftSvg = (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className={mediaStyles.svgLeft}
          fill="none"
          viewBox="0 0 123 440"
        >
          <path
            fill="#fff"
            d="M0 440h6c-4.4 0-4.5-3-3.5-6C49.344 293.466 118.06 4.849 119 2.5c1-2.5 3-2.5 4-2.5H0v440Z"
          />
        </svg>
      )
      break
    case 'dual':
      leftSvg = (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className={mediaStyles.svgLeft}
          fill="none"
          viewBox="0 0 123 440"
        >
          <path
            fill="#fff"
            d="M0 440h6c-4.4 0-4.5-3-3.5-6C49.344 293.466 118.06 4.849 119 2.5c1-2.5 3-2.5 4-2.5H0v440Z"
          />
        </svg>
      )
      rightSvg = (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className={mediaStyles.svgRight}
          fill="none"
          viewBox="0 0 123 440"
        >
          <path
            fill="#fff"
            d="M0 440h6c-4.4 0-4.5-3-3.5-6C49.344 293.466 118.06 4.849 119 2.5c1-2.5 3-2.5 4-2.5H0v440Z"
          />
        </svg>
      )
      break
    default:
      break
  }

  return (
    <>
      <div
        className={`${
          styles.contentWrapper
        } ${contentPadding} ${verticallyCenter} ${
          headerType === 'h1'
            ? 'text-[26px] sm:leading-10 font-light text-cu-black-700'
            : ''
        }`}
      >
        {title && headerType === 'h1' && (
          <h1 className={`${styles.headerOne} ${styles.underline}`}>{title}</h1>
        )}
        {title && headerType === 'h2' && (
          <h2 className={`${styles.headerTwo} ${styles.underline}`}>{title}</h2>
        )}
        {children}
      </div>

      {imageUrl && (
        <div
          className={`${mediaStyles.mediaWrapper} ${hasImage} ${noImageOnMobile}`}
          style={inlineStyle}
        >
          {leftSvg}
          {rightSvg}
        </div>
      )}
    </>
  )
}

TextImageContent.displayName = 'TextImage.Content'
