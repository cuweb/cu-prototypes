import React from 'react'
import { styles } from './HeroTextImage.Styles'

export interface HeroTextImageMediaProps {
  children?: React.ReactNode
  image?: string
  angle?: 'left' | 'right' | 'full'
  focalPointX?: string
  focalPointY?: string
}

export const HeroTextImageMedia = ({
  children,
  image,
  angle,
  focalPointX = '50',
  focalPointY = '50',
}: HeroTextImageMediaProps) => {
  const inlineStyle = {
    backgroundImage: `url(${image})`,
    backgroundPosition: `${focalPointX}% ${focalPointY}%`,
  }

  const hasAngle = angle === 'right' ? styles.svgRight : styles.svgLeft

  return (
    <div
      className={`${styles.mediaWrapper} bg-cu-red relative rounded bg-cover bg-no-repeat`}
      style={inlineStyle}
    >
      {angle === 'full' && (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className={styles.svgRight}
          fill="none"
          viewBox="0 0 123 440"
        >
          <path
            fill="#fff"
            d="M0 440h6c-4.4 0-4.5-3-3.5-6C49.344 293.466 118.06 4.849 119 2.5c1-2.5 3-2.5 4-2.5H0v440Z"
          />
        </svg>
      )}
      {angle && (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className={hasAngle}
          fill="none"
          viewBox="0 0 123 440"
        >
          <path
            fill="#fff"
            d="M0 440h6c-4.4 0-4.5-3-3.5-6C49.344 293.466 118.06 4.849 119 2.5c1-2.5 3-2.5 4-2.5H0v440Z"
          />
        </svg>
      )}
      {children}
    </div>
  )
}

HeroTextImageMedia.displayName = 'HeroTextImage.Media'
