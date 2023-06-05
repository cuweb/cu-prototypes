/* eslint-disable @next/next/no-img-element */
import React from 'react'
// import { styles } from './HeroTextImage.Styles'

export interface HeroTextImageProps {
  children?: React.ReactNode
  title: string
  isPageBanner?: boolean
  maxWidth?: 'max' | '5xl' | '7xl'
}

export const rdsMaxWidth = {
  '5xl': 'max-w-5xl',
  '7xl': 'max-w-7xl',
  max: 'max-w-screen-2xl',
}

export const styles = {
  base: 'cu-herotxtimg not-contained not-prose mx-auto lg:items-center',
  bottom: 'pb-2 md:pb-6',
  grid: 'grid gap-6 md:gap-10 md:grid-cols-hero-txtimg mx-auto',
  content: 'grid gap-5 md:py-8 italic',
  header: 'font-semibold md:leading-10 text-2xl sm:text-3xl not-italic',
  image: 'bg-center bg-cover rounded-lg shadow-lg',
}

export const HeroTextImage = ({
  children,
  title,
  isPageBanner,
  maxWidth = '5xl',
}: HeroTextImageProps) => {
  const headerSize = maxWidth !== '5xl' ? 'xl:text-5xl xl:leading-[3.5rem]' : ''

  // Set background image
  const backgroundImageUrl = ''
  // const backgroundImageUrl = 'https://picsum.photos/400/266'
  const inlineStyle = {
    backgroundImage: `url(${backgroundImageUrl})`,
  }

  const gridClasses = backgroundImageUrl ? styles.grid : styles.grid
  const headerClasses = isPageBanner ? 'md:text-5xl' : 'md:text-4xl'

  return (
    <div
      className={`${styles.base} ${gridClasses} ${styles.bottom} ${rdsMaxWidth[maxWidth]}`}
      // className={`${styles.base} ${styles.grid} ${styles.bottom} ${rdsMaxWidth[maxWidth]}`}
    >
      <div className={styles.content}>
        <h1 className={`${styles.header} ${headerClasses} ${headerSize}`}>
          {title}
        </h1>
        {children}
      </div>

      {backgroundImageUrl && (
        <div
          className={`min-h-[240px] md:min-h-[360px] h-full ${styles.image}`}
          style={inlineStyle}
        />
      )}
    </div>
  )
}
