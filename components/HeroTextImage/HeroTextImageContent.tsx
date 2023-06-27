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
  headerType = 'h2',
  hasMediaCol,
}: HeroTextImageContentProps) => {
  const contentPadding = hasMediaCol ? 'md:py-4' : ''

  return (
    <div className={`${styles.contentWrapper} ${contentPadding}`}>
      {headerType === 'h1' && (
        <h1 className={`${styles.header} ${styles.headerOne}`}>{title}</h1>
      )}
      {headerType === 'h2' && <h2 className={`${styles.header}`}>{title}</h2>}

      {paragraph && <p className={styles.paragraph}>{paragraph}</p>}

      {children}
    </div>
  )
}

HeroTextImageContent.displayName = 'HeroTextImage.Content'
