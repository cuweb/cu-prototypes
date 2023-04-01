import React from 'react'
import { styles } from './Card.Styles'

export interface CardImageProps {
  children: React.ReactNode
}

export const CardImage = ({ children }: CardImageProps) => {
  return <figure className={`${styles.figure}`}>{children}</figure>
}
