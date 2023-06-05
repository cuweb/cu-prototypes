/* eslint-disable @next/next/no-img-element */
import React from 'react'
import { styles } from './TextImage.Styles'

export interface HeroTextImageProps {
  children?: React.ReactNode
  title: string
  image?: string
  isSmall?: boolean
  hasAngle?: boolean
}

export const rdsMaxWidth = {
  '5xl': 'max-w-5xl',
  '7xl': 'max-w-7xl',
  max: 'max-w-screen-2xl',
}

export const HeroTextImage = ({
  children,
  title,
  image,
  hasAngle,
  isSmall,
}: HeroTextImageProps) => {
  const headerSize = isSmall ? '' : 'xl:text-5xl xl:leading-[3.5rem]'

  // Set background image
  const imageUrl = image
  const inlineStyle = {
    backgroundImage: `url(${imageUrl})`,
  }

  // Set classes base on image var being set
  const gridClasses = imageUrl ? styles.gridWithImage : styles.gridNoImage
  const maxWidth = imageUrl ? rdsMaxWidth['7xl'] : rdsMaxWidth['5xl']
  const contentPadding = imageUrl ? 'md:py-8' : 'md:pt-6'

  return (
    <div
      className={`${styles.base} ${styles.grid} ${gridClasses} ${styles.bottom} ${maxWidth}`}
    >
      <div className={`${styles.content} ${contentPadding}`}>
        <h1 className={`${styles.header} ${headerSize}`}>{title}</h1>
        {children}
      </div>

      {imageUrl && (
        <div
          className={`min-h-[240px] md:min-h-[360px] h-full ${styles.image}`}
          style={inlineStyle}
        >
          {hasAngle && (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="136"
              height="450"
              fill="none"
            >
              <path fill="#fff" d="M0 0h135.796L14.046 450H0V0Z" />
            </svg>
          )}
        </div>
      )}
    </div>
  )
}
