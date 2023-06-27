import React from 'react'
import { styles } from './HeroTextImage.Styles'

export interface HeroTextImageContentProps {
  children?: React.ReactNode
  title: string
  paragraph?: string
  headerType?: 'h1' | 'h2'
  hasMediaCol?: boolean
}

export const HeroTextImageContent = ({
  children,
  title,
  paragraph,
  hasMediaCol,
}: HeroTextImageContentProps) => {
  const contentPadding = hasMediaCol ? 'md:py-4' : ''

  return (
    <div className={`${styles.contentWrapper} ${contentPadding}`}>
      <h1 className="text-2xl not-italic font-semibold md:leading-10 sm:text-3xl md:text-4xl lg:text-5xl lg:leading-[3.5rem]">
        {title}
      </h1>

      {paragraph && <p className={styles.paragraph}>{paragraph}</p>}

      {children}
    </div>
  )
}

HeroTextImageContent.displayName = 'HeroTextImage.Content'
