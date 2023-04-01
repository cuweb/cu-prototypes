import React from 'react'
import { styles } from './Card.Styles'

export interface CardFigureProps {
  children: React.ReactNode
}

export const CardFigure = ({ children }: CardFigureProps) => {
  return <figure className={`${styles.figure}`}>{children}</figure>
}
