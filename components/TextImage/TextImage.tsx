import React from 'react'
import { TextImageContent } from './TextImageContent'
import { styles } from './TextImage.Styles'

export interface TextImageProps {
  children?: React.ReactNode
  maxWidth?: '5xl' | '7xl' | 'max'
  hasBorder?: boolean
  reverse?: boolean
}

export const TextImageWrapper = ({
  children,
  maxWidth,
  hasBorder,
  reverse,
}: TextImageProps) => {
  const reverseLayout = reverse ? 'flex-row-reverse' : ''
  const borderStyle = hasBorder ? styles.border : ''

  return (
    <div
      className={`${styles.base} ${
        maxWidth === '7xl' ? 'max-w-7xl' : 'max-w-5xl'
      } ${reverseLayout} ${borderStyle}`}
    >
      {children}
    </div>
  )
}

export const TextImage = Object.assign(TextImageWrapper, {
  Content: TextImageContent,
})
